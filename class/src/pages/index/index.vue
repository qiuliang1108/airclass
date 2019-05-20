<template>
  <div class="row f-0_9 class-main">
    <Scroll ref="scroll" style="width: 100%;height: 100%;overflow: hidden;"
            :pullup="true"
            :listenScroll="true"
            :probeType="3"
            :click="true"
            :scrollbar="{fade: true,interactive: false}"
            @scrollToEnd="getClassList"
            @scroll="setGoTop"
    >
      <div>
        <!-- slide -->
        <div class="row" v-if="banner.length">
          <Slide class="ps-r" ref="slide" :autoPlay="true" :click="true" :loop="true" :showDot="true" :interval="4000"
                 :threshold="0.3" :speed="1500">
            <div v-for="item in banner">
              <a :href="item.url" class="block w-100">
                <img @load="loadImg" :src="item.src_img" class="w-100" :alt="item.title" style="height: 100%;">
              </a>
            </div>
          </Slide>
        </div>

        <!-- nav -->
        <!--<Navigator ref="navigator" :navList="allClass.classList" class="navigator" style="max-height:50px;overflow: hidden;" @change="tab" :currentTabIndex="1">-->
        <!--<template slot="item" slot-scope="{text,index,isCurrentTab}">-->
        <!--<a href="javascript:;" class="tab-text" :class="{active:isCurrentTab(index)}" :data-id="index">{{text}}</a>-->
        <!--</template>-->
        <!--</Navigator>-->

        <!-- nav -->
        <ClassNav @tab="tab" :allClass="allClass"></ClassNav>

        <!-- class list -->
        <div class="row line">
          <ClassList :allClass="allClass"></ClassList>
        </div>
      </div>

      <GoTop ref="gotop" @go="goTop" :scrollTop="-500" :scroll="$refs['scroll'] && $refs['scroll'].scroll" attr="y"></GoTop>

    </Scroll>
    <MTransition>
      <router-view></router-view>
    </MTransition>
  </div>
</template>

<script>
  import api from '@common/api';
  import config from '@common/config/config';
  import Scroll from '@components/scroll/scroll';
  import Slide from '@components/slide/slide';
  import MTransition from '@components/m-transition/m-transition';
  import ClassList from './class-list';
  import ClassNav from './class-nav';
  import GoTop from '@components/go-top/go-top';
  import Navigator from '@components/navigator/navigator';

  //初始化数据
  function getPhotoViewConfig() {
    return {
      id: "photoView",
      name: "智慧图库",
      icon: ""
    };
  }

  function getPhotoData() {
    return {
      src: '',
      msrc: '',
      alt: '图片',
      title: '图片',
      w: 400,
      h: 400
    };
  }

  //添加参数
  function addParams(params, adds) {
    for (let parsm in adds) {
      if (!adds.hasOwnProperty(parsm)) continue;
      params[parsm] = adds[parsm];
    }
  }

  export default {
   data() {
      return {
        allClass: {
          classList: [],
          currentId: -1,
          currentIndex: 0,
          currentClass: {},
          currentList: [],
          indexInCache: {}
        },
        banner: []
      }
    },
    created() {
      api.getClass().then((resp) => {
        // console.log(resp);
        console.log('返回数据', resp.data);
        
        const data = resp.data.list,
          allClass = this.allClass,
          classList = data.pid_class_list;

        this.initBanner(data.banner_list);
        allClass.classList = classList;
        allClass.currentId = allClass.classList.length > 0 ? allClass.classList[0].id : config.class.photoId;
        allClass.classList.push(getPhotoViewConfig());
        classList.forEach((list) => {
          addParams(list, {
            page: 1,
            list: [],
            notMore: false
          });
        });
        this.initClassCache();
        const allSeconds = this.initSecondsClass();
        this.initPhotoView(data.smart_img);
        Promise.all(allSeconds).then(() => {
          this.tab(allClass.currentId);
        });
      });
    },

    methods: {

      //初始化二级分类列表
      initSecondsClass() {
        const allSeconds = [];
        this.allClass.classList.forEach((_class, index) => {
          if (_class.id == config.class.photoId) return;
          allSeconds.push(api.getSecondClass({
            page: _class.page++,
            id: _class.id
          }).then((resp) => {
            const data = resp.data;
            this.allClass.classList[index].list = data.list;
          }));
        });
        return allSeconds;
      },

      //设置分类缓存
      initClassCache() {
        this.allClass.classList.forEach((_class, index) => {
          this.allClass.indexInCache[_class.id] = _class;
        });
      },

      //初始化banner
      initBanner(bannerList) {
        this.banner = bannerList;
      },

      //监听 图片 load 调用slide中update
      loadImg() {
        if (!this.checkloaded) {
          this.checkloaded = true;
          setTimeout(() => {
            this.$refs.slide.update();
          }, 20);
        }
      },

      //初始化图库
      initPhotoView(smartImg) {
        const photoView = this.allClass.indexInCache[config.class.photoId];
        photoView.list = this.initPhoto({ list: smartImg });
      },

      //初始化图片数据
      initPhoto(data) {
        const _data = [];
        data.list.forEach((img) => {
          const config = getPhotoData();
          config.msrc = config.src = img.src_img;
          config.alt = config.title = img.name;
          _data.push(config);
        });
        return _data;
      },

      //获取分类列表
      getClassList() {

        const allClass = this.allClass;

        let isSmartImg = false;

        if (allClass.currentList.length < config.page.count || allClass.currentClass.notMore) return;

        if (allClass.currentClass.id == 'photoView') {
          isSmartImg = true;
        }

        api.getSecondClass({
          page: allClass.currentClass.page++,
          id: allClass.currentId,
          type: isSmartImg ? 'img' : undefined
        }).then((resp) => {
          const data = resp.data;
          this.updateCurrentListType(data);
          this.checkMore(data);
        });
      },

      //更新对应的二级数据，并且更新挂载的列表
      updateCurrentListType(data) {
        if (this.allClass.currentClass.id == config.class.photoId) {
          const photoList = this.initPhoto(data);
          this.updateCurrentList({ list: photoList });
        } else {
          this.updateCurrentList(data);
        }
      },

      updateCurrentList(data) {
        const allClass = this.allClass,
          currentClass = allClass.currentClass;
        currentClass.list = currentClass.list.concat(data.list);
        allClass.currentList = currentClass.list;
      },

      checkMore(data) {
        if (data.list.length < config.page.count) {
          this.allClass.currentClass.notMore = true;
        }
      },

      tab(id) {
        const allClass = this.allClass;
        if (id == undefined) {
          id = allClass.classList[0].id;
        } else if (!(typeof id == 'string' || typeof id == 'number')) {
          id = id.id;
        }
        allClass.currentId = id;
        allClass.currentClass = allClass.indexInCache[id];
        allClass.currentList = allClass.currentClass.list || [];
      }
    },

    components: {
      Scroll,
      Slide,
      ClassList,
      ClassNav,
      Navigator,
      MTransition,
      GoTop
    }
  }
</script>

<style scoped lang="scss">
  .navigator {
    .tab-text {
      padding: 10px 20px;
      display: inline-block;
      color: #333;
      &.active {
        color: #ff8400;
        border-bottom: 2px solid #ff8400;
      }
    }
  }
</style>

<style lang="scss">
  .navigator {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    li {
      box-sizing: border-box;
      padding: 5px 0px;
      &:not(:last-of-type) {
        a {
          border-right: 1px solid #e5e5e5;
        }
      }
    }
  }

  .class-main {
    position: fixed;
    top: 43px;
    bottom: 42px;
    z-index: 30;
  }
</style>












