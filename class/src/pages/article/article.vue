<template>
  <div class="row f-0_9 ps-f g-bg-white" style="top:43px;bottom:42px;z-index:50;">
    <Scroll ref="scroll" style="width: 100%;height: 100%;overflow: hidden;"
            :pullup="true"
            :listenScroll="true"
            :probeType="3"
            :scrollbar="{fade: true,interactive: false}"
            @scrollToEnd="getArticleList"
            @scroll="setGoTop"
    >
      <div>
        <div class="row" v-if="banner">
          <a :href="url">
            <img :src="banner" alt="" class="w-100">
          </a>
        </div>
        <ul class="reset-ul article-list">
          <li class="mg-b-10 pd-10" v-for="item in articleList" @click="_setArticle(item,cid,item.id)">
            <div class="t-c f-1 pd-tb-4 f-b t-warning">
              {{item.title}}
            </div>
            <div class="g-flex pd-4">
              <div class="g-flex-1">
                {{item.sub_content}}
              </div>
            </div>
          </li>
        </ul>
        <div class="row pd-tb-30 t-999 t-c" v-if="articleList.length == 0">
          没有相关内容
        </div>
        <Loading v-show="articleList.length >= pageCount && !notMore"></Loading>
      </div>

      <GoTop ref="gotop" @go="goTop" :scrollTop="-500" :scroll="$refs['scroll'] && $refs['scroll'].scroll" attr="y"></GoTop>

    </Scroll>
    <MTransition transition="slide-top">
      <router-view></router-view>
    </MTransition>
  </div>
</template>

<script>

  import api from '@common/api';
  import config from '@common/config/config';
  import GoTop from '@components/go-top/go-top';
  import Scroll from '@components/scroll/scroll';
  import Loading from '@components/loading/loading';
  import MTransition from '@components/m-transition/m-transition';
  import vuex from 'vuex';

  const { mapMutations } = vuex;

  export default {
    components: {
      Scroll,
      Loading,
      MTransition,
      GoTop
    },
    data() {
      return {
        page: 1,
        cid: 0,
        articleList: [],
        banner: '',
        url: '',
        notMore: false
      }
    },
    computed: {
      pageCount() {
        return config.page.count;
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.cid = to.params.cid;
        vm.getArticleList(true);
      });
    },
    methods: {
      ...mapMutations([
        'setArticle'
      ]),
      _setArticle(article, id, cid) {
        this.$router.push(`/article/${id}/${cid}`);
        this.setArticle(article);
      },
      getArticleList(isInit) {
        const articleList = this.articleList;
        if (!isInit && articleList.length < config.page.count || this.notMore) return;
        api.getArticleList({
          page: this.page++,
          cid: this.cid
        }).then((resp) => {
          const data = resp.data;
          this.checkMore(data);
          this.url = data.nav_img.url || '';
          this.banner = data.nav_img.nav_img || '';
          this.articleList = articleList.concat(data.art_list);
        });
      },
      checkMore(data) {
        if (data.art_list.length < config.page.count) {
          this.notMore = true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .article-list {
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
