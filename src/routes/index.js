import Home from '~/components/Pages/Home'
import Profile from'~/components/Pages/Profile'
import Notification from '~/components/Pages/Notification'
import Cart from '~/components/Pages/Cart'

import { LayoutFootandNav } from '~/Layouts'


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/notification', component: Notification},
    {path: '/cart', component: Cart, layout: LayoutFootandNav},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }