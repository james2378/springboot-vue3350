import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jiaowurenyuan from '@/views/modules/jiaowurenyuan/list'
    import liuyan from '@/views/modules/liuyan/list'
    import news from '@/views/modules/news/list'
    import xuejiyidong from '@/views/modules/xuejiyidong/list'
    import xueshengxueye from '@/views/modules/xueshengxueye/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryBanji from '@/views/modules/dictionaryBanji/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXueji from '@/views/modules/dictionaryXueji/list'
    import dictionaryXuejiyidong from '@/views/modules/dictionaryXuejiyidong/list'
    import dictionaryXuejiyidongYesno from '@/views/modules/dictionaryXuejiyidongYesno/list'
    import dictionaryXueshengxueye from '@/views/modules/dictionaryXueshengxueye/list'
    import dictionaryXueyuan from '@/views/modules/dictionaryXueyuan/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBanji',
        name: '班级',
        component: dictionaryBanji
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXueji',
        name: '学籍状态',
        component: dictionaryXueji
    }
    ,{
        path: '/dictionaryXuejiyidong',
        name: '申请项目',
        component: dictionaryXuejiyidong
    }
    ,{
        path: '/dictionaryXuejiyidongYesno',
        name: '申请状态',
        component: dictionaryXuejiyidongYesno
    }
    ,{
        path: '/dictionaryXueshengxueye',
        name: '学业状态',
        component: dictionaryXueshengxueye
    }
    ,{
        path: '/dictionaryXueyuan',
        name: '学院',
        component: dictionaryXueyuan
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/jiaowurenyuan',
        name: '教务人员姓名',
        component: jiaowurenyuan
      }
    ,{
        path: '/liuyan',
        name: '留言版',
        component: liuyan
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/xuejiyidong',
        name: '学籍异动',
        component: xuejiyidong
      }
    ,{
        path: '/xueshengxueye',
        name: '学生学业',
        component: xueshengxueye
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
