import { createSystemFont, createV5Theme, defaultConfig } from '@tamagui/config/v5'
import { animations } from '@tamagui/config/v5-css'
import { createTamagui } from 'tamagui'
import { coloresSitioClaro, coloresSitioOscuro } from './tema/sitio'

// Letra de señalética para los títulos y letra de alta legibilidad para el texto, como en un hospital.
const SENAL = '"Barlow Semi Condensed", "Arial Narrow", system-ui, sans-serif'
const LECTURA = '"Atkinson Hyperlegible Next", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif'
const DATO = '"Barlow", system-ui, sans-serif'

const fonts = {
  body: createSystemFont({ font: { family: LECTURA } }),
  heading: createSystemFont({
    font: { family: SENAL, weight: { 0: '700' } },
    sizeLineHeight: (tamano) => Math.round(tamano * 1.04 + 4),
  }),
  mono: createSystemFont({ font: { family: DATO, weight: { 0: '500' } } }),
}

// Escala de 12 pasos que usa la plantilla v5 para $background, $borderColor, $color y los temas de Button e Input.
// Los colores de marca exactos llegan aparte por getTheme.
const paletaClara = [
  '#FFFFFF', '#F7F7F8', '#EFEFF1', '#E7E7EA', '#D4D4D8', '#BDBDC4',
  '#A1A1AA', '#8B8B94', '#71717A', '#52525B', '#3F3F46', '#18181B',
]
const paletaOscura = [
  '#0B0B0E', '#111114', '#1A1A1F', '#2A2A31', '#3F3F46', '#52525B',
  '#71717A', '#8B8B94', '#A1A1AA', '#D4D4D8', '#E4E4E7', '#F4F4F5',
]

const themes = createV5Theme({
  lightPalette: paletaClara,
  darkPalette: paletaOscura,
  getTheme: ({ scheme }) => (scheme === 'dark' ? coloresSitioOscuro : coloresSitioClaro),
})

export const config = createTamagui({
  ...defaultConfig,
  animations,
  fonts,
  themes,
  settings: {
    ...defaultConfig.settings,
    disableSSR: true,
    onlyAllowShorthands: false,
  },
})

export type ConfigTamagui = typeof config

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- así extiende Tamagui sus tipos
  interface TamaguiCustomConfig extends ConfigTamagui {}
}

export default config
