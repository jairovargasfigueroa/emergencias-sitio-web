import { coloresClaro, coloresOscuro } from './colores'

/**
 * Colores propios del sitio corporativo, encima de la paleta compartida con el panel y las apps. Siguen la
 * señalética de una sala de emergencias: pared neutra, placas esmaltadas claras u oscuras y una sola línea roja.
 */
export const coloresSitioClaro = {
  ...coloresClaro,
  pared: '#EFEFEC',
  placa: '#FFFFFF',
  bordePlaca: '#D9D9D4',
  placaOscura: '#1A1A1D',
  placaOscuraTexto: '#F4F4F5',
  placaOscuraSecundario: '#B4B4BB',
  bordePlacaOscura: '#323238',
  /** La cinta roja del piso: el único color que guía. Es el mismo rojo de la marca. */
  linea: '#D92D20',
  lineaTexto: '#FFFFFF',
  plano: '#E4E4E0',
  planoTrazo: '#C6C6C0',
  planoCalle: '#FFFFFF',
}

export const coloresSitioOscuro: typeof coloresSitioClaro = {
  ...coloresOscuro,
  pared: '#111114',
  placa: '#1A1A1F',
  bordePlaca: '#2A2A31',
  // En oscuro la placa "oscura" se invierte: sigue siendo la placa que contrasta con la pared.
  placaOscura: '#F4F4F5',
  placaOscuraTexto: '#18181B',
  placaOscuraSecundario: '#52525B',
  bordePlacaOscura: '#D4D4D8',
  linea: '#E5372A',
  lineaTexto: '#FFFFFF',
  plano: '#17171B',
  planoTrazo: '#34343C',
  planoCalle: '#222228',
}
