import Home from '~/components/pages/Home'
import Profile from'~/components/pages/Profile'
import Notification from '~/components/pages/Notification'
import Cart from '~/components/pages/Cart'

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