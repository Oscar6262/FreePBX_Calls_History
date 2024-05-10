import { ClientLayout } from '../layouts/main'
import { Sucursales } from '../pages/main'

const routesClient = [
  {
    path: '/',
    layout: ClientLayout,
    component: Sucursales,
    exact: true,
  },
]

export default routesClient
