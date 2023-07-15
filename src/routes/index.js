import Home from '~/pages/Home'
import Profile from'~/pages/Profile'
import Notification from '~/pages/Notification'
import Cart from '~/pages/Cart'

import { LayoutFootandNav } from '~/layouts'


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/notification', component: Notification},
    {path: '/cart', component: Cart, layout: LayoutFootandNav},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }