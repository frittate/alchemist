<template>
  <div class="editor">
    <editor-content
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import Mention from './nodes/Mention.js'
import defaultExtensions from './defaultExtensions'

export default {
  components: {
    EditorContent
  },
  props: {
    previewContent: {
      type: Array, default: () => []
    }
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      editable: false,
      content: null,
      extensions: [new Mention(),
        ...defaultExtensions()]
    })

    if (this.previewContent.length !== 0) {
      const parsedContent = {
        type: 'doc',
        content: this.previewContent
      }

      this.editor.setContent(parsedContent, true)
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>
