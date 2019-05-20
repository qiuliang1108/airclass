<template>
  <div class="row menu">
    <div class="col-xs-4">
      <router-link to="/" class="menu-item active">
        首页
      </router-link>
    </div>
    <div class="col-xs-4">
      <a href="http://www.dtb315.com/home/index/main.html" class="menu-item">
        点通宝
      </a>
    </div>
    <div class="col-xs-4">
      <a href="https://sdf531.kuaizhan.com/92/58/p473156679dcf38" class="menu-item">
        APP说明
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "m-menu"
  }
</script>

<style scoped lang="scss">
  .menu {
    position: fixed;
    bottom:0;
    left:0;
    text-align: center;
    font-size: 0.8rem;
    border-top:1px solid #ff8400;
    a.menu-item{
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      padding:10px;
      color:#666;
      &.active{
        background-color: #ff8400;
        color:white;
      }
    }
  }
</style>
