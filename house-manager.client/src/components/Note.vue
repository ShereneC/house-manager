<template>
  <div class="col-8">
    <p class="mb-0">{{note.body}}</p>
  </div>
  <div class="col-3 d-flex justify-content-between">
    <h6 class="mb-0 text-break px-1">{{note.creator.name}}</h6>
    <!-- Why is creator.picture not working but creator.name is???? -->
    <!-- <img :src="note.creator.picture" alt="profile image" class="profile-pic ml-2" /> -->
    <h6 class="mb-0">{{noteCreatedAt}}</h6>
  </div>
  <div class="col-1 p-0 text-center">X</div>

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
        }),
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