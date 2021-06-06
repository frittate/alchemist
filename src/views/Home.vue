<template>
  <main class="home p-4">
    <ListNotes />
  </main>
</template>

<script>
// @ is an alias to /src
import ListNotes from '@/components/ListNotes.vue'

export default {
  name: 'Home',
  components: {
    ListNotes
  }
}
</script>
