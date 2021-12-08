<template>
  <div class="col-3">
    {{ system.name }}
    {{ system.description }}
  </div>
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