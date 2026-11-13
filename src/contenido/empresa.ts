/**
 * Datos de la empresa en un solo lugar.
 *
 * El correo y el WhatsApp no se escriben aquí: el repositorio es público y son datos personales. Se cargan de las
 * variables `VITE_CONTACTO_CORREO` y `VITE_CONTACTO_WHATSAPP` (en local, del archivo `.env.local`, que no se sube;
 * al publicar, de las variables de entorno de Amplify). Si faltan, el sitio muestra un dato de ejemplo y lo avisa.
 */
export type DatoDeContacto = {
  valor: string
  /** Enlace que abre el dato (correo, WhatsApp). */
  enlace: string
  ejemplo: boolean
}

function correoDeContacto(): DatoDeContacto {
  const correo = import.meta.env.VITE_CONTACTO_CORREO?.trim().toLowerCase()
  if (!correo) {
    return { valor: 'soporte@auxilia.bo', enlace: 'mailto:soporte@auxilia.bo', ejemplo: true }
  }
  return { valor: correo, enlace: `mailto:${correo}`, ejemplo: false }
}

/** El número va con código de país y sin espacios, por ejemplo `59170000000`. */
function whatsappDeContacto(): DatoDeContacto {
  const digitos = (import.meta.env.VITE_CONTACTO_WHATSAPP ?? '').replace(/\D/g, '')
  if (!digitos) {
    return { valor: '+591 7000 0000', enlace: 'https://wa.me/59170000000', ejemplo: true }
  }
  const local = digitos.startsWith('591') ? digitos.slice(3) : digitos
  const legible = local.length === 8 ? `${local.slice(0, 4)} ${local.slice(4)}` : local
  return { valor: `+591 ${legible}`, enlace: `https://wa.me/591${local}`, ejemplo: false }
}

export const EMPRESA = {
  nombre: 'Auxilia',
  razonSocial: 'Auxilia Tecnologías S.R.L.',
  ciudad: 'Santa Cruz de la Sierra, Bolivia',
  correo: correoDeContacto(),
  whatsapp: whatsappDeContacto(),
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
