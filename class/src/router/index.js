import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('@pages/index');
const Article = () => import('@pages/article/article');
const ArticleDetails = () => import('@pages/article/article-details');

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [{
    path: '/',      //home
    component: Index,
    children: [{
      path: 'article/:cid',
      component: Article,
      children: [{
        path: ':article_id',
        component: ArticleDetails
      }]
    }]
  }]
});

export default router;
