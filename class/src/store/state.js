function headerStore() {
  return {
    title: "空中课堂",
    type: 1,
    url: 'javascript:history.go(-1);',
    hasUrl: true
  }
}

export default {
  article: {},
  header: headerStore()
};
