<template>
  <div>
    <h6>Note Created On: <span>{{noteCreatedAt}}</span></h6>

    {{note.body}}
    {{note.creator.name}}

  </div>
</template>


<script>
  import { computed } from '@vue/runtime-core'
  export default {
    props: {
      note: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      return {
        noteCreatedAt: computed(() => {
          const d = new Date(props.note.createdAt)
          return new Intl.DateTimeFormat('en-US').format(d)
        })
      }
    },
    components: {}
  }
</script>


<style lang="scss" scoped>

</style>