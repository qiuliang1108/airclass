<!-- 分类导航 -->
<template>
  <div class="reset-all-a class-nav ">
    <ul class="reset-ul g-flex t-c">
      <li class="g-flex-1" @click="tab(nav.id)" v-for="nav in allClass.classList" :class="{active:allClass.currentId == nav.id}">
        <a href="javascript:;" class="t-hide">
          {{nav.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  import vuex from 'vuex';

  const { mapState, mapMutations } = vuex;

  export default {
    name: "class-nav",
    props: ['allClass'],
    methods: {
      tab(id) {
        this.$emit('tab', id);
      }
    }
  }
</script>

<style scoped lang="scss">
  .class-nav {
    border-top:1px solid #e5e5e5;
    padding-top: 5px;
    li {
      box-sizing: border-box;
      border-bottom: 1px solid #e5e5e5;
      &:not(:last-of-type) {
        a {
          border-right: 1px solid #e5e5e5;
        }
      }
      &.active {
        a{
          color:#ff8400;
        }
        border-bottom: 2px solid orange;
      }
      a {
        display: block;
        padding: 6px;
        margin-bottom: 5px;
        color: #333;
      }
    }
  }
</style>
