import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title:'Cherry Blossoms inc - Home',
      metaTag: [{
        name:"Cherry Blossoms inc shadow boxes etc...",
        content: "Design Shadow boxes"
      }
    ]
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title:'Cherry Blossoms inc - About',
      metaTag: {
        name:"Cherry Blossoms inc shadow boxes etc...",
        content: "Design Shadow boxes"
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=> {
  //get all metatags 
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  //get meta title
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.metaTags);
  //const previousNearestWithMeta = from.slice().reverse().find(r => r.meta && r.meta.metaTags);

  //if route with a title is found then return 
  if(nearestWithTitle) { document.title = nearestWithTitle.meta.title }

  //remove all stale elements from the head. and set key attribute below
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.removeChild(el));

  //skip if rendering if meta tags are none
  if(!nearestWithMeta) { return next(); }

  //turn the tags into actuall elements we can use 
  nearestWithMeta.meta.metaTags.map(tagDef => {
    //create meta tags 
    const tag = document.createElement('meta');

    tag.setAttribute('data-vue-router-controlled', '');

    return tag, tagDef;
  })
  //add the meta to the head of the document.
  .foreach(tag => document.head.appendChild(tag));
    next();
});

export default router
