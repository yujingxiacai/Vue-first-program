import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Yujingxiacai from './views/Yujingxiacai.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/yujingxiacai',
      name: 'yujingxiacai',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Yujingxiacai.vue'),
      // 如果上面没有import引入就在这儿引入.
      component: Yujingxiacai,
      alias: '/hua',
      children: [
        {
          path: 'test1',
          name: 'test1',
          component: Test1,
        }, {
          path: 'test2',
          name: 'test2',
          component: Test2,
        },
      ],
    },
  ],
});
export default router;
