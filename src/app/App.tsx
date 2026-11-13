import { RouterProvider } from '@tanstack/react-router'
import { useSyncExternalStore } from 'react'
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'
import { router } from './router'

const CONSULTA_OSCURO = '(prefers-color-scheme: dark)'

function suscribirAlEsquema(avisar: () => void) {
  const consulta = window.matchMedia(CONSULTA_OSCURO)
  consulta.addEventListener('change', avisar)
  return () => consulta.removeEventListener('change', avisar)
}

function leerEsquema(): 'light' | 'dark' {
  return window.matchMedia(CONSULTA_OSCURO).matches ? 'dark' : 'light'
}

export function App() {
  // Tamagui aplica el tema por clase: hay que leer el esquema del sistema y pasárselo.
  const esquema = useSyncExternalStore(suscribirAlEsquema, leerEsquema, () => 'light' as const)

  return (
    <TamaguiProvider config={config} defaultTheme={esquema}>
      <RouterProvider router={router} />
    </TamaguiProvider>
  )
}
