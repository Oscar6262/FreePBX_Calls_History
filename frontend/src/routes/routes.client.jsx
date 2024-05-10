import { ClientLayout } from '../layouts/main'
import { Culiacan, Guasave, Home, Mochis, Sucursales } from '../pages/main'

const routesClient = [
  {
    path: '/',
    layout: ClientLayout,
    component: Sucursales,
    exact: true,
  },
  
]

export default routesClient
