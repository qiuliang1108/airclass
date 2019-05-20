<template>
  <div class="g-flex g-bg-warning g-flex-ai-c f-1 header" v-if="header.type === 1">
    <div class="g-flex-1" v-if="header.hasUrl">
      <a :href="header.url">
        <span class="g-arrow g-arrow-l g-arrow-small bd-white"></span>
      </a>
    </div>
    <div class="g-flex-4 t-hide t-white t-c">
      {{header.title}}
    </div>
    <div class="g-flex-1">

    </div>
  </div>

  <div class="g-flex pd-10 g-bg-primary g-bg-white g-flex-ai-c f-1 header" v-else-if="header.type === 2">
    <div class="g-flex-4 t-hide t-white t-c">
      {{header.title}}
    </div>
  </div>

</template>

<script>

  import vuex from 'vuex';

  const { mapState } = vuex;

  export default {
    computed: {
      ...mapState(['header'])
    }
  }
</script>

<style scoped lang="scss">
  .header {
    padding: 10px;
    color: white;
    font-size: 1rem;
  }
</style>
