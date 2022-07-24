// //该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import MyHome from '../components/Home/MyHome'
import MyLogin from '../components/login/MyLogin'
import MyRegister from '../components/register/MyRegister'
//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:MyHome
        },
        {
            path:'/login',
            component:MyLogin
        },
        {
            path:'/register',
            component:MyRegister
        }
    ]
})

