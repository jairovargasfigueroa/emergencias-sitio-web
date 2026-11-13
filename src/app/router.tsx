import { createRouter } from '@tanstack/react-router'
import { rutaInicio } from './rutas/inicio'
import { rutaRaiz } from './rutas/raiz'

// Rutas por código, igual que en el panel: no dependen de un archivo generado al levantar el proyecto.
const arbolDeRutas = rutaRaiz.addChildren([rutaInicio])

export const router = createRouter({
  routeTree: arbolDeRutas,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
