import { ClientLayout } from '../layouts/main'
import { Culiacan, Guasave, Home, Mochis, Sucursales } from '../pages/main'

const routesClient = [
  {
    path: '/',
    layout: ClientLayout,
    component: Home,
    exact: true,
  },
  {
    path: '/sucursales/mochis',
    layout: ClientLayout,
    component: Mochis,
    exact: true,
  },
  {
    path: '/sucursales/culiacan',
    layout: ClientLayout,
    component: Culiacan,
    exact: true,
  },
  {
    path: '/sucursales/guasave',
    layout: ClientLayout,
    component: Guasave,
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
