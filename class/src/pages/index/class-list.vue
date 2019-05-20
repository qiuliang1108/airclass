<!-- 分类列表 -->
<template>
  <div class="row">

    <div class="row" v-if="allClass.currentId == 'photoView'">
      <div class="row pd-t-10 t-c">
        温馨提示：点击图片查看原图
      </div>
      <ul class="reset-ul class-list">
        <!--  @click="disableScroll($event)" -->
        <vue-preview ref="preview" :slides="allClass.currentList" @close="enableScroll" @open="disableScroll"></vue-preview>
      </ul>
    </div>

    <div class="row" v-if="allClass.currentId != 'photoView'">
      <ul class="reset-ul class-list">
        <li v-for="item in allClass.currentList" v-if="allClass.currentId != 'photoView'">
          <router-link :to="`/article/${item.id}`" class="t-333">
            <div class="t-c f-1 pd-tb-4 f-b t-warning">
              {{item.name}}
            </div>
            <div class="g-flex pd-4">
              <div class="g-flex-1">
                面向：{{item.face}}
              </div>
              <div class="g-flex-1 t-c">
                共有{{item.series}}系列
              </div>
              <div class="g-flex-1 t-c">
                此为{{item.this_is}}
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="row pd-tb-30 t-999 t-c" v-if="allClass.currentList.length == 0">
      没有相关内容
    </div>
    <Loading v-show="allClass.currentList.length >= 20 && !allClass.currentClass.notMore"></Loading>
  </div>
</template>

<script>
  import Loading from '@components/loading/loading';

  export default {
    name: "class-list",
    props: ['allClass'],
    computed: {
      scrollEl() {
        return this.$parent.$el.firstElementChild;
      }
    },
    data() {
      return {
        scrollComponent: {
          style: ''
        }
      }
    },
    components: {
      Loading
    },
    methods: {
      enableScroll() {
        this.scrollEl.setAttribute('style', this.scrollComponent);
        this.$parent.enable();
      },
      disableScroll() {
        this.scrollComponent = this.scrollEl.getAttribute('style');
        this.scrollEl.setAttribute('style', '');
        this.$parent.disable();
      }
    }
  }
</script>

<style scoped lang="scss">
  .class-list {
    padding: 10px 10px 0 10px;
    li {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #e5e5e5;
      border-bottom-width: 3px;
      border-radius: 6px;
    }
  }
</style>

<style lang="scss">

  .my-gallery {
    figure {
      margin: 5px !important;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      a {
        display: block;
        padding: 5px;
        img {
          width: 100%;
        }
      }
    }
  }

  .preview-wrap {
    top: 0;
    bottom: 0;
    height: unset;
  }
</style>
