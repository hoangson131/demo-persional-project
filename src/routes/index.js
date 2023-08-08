import Home from '~/Pages/Home'
import Profile from'~/Pages/Profile'
import Notification from '~/Pages/Notification'
import Cart from '~/Pages/Cart'

import { DefaultLayout, LayoutFootandNav } from '~/Layouts'
import NotFound from './notFound'
import Products from '~/Pages/Products'


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/notification', component: Notification},
    {path: '/cart', component: Cart, layout: LayoutFootandNav},
    {path: '/products/:id', component: Products, layout: DefaultLayout, },

    {path: '/*', component: NotFound, layout:DefaultLayout},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }