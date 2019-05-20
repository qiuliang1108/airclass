<template>
 <div class=''>

 </div>
</template>

<script>
import api from '@common/api';
import config from '@common/config/config';

function getPhotoViewConfig() {
  return {
    id: '',
    name: '',
    icon: ''
  }
}

function getPhotoData() {
  return {
    src: '',
    msrc: '',
    alt: '',
    title: '',
    w: 400,
    h: 400
  }
}

function addParams(obj1, obj2) {
  for(var k in obj2) {
    if(!obj2.hasOwnProperty(k)) continue;
    obj1[k] = ojb2[k];
  }
}

 export default {
   name: 'my-index' ,
    /* classList  []*/
    // {id: "1", 
    // name: "主题课程", 
    // pid: "0",
    //  page: 1,  后来添加
    //  list: [],   '/airclass/index/list_tree' 返回的data中的list
    //  notMore: false}

    /* indexInCache {} */
    // {
    //   1: {   // currentClass
    //      {id: "1", 
    //       name: "主题课程", 
    //       pid: "0",
    //       page: 1,  后来添加
    //       list: [],  // currentList      '/airclass/index/list_tree' 返回的data中的list
    //       notMore: false}       
    //   },
    //   photoView: {
    //      {
    //        id: "photoView",
    //        name: "智慧图库",
    //        icon: ""
    //       page: 1,  后来添加
    //       list: [{
    //         {
    //          src: '',
    //          msrc: '',
    //          alt: '图片',
    //          title: '图片',
    //           w: 400,
    //           h: 400
    //         }
    //      }],  // 初始化图库
    //       notMore: false}    
    //      };
    //   }
    // }
   data() {
      return {
        allClass: {
          classList: [],  // pid_class_list
          currentId: -1,  // allClass.classList[0].id : config.class.photoId  "1" 'photoView'
          currentIndex: 0,
          currentClass: {},
          currentList: [],
          indexInCache: {}
        },
        banner: [] // banner_list
      }
    },
    created() {
      api.getClass().then((resp)=>{
        if(resp.data.status == 1) {
          let data = resp.data;
          let allClass = this.allClass;
          allClass.classList = data.list.pid_class_list; 
          allClass.classList.push(getPhotoData());
          let bannerList = data.list.banner_list;
          initBannnerList(bannerList);
          allClass.currentId = all.classList.length > 0 ? allClass.classList[0].id : config.class.photoView;

          allClass.classList.forEach(function(item, index){
            addParams(item, {
              notMore: false,
              page: 2,
              list: []
            })
          }),
          this.initClassCache(allClass.classList);
          const allSeconds = this.initSecondClass();
          var imgs = data.list.smart_img;
          this.initPhotoView(imgs);
          // 2级列表都挂靠完毕后
          Promise.all(allSeconds).then(()=>{
            
          })
        }
      })
    },
    methods: {
      initBannnerList(bannerList) {
        this.banner = bannnerList;
      },
      initClassCache(classList) {
        let indexInCache = this.allClass.indexInCache;
        classList.forEach(function(item, index){
          indexInCache[item.id] = item;
        })
      },
      initSecondClass() {
        // api.getSecondClass({
        //   page: ,
        //   id: 
        // }).then((resp)=>{
        //   let data = resp.data;
        //   let secondClassLists = data.list;
        // })
        var allSeconds = []; // 为promise.all 做准备
        this.allClass.classList.forEach(function(item, index){
          if(item.id == config.class.photoView) return;
          allSeconds.push( api.getSecondClass({
            page: item.page++,
            id: item.id
          }).then((resp)=>{
            let data = resp.data;
            item.list = data.list;
          }))
        })
        return allSeconds;
      },
      initPhotoView(imgs) {
        let photoView = this.allClass.indexInCache[config.class.photoView];
        photoView.list = this.initPhoto(imgs);
      },
      initPhoto(imgs) {
        let _imgs = [];
        imgs.forEach(function(item, index){
          let config = getPhotoData();
          config.src = config.msrc = item.src_img;
          config.alt = config.title = item.name;
          _imgs.push(config);
        })
        return _imgs;
      }
    }
 }
</script>

<style>

 
</style>
