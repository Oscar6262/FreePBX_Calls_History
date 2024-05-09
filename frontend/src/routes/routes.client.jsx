import { ClientLayout } from '../layouts/main'
import { Home, Sucursales } from '../pages/main'

const routesClient = [
  {
    path: '/',
    layout: ClientLayout,
    component: Home,
    exact: true,
  },
  {
    path: '/sucursales',
    layout: ClientLayout,
    component: Sucursales,
    exact: true,
  },
]

export default routesClient
