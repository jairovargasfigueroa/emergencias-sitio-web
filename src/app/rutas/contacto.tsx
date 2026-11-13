import { createRoute } from '@tanstack/react-router'
import { PaginaContacto } from '../../features/contacto/PaginaContacto'
import { rutaRaiz } from './raiz'

export const rutaContacto = createRoute({
  getParentRoute: () => rutaRaiz,
  path: '/contacto',
  component: PaginaContacto,
})
