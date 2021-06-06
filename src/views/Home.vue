<template>
  <div class="home">
    <ListNotes msg="Welcome to Your Vue.js App" />
  </div>
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
