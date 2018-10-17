import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hmoe from '@/components/Hmoe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    {
      path: '/Hmoe',
      name: 'Hmoe',
      component: Hmoe
}
  ]
})
