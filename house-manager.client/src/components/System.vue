<template>
  {{ system.name }}
  {{ system.description }}
</template>

<script>
export default {

  props: {
    system: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>