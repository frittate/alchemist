<template>
  <div class="text-left">
    <ul
      v-for="molecule in molecules"
      :key="molecule.type"
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
      return this.notes.filter(note => note.molecule === filter)
    }
  }
}
</script>
