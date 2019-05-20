<template>
  <div class="go-top" @click="go" v-show="isShow"></div>
</template>

<script>
  export default {
    name: "go-top",
    props: ['scrollTop', 'attr'],
    data() {
      return {
        isShow: false
      };
    },
    methods: {
      toggle(scroll, pos) {
        if (scroll[this.attr] < this.scrollTop) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      go() {
        this.$emit('go');
      }
    }
  }
</script>

<style scoped lang="scss">
  .go-top {
    position: fixed;
    bottom: 44px;
    right: 10px;
    z-index: 1;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, .4) url("./top.png") center no-repeat;
    background-size: 60%;
  }
</style>
