import { createRoute } from '@tanstack/react-router'
import { PaginaPrivacidad } from '../../features/privacidad/PaginaPrivacidad'
import { rutaRaiz } from './raiz'

export const rutaPrivacidad = createRoute({
  getParentRoute: () => rutaRaiz,
  path: '/privacidad',
  component: PaginaPrivacidad,
})
