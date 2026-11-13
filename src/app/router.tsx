import { createRouter } from '@tanstack/react-router'
import { rutaCompromiso } from './rutas/compromiso'
import { rutaContacto } from './rutas/contacto'
import { rutaInicio } from './rutas/inicio'
import { rutaNoticias } from './rutas/noticias'
import { rutaPrivacidad } from './rutas/privacidad'
import { rutaQuienesSomos } from './rutas/quienes-somos'
import { rutaRaiz } from './rutas/raiz'
import { rutaServicios } from './rutas/servicios'

// Rutas por código, igual que en el panel: no dependen de un archivo generado al levantar el proyecto.
const arbolDeRutas = rutaRaiz.addChildren([
  rutaInicio,
  rutaQuienesSomos,
  rutaServicios,
  rutaNoticias,
  rutaCompromiso,
  rutaContacto,
  rutaPrivacidad,
])

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
