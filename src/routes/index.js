import Home from '~/pages/Home'
import Profile from'~/pages/Profile'
import Notification from '~/pages/Notification'
import Cart from '~/pages/Cart'

import { DefaultLayout, LayoutFootandNav } from '~/layouts'
import NotFound from './notFound'
import Products from '~/pages/Products'


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/notification', component: Notification},
    {path: '/cart', component: Cart, layout: LayoutFootandNav},
    {path: '/products/:id', component: Products, layout: DefaultLayout},

    {path: '/*', component: NotFound, layout:DefaultLayout},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }