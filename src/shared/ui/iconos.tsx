import type { ReactNode } from 'react'

export type PropsIcono = {
  size?: number
  /** Color CSS. Si se omite, el pictograma toma el color del texto que lo rodea. */
  color?: string
}

/** Pictogramas de señalética: grilla de 24, trazo uniforme de 2 y puntas redondas. */
function Pictograma({ size = 24, color, children }: PropsIcono & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={color ? { color, flexShrink: 0 } : { flexShrink: 0 }}
    >
      {children}
    </svg>
  )
}

export function IconoFlecha(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </Pictograma>
  )
}

export function IconoUbicacion(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </Pictograma>
  )
}

export function IconoAmbulancia(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M2.5 7h11v9.5h-11z" />
      <path d="M13.5 10.5h4l3 3v3h-7" />
      <circle cx="6.5" cy="17.5" r="1.75" />
      <circle cx="16.5" cy="17.5" r="1.75" />
      <path d="M8 9.3v4.4M5.8 11.5h4.4" />
    </Pictograma>
  )
}

export function IconoCelular(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" />
      <path d="M10.5 18.5h3" />
    </Pictograma>
  )
}

export function IconoPanel(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <rect x="2.5" y="4" width="19" height="13" rx="1.6" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 13.5l3-3.5 3 2 4-4.5" />
    </Pictograma>
  )
}

export function IconoEscena(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M4 7.5h3l1.6-2.5h6.8L17 7.5h3v11.5H4z" />
      <circle cx="12" cy="13" r="3.2" />
    </Pictograma>
  )
}

export function IconoTraslado(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.6" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M8.5 14.5h7M13 12l2.5 2.5L13 17" />
    </Pictograma>
  )
}

export function IconoTelefono(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M6.6 3.5h2.7l1.4 4-2 1.3a11 11 0 0 0 6.5 6.5l1.3-2 4 1.4v2.7a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    </Pictograma>
  )
}

export function IconoCuaderno(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M6 3h12v18H6z" />
      <path d="M9.5 7.5h5M9.5 11h5M9.5 14.5h3" />
      <path d="M4 6.5h3M4 11h3M4 15.5h3" />
    </Pictograma>
  )
}

export function IconoCorreo(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.6" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </Pictograma>
  )
}

export function IconoMensaje(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M4 18.5 5.2 15A7.8 7.8 0 1 1 9 18.3Z" />
      <path d="M9 10.5h6M9 13.5h4" />
    </Pictograma>
  )
}

export function IconoEscudo(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M12 3 5 5.8v5.4c0 4.4 3 8.2 7 9.8 4-1.6 7-5.4 7-9.8V5.8Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </Pictograma>
  )
}

export function IconoCruz(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M9.5 3.5h5v6h6v5h-6v6h-5v-6h-6v-5h6z" />
    </Pictograma>
  )
}

export function IconoReloj(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Pictograma>
  )
}

export function IconoPersonas(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M3.5 19c.8-3.2 3-5 5.5-5s4.7 1.8 5.5 5" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M17.6 14.3c1.6.7 2.6 2.3 2.9 4.7" />
    </Pictograma>
  )
}

export function IconoMenu(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Pictograma>
  )
}

export function IconoCerrar(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Pictograma>
  )
}

export function IconoAlerta(props: PropsIcono) {
  return (
    <Pictograma {...props}>
      <path d="M12 3.5 2.8 19.5h18.4Z" />
      <path d="M12 9.5v4.5M12 17v.01" />
    </Pictograma>
  )
}
