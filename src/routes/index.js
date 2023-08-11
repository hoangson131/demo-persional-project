import Home from '~/Pages/Home'
import Profile from'~/Pages/Profile'
import Notification from '~/Pages/Notification'
import Cart from '~/Pages/Cart'

import { DefaultLayout, LayoutFootandNav, OnlyFooterLayout } from '~/Layouts'
import NotFound from './notFound'
import Products from '~/Pages/Products'
import Login from '~/Pages/Login'
import Register from '~/Pages/Register'


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/notification', component: Notification},
    {path: '/cart', component: Cart, layout: LayoutFootandNav},
    {path: '/products/:id', component: Products, layout: DefaultLayout },
    {path: '/login', component: Login, layout: OnlyFooterLayout},
    {path: '/register', component: Register, layout: OnlyFooterLayout},

    {path: '/*', component: NotFound, layout:DefaultLayout},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }