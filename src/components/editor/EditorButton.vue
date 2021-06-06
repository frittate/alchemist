<template>
  <button
    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2"
    :class="{ 'is-active': active }"
    @click="$emit('click')"
  >
    <icon
      v-if="icon"
      :name="name"
    />
    <template v-else>
      {{ name }}
    </template>
  </button>
</template>

<script>
import Icon from '@/components/decorative/Icon'
export default {
  name: 'EditorButton',
  components: {
    Icon
  },
  props: {
    active: { type: Boolean, default: () => false },
    icon: { type: Boolean, default: () => false },
    name: { type: String, default: () => 'P' }
  }
}
</script>

<style>
  button.is-active {
    @apply bg-gray-500;
  }
</style>
