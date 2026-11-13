/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Correo de soporte que muestra el sitio. */
  readonly VITE_CONTACTO_CORREO?: string
  /** WhatsApp de atención, con código de país y sin espacios (por ejemplo 59170000000). */
  readonly VITE_CONTACTO_WHATSAPP?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
