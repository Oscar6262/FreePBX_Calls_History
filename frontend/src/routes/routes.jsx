import routesClient from './routes.client'
import { Error404 } from '../pages/Error404'
import { BasicLayout } from '../layouts/BasicLayout'

const routes = [
  ...routesClient,
  {
    path: '*',
    layout: BasicLayout,
    component: Error404,
  },
]

export default routes
