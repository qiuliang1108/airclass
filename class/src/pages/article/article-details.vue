<template>
  <div class="row ps-f" style="top:0;bottom:0;z-index:120;">
    <div class="row f-0_9 ps-f g-bg-white" style="top:0px;bottom:40px;z-index:120;">
      <Scroll ref="scroll" style="width: 100%;height: 100%;overflow: hidden;"
              :listenScroll="true"
              :probeType="3"
              :scrollbar="{fade: true,interactive: false}"
              @scroll="setGoTop"
      >
        <div>
          <div class="row">
            <div class="t-c f-1_1 pd-tb-15 f-b">
              {{article.title}}
            </div>
            <div class="row pd-10 article-details" v-html="article.content"></div>
          </div>
          <div class="h-50"></div>
        </div>
      </Scroll>
      <GoTop ref="gotop" @go="goTop" :scrollTop="-500" :scroll="$refs['scroll'] && $refs['scroll'].scroll" attr="y"></GoTop>
      <div class="g-bg-warning t-white t-c g-bd-t-e5e ps-r close" style="z-index:150;" @click="$router.back()">
        收起
      </div>
    </div>
  </div>
</template>

<script>

  import Scroll from '@components/scroll/scroll';
  import GoTop from '@components/go-top/go-top';
  import vuex from 'vuex';

  const { mapState } = vuex;

  export default {
    name: "article-detail",
    computed: {
      ...mapState([
        'article'
      ])
    },
    components: {
      Scroll,
      GoTop
    },
    methods: {
      checkArticle() {
        if (!this.article.cid) {
          const currentRoute = this.$router.currentRoute;
          let pervPath = currentRoute.path.split('/');
          pervPath.pop();
          this.$router.push(pervPath.join('/'));
        }
      }
    },
    mounted() {
      this.checkArticle();
    }
  }
</script>

<style scoped lang="scss">
  .close {
    height: 40px;
    line-height: 40px;
  }
</style>

<style lang="scss">
  .article-details {
    line-height: 1.6;
    img {
      max-width: 100%;
      vertical-align: top;
    }
  }
</style>
