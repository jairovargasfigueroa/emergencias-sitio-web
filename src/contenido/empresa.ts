/**
 * Datos de la empresa en un solo lugar. Los marcados con `ejemplo: true` todavía no están definidos: se muestran
 * con un valor de ejemplo y el sitio lo avisa. Para publicar, reemplazar el valor y poner `ejemplo: false`.
 */
export type DatoDeContacto = {
  valor: string
  /** Enlace que abre el dato (correo, WhatsApp). */
  enlace: string
  ejemplo: boolean
}

export const EMPRESA = {
  nombre: 'Auxilia',
  razonSocial: 'Auxilia Tecnologías S.R.L.',
  ciudad: 'Santa Cruz de la Sierra, Bolivia',
  correo: {
    valor: 'soporte@auxilia.bo',
    enlace: 'mailto:soporte@auxilia.bo',
    ejemplo: true,
  } satisfies DatoDeContacto,
  whatsapp: {
    valor: '+591 700 00000',
    enlace: 'https://wa.me/59170000000',
    ejemplo: true,
  } satisfies DatoDeContacto,
  /** Línea pública de emergencias de Santa Cruz que se recomienda en el aviso. */
  lineaEmergencias: '160',
}

export const HORARIO_ATENCION = 'Lunes a viernes de 8:00 a 18:00 y sábados de 8:00 a 12:00'

export type RutaSitio =
  | '/'
  | '/quienes-somos'
  | '/servicios'
  | '/noticias'
  | '/compromiso'
  | '/contacto'
  | '/privacidad'

export const SECCIONES_DEL_SITIO: { to: RutaSitio; etiqueta: string }[] = [
  { to: '/quienes-somos', etiqueta: 'Quiénes somos' },
  { to: '/servicios', etiqueta: 'Servicios' },
  { to: '/noticias', etiqueta: 'Noticias' },
  { to: '/compromiso', etiqueta: 'Compromiso' },
  { to: '/contacto', etiqueta: 'Contacto' },
]
