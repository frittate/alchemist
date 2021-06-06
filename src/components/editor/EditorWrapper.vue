<template>
  <div>
    <editor-menu :editor="editor" />
    <editor-content
      ref="editor"
      :editor="editor"
      class="border border-s border-blue-400 overflow-y-auto h-120 text-black"
    />

    <!--    <div v-show="showSuggestions" ref="suggestions" class="suggestion-list">
      <template v-if="hasResults">
        <div
          v-for="(linkedFile, index) in filteredFiles"
          :key="linkedFile.id"
          class="suggestion-list__item"
          :class="{ 'is-selected': navigatedFileIndex === index }"
          @click="selectFile(linkedFile)"
        >
          {{ linkedFile.name }}
          <span class="text-xs">({{ linkedFile.molecule }})</span>
        </div>
      </template>
      <div v-else class="suggestion-list__item is-empty">
        No linkedFiles found
      </div>
    </div> -->
  </div>
</template>

<script>
// Import the editor
import { Editor, EditorContent } from 'tiptap'
import tippy, { sticky } from 'tippy.js'
import Mention from './nodes/Mention.js'
import defaultExtensions from './defaultExtensions'
import EditorMenu from './EditorMenu'
// import { moleculeSchemas } from '@/utils/schemas/molecules'

export default {
  name: 'EditorWrapper',
  components: {
    EditorMenu,
    EditorContent
  },
  props: {
    note: {
      type: Object,
      default: () => {}
    },
    content: {
      type: [Array, String],
      required: true
    }
  },
  data () {
    return {
      editor: null,
      query: null,
      suggestionRange: null,
      filteredFiles: [],
      navigatedFileIndex: 0,
      insertMention: () => {},
      json: null
    }
  },
  computed: {
    hasResults () {
      return this.filteredFiles.length
    },
    showSuggestions () {
      return this.query || this.hasResults
    },
    suggestedItems () {
      return this.$store.state.files.map(el => {
        return {
          molecule: el.molecule,
          id: el.id,
          name: el.title
        }
      })
    }
  },
  mounted () {
    if (this.note === undefined) {
      this.$router.push('/')
    }

    this.editor = new Editor({
      extensions: [
        new Mention({
          items: () => this.suggestedItems,
          onEnter: ({
            items, query, range, command, virtualNode
          }) => {
            this.query = query
            this.filteredFiles = items
            this.suggestionRange = range
            this.renderPopup(virtualNode)
            this.insertMention = command
          },
          onChange: ({
            items, query, range, virtualNode
          }) => {
            this.query = query
            this.filteredFiles = items
            this.suggestionRange = range
            this.navigatedFileIndex = 0
            this.renderPopup(virtualNode)
          },
          onExit: () => {
            this.query = null
            this.filteredFiles = []
            this.suggestionRange = null
            this.navigatedFileIndex = 0
            this.destroyPopup()
          },
          onKeyDown: ({ event }) => {
            if (event.key === 'ArrowUp') {
              this.upHandler()
              return true
            }

            if (event.key === 'ArrowDown') {
              this.downHandler()
              return true
            }

            if (event.key === 'Enter') {
              this.enterHandler()
              return true
            }

            return false
          }
        }),
        ...defaultExtensions()
      ],
      content: null,
      onUpdate: () => {
        const changes = {
          key: 'content',
          value: this.editor.getJSON().content
        }
        this.$emit('update:content', changes.value)
      }
    })

    if ('content' in this) {
      let contentParsed

      if (typeof this.content === 'string') {
        contentParsed = JSON.parse(this.content)
      } else {
        contentParsed = this.content
      }

      const parsedContent = {
        type: 'doc',
        content: contentParsed
      }

      this.editor.setContent(parsedContent, true)
    } else {
      this.editor.setContent('', true)
    }
  },
  beforeDestroy () {
    // this.saveContent()
    this.editor.destroy()
  },
  methods: {
    clearContent () {
      this.editor.clearContent(true)
      this.editor.focus()
    },
    hasChanges () {
      this.$emit('hasChanges', this.editor.getJSON())
    },
    // navigate to the previous item
    // if it's the first item, navigate to the last one
    upHandler () {
      this.navigatedFileIndex = ((this.navigatedFileIndex + this.filteredFiles.length) - 1) % this.filteredFiles.length
    },
    // navigate to the next item
    // if it's the last item, navigate to the first one
    downHandler () {
      this.navigatedFileIndex = (this.navigatedFileIndex + 1) % this.filteredFiles.length
    },
    enterHandler () {
      const linkedFile = this.filteredFiles[this.navigatedFileIndex]
      if (linkedFile) {
        this.selectFile(linkedFile)
      }
    },
    selectFile (linkedFile) {
      this.insertMention({
        range: this.suggestionRange,
        attrs: {
          id: linkedFile.id,
          label: linkedFile.name
        }
      })
      this.editor.focus()
    },
    renderPopup (node) {
      if (this.popup) {
        return
      }
      this.popup = tippy('#__nuxt', {
        getReferenceClientRect: node.getBoundingClientRect,
        appendTo: () => document.body,
        interactive: true,
        sticky: true, // make sure position of tippy is updated when content changes
        plugins: [sticky],
        content: this.$refs.suggestions,
        trigger: 'mouseenter', // manual
        showOnCreate: true,
        placement: 'top-start',
        inertia: true,
        duration: [400, 200]
      })
    },
    destroyPopup () {
      if (this.popup) {
        this.popup[0].destroy()
        this.popup = null
      }
    }
  }
}
</script>

<style scoped>
.ProseMirror {
  padding: 1rem;
}
</style>
