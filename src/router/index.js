

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Header from '@/components/Header' 
import Aside from '@/components/Aside' 
import MainContent from '@/components/MainContent' 
import MainContent1 from '@/components/MainContent1' 




// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      components: {
      	default: Header,
      	aside: Aside,
      	mainContent: MainContent
      }
    },
    {
      path: '/other/:id',
      name: 'other',
      components: {
      	default: Header,
      	aside: Aside,
      	mainContent: MainContent
      }
    }
  ]
})



