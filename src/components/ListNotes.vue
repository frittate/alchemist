<template>
  <div>
    <div v-if="$apollo.loading">
      Loading
    </div>
    <div
      v-else
      class="text-left"
    >
      <div
        v-for="molecule in molecules"
        :key="molecule.type"
      >
        <h4 class="font-bold mb-2">
          {{ molecule.type }}
        </h4>
        <ul
          class="mb-10 flex flex-wrap space-x-2"
        >
          <li
            v-for="note in filterBy(molecule.type)"
            :key="note.id"
            class="flex self-stretch"
          >
            <router-link
              :to="`/note/${note.id}`"
              class="p-2 lg:p-4 rounded-xl bg-blue-50 mb-2 border"
            >
              {{ note.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { moleculeSchemas } from '@/utils/schemas/molecules'
import { NotesQuery } from '@/utils/queries/NotesQueries'

export default {
  apollo: {
    notes: {
      query: NotesQuery,
      deep: true
    }
  },
  computed: {
    molecules () {
      return moleculeSchemas
    }
  },
  methods: {
    getContent (content) {
      return JSON.parse(content)
    },
    filterBy (filter) {
      if (!this.$apollo.loading) {
        return this.notes.filter(note => note.molecule === filter)
      }
    }
  }
}
</script>
