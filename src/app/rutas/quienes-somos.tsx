import { createRoute } from '@tanstack/react-router'
import { PaginaQuienesSomos } from '../../features/quienes-somos/PaginaQuienesSomos'
import { rutaRaiz } from './raiz'

export const rutaQuienesSomos = createRoute({
  getParentRoute: () => rutaRaiz,
  path: '/quienes-somos',
  component: PaginaQuienesSomos,
})
