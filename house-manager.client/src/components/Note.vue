<template>
  <div>
    <h6>Note Created <span>{{note.createdAt}}</span></h6>

    {{note.body}}
    {{note.creator.name}}

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