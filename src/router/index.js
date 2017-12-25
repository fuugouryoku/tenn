import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import HelloWorld3 from '@/components/HelloWorld3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/3',
      name: 'HelloWorld3',
      component: HelloWorld3
    }
  ]
})
