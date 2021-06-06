<template>
  <div v-if="$apollo.loading">
    Loading
  </div>
  <section
    v-else
    class="text-gray-700 body-font text-left"
  >
    <div class="container px-8 pb-24 mx-auto lg:px-4">
      <div class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg">
        <p class="uppercase text-gray-500 text-xs">
          {{ note.molecule }} - {{ note.id }}
        </p>
        <input
          id="title"
          v-model="note.title"
          type="text"
          name="title"
          placeholder="Title"
          class="w-full px-4 py-2 mt-4 mb-4 mr-4 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
        >
        <EditorWrapper
          :note="note"
          :notes="notes"
          :content.sync="content"
          class="mt-8"
          @on-link-item="linkNewItem"
        />
        <h2 class="mt-4 font-bold text-lg">
          Linked Notes
        </h2>
        <ul>
          <li
            v-for="linked in resolveLinked"
            :key="linked.id"
          >
            <router-link :to="`/note/${linked.id}`">
              {{ linked.title }}
            </router-link>
          </li>
        </ul>
        <multiselect
          v-model="resolveLinked"
          :options="notes"
          :multiple="true"
          label="title"
          track-by="id"
        />
        <button
          class="mt-8 px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none"
          @click="update"
        >
          Save
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import EditorWrapper from '../components/editor/EditorWrapper'

export default {
  name: 'NoteDetail',
  components: {
    EditorWrapper
  },
  apollo: {
    note: {
      query: gql`
        query Note($id: ID!) {
          note(id: $id) {
            id
            title
            content
            molecule
            linked
          }
        }
      `,
      variables () {
        return {
          id: this.$route.params.id
        }
      },
      result(ApolloQueryResult, key) {
        this.setLocalNote(ApolloQueryResult.data)
      }
    },
    notes: {
      query: gql`
        query {
          notes {
            id
            title
          }
        }
      `
    }
  },
  data() {
    return {
      editing: false,
      noteUpdated: {
        title: '',
        content: '',
        molecule: '',
        linked: []
      }
    }
  },
  computed: {
    resolveLinked: {
      get () {
        return this.notes.filter(el => this.noteUpdated.linked.includes(el.id))
      },
      set (ids) {
        this.noteUpdated.linked = ids.map(el => el.id)
      }
    },
    id () {
      return this.$route.params.id
    },
    content: {
      get () {
        return this.note.content
      },
      set (value) {
        this.noteUpdated.content = value
      }
    }
  },
  methods: {
    setLocalNote() {
      console.log('n', this.note );
      this.noteUpdated.content = this.note.content
      this.noteUpdated.linked = this.note.linked
    },
    linkNewItem(item) {
      this.noteUpdated.linked.push(item.id)
    },
    update () {
      this.$apollo.mutate({
        // Query
        mutation: gql`mutation UpdateNote($UpdateNoteInput: UpdateNoteInput!) {
          updateNote(input: $UpdateNoteInput) {
            id
          }
        }`,
        // Parameters
        variables: {
          UpdateNoteInput: {
            title: this.note.title,
            id: this.note.id,
            molecule: this.note.molecule,
            linked: this.noteUpdated.linked,
            content: this.noteUpdated.content
          }
        }
      })
    }
  }
}
</script>
