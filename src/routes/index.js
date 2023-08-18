import Home from '~/Pages/Home'
import Profile from'~/Pages/Profile'
import Notification from '~/Pages/Notification'
import Cart from '~/Pages/Cart'

import { DefaultLayout, LayoutFootandNav, OnlyFooterLayout } from '~/Layouts'
import NotFound from './notFound'
import Products from '~/Pages/Products'
import Login from '~/Pages/Login'
import Register from '~/Pages/Register'
import { config } from '~/config'


const publicRoutes = [
    {path: config.home, component: Home},
    {path: config.profile, component: Profile},
    {path: config.notification, component: Notification},
    {path: config.cart, component: Cart, layout: LayoutFootandNav},
    {path: config.products, component: Products, layout: DefaultLayout },
    {path: config.login, component: Login, layout: OnlyFooterLayout},
    {path: config.register, component: Register, layout: OnlyFooterLayout},
    {path: config.notFound, component: NotFound, layout:DefaultLayout},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }