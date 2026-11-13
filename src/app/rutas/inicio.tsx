import { createRoute } from '@tanstack/react-router'
import { PaginaInicio } from '../../features/inicio/PaginaInicio'
import { rutaRaiz } from './raiz'

export const rutaInicio = createRoute({
  getParentRoute: () => rutaRaiz,
  path: '/',
  component: PaginaInicio,
})
