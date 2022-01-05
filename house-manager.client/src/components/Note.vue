<template>
  <div>
    {{note.body}}

  </div>
</template>


<script>
  export default {
    props: {
      note: {
        type: Object,
        required: true
      }
    },
    setup() {
      return {}
    },
    components: {}
  }
</script>


<style lang="scss" scoped>

</style>