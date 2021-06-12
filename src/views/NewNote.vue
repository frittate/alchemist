<template>
  <div>
    <section class="text-gray-700 body-font text-left">
      <div class="container px-8 pb-24 mx-auto lg:px-4">
        <div
          class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg md:ml-auto md:mt-0"
        >
          <div class="relative ">
            <input
              id="title"
              v-model="note.title"
              type="text"
              name="title"
              placeholder="Title"
              class="w-full px-4 py-2 mb-4 mr-4 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
            >
          </div>
          <div
            class="relative px-4 py-2 mb-4 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
          >
            Molecule Type
            <label class="block">
              <multiselect
                v-model="note.molecule"
                :options="molecules"
                close-on-select
                label="title"
                track-by="type"
                class="block w-full bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
              >
                ></multiselect>
            </label>
          </div>
          <div class="relative ">
            <EditorWrapper
              :note="note"
              :content.sync="note.content"
              class="w-full px-4 py-2 mb-4 mr-4 text-base text-left text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <button
            :disabled="note.title.length === 0"
            class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none"
            @click="save"
          >
            {{ loading ? 'saving...' : 'save' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EditorWrapper from "@/components/editor/EditorWrapper";
import { moleculeSchemas } from "@/utils/schemas/molecules";
import shortId from "@/utils/shortId";
import { CreateNote } from '@/utils/mutations/NoteMutations'
import { NotesQuery } from '@/utils/queries/NotesQueries';

export default {
  components: {
    EditorWrapper
  },
  data() {
    return {
      loading: false,
      note: {
        title: "",
        content: [],
        molecule: "",
        shortId: ""
      }
    };
  },
  computed: {
    molecules() {
      return moleculeSchemas;
    },
    shortId() {
      return shortId();
    }
  },
  methods: {
    async update() {
      if (this.note.title && this.note.molecule.type) {
        const res = await this.$apollo.mutate({
          // Query
          mutation: CreateNote,
          // Parameters
          variables: {
            CreateNoteInput: {
              title: this.note.title,
              molecule: this.note.molecule.type,
              content: this.note.content,
              shortId: this.shortId
            }
          },
          update: (cache, { data: { createNote } }) => {
            const { id, title, molecule } = createNote
            const data = cache.readQuery({ query: NotesQuery })
            const newItem = {
              __typename: 'Note',
              title,
              id,
              molecule
            }

            data.notes.push(newItem)

            cache.writeQuery({
              query: NotesQuery,
              data
            })
          },
        });

       return res
      }
    },
    async save () {
      this.loading = true
      const newObject = await this.update()
      this.$router.push(`/note/${newObject.data.createNote.id}`)
    }
  }
}
</script>
