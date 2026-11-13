import { createRootRoute, Outlet } from '@tanstack/react-router'

/** Sostiene el árbol de rutas; el marco del sitio (encabezado y pie) se agrega con las páginas. */
export const rutaRaiz = createRootRoute({
  component: Outlet,
})
