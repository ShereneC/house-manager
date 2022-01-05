<template>
  <div class="col d-flex flex-column">
    <h6>Note Created On: <span>{{noteCreatedAt}}</span></h6>
    <p>{{note.body}}</p>
    <div class="d-flex flex-row align-items-end justify-content-end">
      <h6>{{note.creator.name}}</h6>
      <img :src="note.creator.picture" alt="profile image" class="profile-pic ml-2" />
    </div>
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
  .profile-pic {
    height: 3rem;
    width: 3rem;
    border-radius: 50%
  }
</style>