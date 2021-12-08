<template>
  <div class="col-3">
    <h3>{{ system.name }}</h3>
    <p>{{ system.description }}</p>
    <p>{{ system.needService }}</p>
    <p>{{ system.lastServiced }}</p>
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