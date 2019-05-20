<template>
  <div ref="viewport" class="navigator-component">
    <div class="list-wrapper">
      <Scroll ref="scroll" direction="horizontal" :scrollX="true" :scrollY="false" :click="false">
        <div class="scroll-content">
          <ul class="tab-list" ref="tabList">
            <li v-for="item in navList" class="tab-item" @click="selectNav(item)" :data-id="item.id">
              <slot name="item" :text="item.name" :index="item.id" :isCurrentTab="isCurrentTab">
                <span class="tab-name" :class="{'link-active':isCurrentTab(item.id)}">{{item.name}}</span>
              </slot>
            </li>
          </ul>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import Scroll from '@components/scroll/scroll';

  const EVENT_CHANGE = 'change'

  export default {
    props: {
      navList: {
        type: Array,
        default() {
          return [{
            id: 1,
            name: 'default'
          }]
        }
      },
      currentTabIndex: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        currentTab: 4,
        current: 1
      }
    },
    mounted() {
      setTimeout(() => {
        this._initTabListWidth();
        this.$emit(EVENT_CHANGE)
        if ( this.currentTabIndex === null ) {
          this.current = this.currentTab
        } else {
          this.current = this.currentTabIndex
        }
        this._adjust(this.current);
      }, 500)
    },
    methods: {
      isCurrentTab(index) {
        return index == this.current
      },
      selectNav(item) {
        this.current = item.id
        this._adjust(item.id)
        this.$emit(EVENT_CHANGE, item)
      },
      _initTabListWidth() {
        const tabList = this.$refs.tabList
        const items = tabList.children
        let width = 0
        for (let i = 0; i < items.length; i++) {
          width += items[i].clientWidth
        }
        tabList.style.width = (width + 1) + 'px'
      },
      _adjust(tabId) {
        const viewportWidth = this.$refs.viewport.clientWidth
        const tabListWidth = this.$refs.tabList.clientWidth
        const minTranslate = Math.min(0, viewportWidth - tabListWidth)
        const middleTranslate = viewportWidth / 2
        const items = this.$refs.tabList.children
        let width = 0
        this.navList.every((item, index) => {
          if ( item.id === tabId ) {
            return false
          }
          width += items[index].clientWidth
          return true
        })
        let translate = middleTranslate - width
        translate = Math.max(minTranslate, Math.min(0, translate))
        this.$refs.scroll.scrollTo(translate, 0, 300)
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang='scss' scoped>
  .navigator-component {
    .list-wrapper {
      background: none;
      .scroll-content {
        display: inline-block;
      }
      .tab-list {
        padding: 0;
        margin: 0 auto;
        .tab-item {
          display: inline-block;
        }
      }
    }
  }

</style>
