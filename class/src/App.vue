<template>
  <div id="app" class="t-333 reset-all-a" @touchmove="preventDefault">
    <MHeader></MHeader>
    <MTransition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </MTransition>
    <MMenu></MMenu>
  </div>
</template>

<script>

  import MHeader from '@components/m-header/m-header';
  import MTransition from '@components/m-transition/m-transition';
  import MMenu from '@components/m-menu/m-menu';

  export default {
    name: 'App',
    components: {
      MHeader,
      MTransition,
      MMenu
    },
    methods: {
      preventDefault(event) {
        event.preventDefault();
      }
    }
  }
</script>

<style lang="scss">
  .slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
    transition: all .2s;
  }

  .slide-left-enter, .slide-left-leave-active, .slide-right-enter, .slide-right-leave-active {
    opacity: 0;
  }

  .slide-right-enter {
    transform: translateX(100px);
  }

  .slide-right-leave-active {
    transform: translateX(-100px);
  }

  .slide-left-enter {
    transform: translateX(-100px);
  }

  .slide-left-leave-active {
    transform: translateX(100px);
  }

</style>
