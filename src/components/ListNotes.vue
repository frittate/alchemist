<template>
  <div>
    <div v-if="$apollo.loading">
      Loading
    </div>
    <div
      v-else
      class="text-left"
    >
      <ul
        v-for="molecule in molecules"
        :key="molecule.type"
        class="mb-10"
      >
        <h4 class="font-bold mb-2">
          {{ molecule.type }}
        </h4>
        <li
          v-for="note in filterBy(molecule.type)"
          :key="note.id"
        >
          <router-link :to="`/note/${note.id}`">
            {{ note.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import { moleculeSchemas } from '@/utils/schemas/molecules'
// import NotesAPI from '../services/notes.api'

export default {
  apollo: {
    notes: {
      query: gql`query {
        notes {
          id
          title
          molecule
          content
        }
      }`,
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
