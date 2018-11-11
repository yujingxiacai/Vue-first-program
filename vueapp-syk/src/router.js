import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import Book from './views/Book.vue';
import Picture from './views/Picture.vue';
import Movieinfo from './views/Movieinfo.vue';
import Picturedetail from './views/Picturedetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/movie',
      // component: Movie,
      // component: Home,
    }, {
      path: '/movie',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    }, {
      path: '/book',
      name: 'book',
      component: Book,
    }, {
      path: '/picture',
      name: 'picture',
      component: Picture,
    }, {
      path: '/movieinfo',
      name: 'movieinfo',
      component: Movieinfo,
    }, {
      path: '/picturedetail/:index',
      name: 'picturedetail',
      component: Picturedetail,
    },
  ],
});
