import { createRoute } from '@tanstack/react-router'
import { PaginaNoticias } from '../../features/noticias/PaginaNoticias'
import { rutaRaiz } from './raiz'

export const rutaNoticias = createRoute({
  getParentRoute: () => rutaRaiz,
  path: '/noticias',
  component: PaginaNoticias,
})
