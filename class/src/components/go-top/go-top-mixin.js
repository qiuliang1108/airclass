class GoTopMixin {
  static install(Vue, opts) {
    Vue.mixin({
      methods: {
        setGoTop({scroll, pos}) {
          this.$refs['gotop'].toggle(scroll, pos);
        },
        //回到顶部
        goTop() {
          this.$refs['scroll'].scrollTo(0, 0, 300);
        }
      }
    });
  }
}

export default GoTopMixin;
