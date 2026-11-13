import { createRoute } from '@tanstack/react-router'
import { PaginaCompromiso } from '../../features/compromiso/PaginaCompromiso'
import { rutaRaiz } from './raiz'

export const rutaCompromiso = createRoute({
  getParentRoute: () => rutaRaiz,
  path: '/compromiso',
  component: PaginaCompromiso,
})
