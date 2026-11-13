import { createRoute } from '@tanstack/react-router'
import { PaginaServicios } from '../../features/servicios/PaginaServicios'
import { rutaRaiz } from './raiz'

export const rutaServicios = createRoute({
  getParentRoute: () => rutaRaiz,
  path: '/servicios',
  component: PaginaServicios,
})
