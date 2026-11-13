import { useForm } from '@tanstack/react-form'
import { useState, type ComponentType, type KeyboardEvent } from 'react'
import { Button, Form, Input, Label, Paragraph, Text, TextArea, XStack, YStack } from 'tamagui'
import { z } from 'zod'
import { EMPRESA } from '../../contenido/empresa'
import { IconoCorreo, IconoMensaje, type PropsIcono } from '../../shared/ui/iconos'

const esquema = z.object({
  nombre: z.string().trim().min(2, 'Escriba su nombre.'),
  empresa: z.string().trim().min(2, 'Escriba el nombre de su empresa.'),
  telefono: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{6,}$/, 'Escriba un número de teléfono o celular.'),
  ambulancias: z.string().trim(),
  mensaje: z.string().trim(),
})

type Datos = z.infer<typeof esquema>
type Canal = 'whatsapp' | 'correo'

/** Arma el texto del pedido para enviarlo por el canal que elija la persona. */
function armarPedido(datos: Datos) {
  const lineas = [
    'Hola, quiero pedir una demostración de Auxilia.',
    `Nombre: ${datos.nombre}`,
    `Empresa: ${datos.empresa}`,
    `Teléfono: ${datos.telefono}`,
  ]
  if (datos.ambulancias) lineas.push(`Ambulancias: ${datos.ambulancias}`)
  if (datos.mensaje) lineas.push(`Mensaje: ${datos.mensaje}`)
  return lineas.join('\n')
}

function enlaceDeEnvio(canal: Canal, texto: string) {
  if (canal === 'whatsapp') {
    return `${EMPRESA.whatsapp.enlace}?text=${encodeURIComponent(texto)}`
  }
  const asunto = encodeURIComponent('Pedido de demostración de Auxilia')
  return `${EMPRESA.correo.enlace}?subject=${asunto}&body=${encodeURIComponent(texto)}`
}

/**
 * Formulario para pedir una demostración. No guarda nada en un servidor: arma el mensaje y lo abre en WhatsApp o
 * en el correo de la persona, que es quien lo envía.
 */
export function FormularioDemostracion() {
  const [canal, setCanal] = useState<Canal>('whatsapp')
  const [enviado, setEnviado] = useState(false)

  const form = useForm({
    defaultValues: { nombre: '', empresa: '', telefono: '', ambulancias: '', mensaje: '' },
    validators: { onSubmit: esquema },
    onSubmit: ({ value }) => {
      const datos = esquema.parse(value)
      const enlace = enlaceDeEnvio(canal, armarPedido(datos))
      // WhatsApp se abre en otra pestaña; el correo abre la aplicación de correo de la persona.
      if (canal === 'whatsapp') window.open(enlace, '_blank', 'noopener')
      else window.location.href = enlace
      setEnviado(true)
    },
  })

  return (
    <Form gap={22} onSubmit={() => form.handleSubmit().catch(() => {})}>
      <XStack gap={18} $max-sm={{ flexDirection: 'column' }}>
        <Campo form={form} nombre="nombre" etiqueta="Nombre" autoComplete="name" />
        <Campo form={form} nombre="empresa" etiqueta="Empresa" autoComplete="organization" />
      </XStack>
      <XStack gap={18} $max-sm={{ flexDirection: 'column' }}>
        <Campo form={form} nombre="telefono" etiqueta="Teléfono o celular" autoComplete="tel" inputMode="tel" />
        <Campo form={form} nombre="ambulancias" etiqueta="Cantidad de ambulancias (opcional)" inputMode="numeric" />
      </XStack>

      <form.Field name="mensaje">
        {(field) => (
          <YStack gap={8}>
            <Label htmlFor="campo-mensaje" fontSize={16} fontWeight="600" color="$texto">
              Mensaje (opcional)
            </Label>
            <TextArea
              id="campo-mensaje"
              rows={4}
              fontSize={17}
              bg="$placa"
              borderColor="$bordeFuerte"
              rounded={4}
              value={field.state.value}
              onChangeText={(texto: string) => field.handleChange(texto)}
              onBlur={field.handleBlur}
            />
          </YStack>
        )}
      </form.Field>

      <YStack gap={10}>
        <Text fontSize={16} fontWeight="600" color="$texto" id="canal-etiqueta">
          Enviar por
        </Text>
        <XStack gap={10} role="radiogroup" aria-labelledby="canal-etiqueta" flexWrap="wrap">
          <OpcionCanal activo={canal === 'whatsapp'} onElegir={() => setCanal('whatsapp')} Icono={IconoMensaje}>
            WhatsApp
          </OpcionCanal>
          <OpcionCanal activo={canal === 'correo'} onElegir={() => setCanal('correo')} Icono={IconoCorreo}>
            Correo
          </OpcionCanal>
        </XStack>
      </YStack>

      <XStack gap={18} items="center" flexWrap="wrap">
        <Form.Trigger asChild>
          <Button
            height={56}
            px={24}
            bg="$linea"
            borderWidth={0}
            rounded={4}
            hoverStyle={{ bg: '$primarioPresionado' }}
            pressStyle={{ bg: '$primarioPresionado' }}
          >
            <Button.Text fontFamily="$heading" fontWeight="700" fontSize={21} color="$lineaTexto">
              Pedir la demostración
            </Button.Text>
          </Button>
        </Form.Trigger>
        {enviado && (
          <Paragraph role="status" fontSize={16} lineHeight={24} color="$texto" maxW={420}>
            Abrimos {canal === 'whatsapp' ? 'WhatsApp' : 'su correo'} con el mensaje listo: solo falta enviarlo.
          </Paragraph>
        )}
      </XStack>
      {(EMPRESA.whatsapp.ejemplo || EMPRESA.correo.ejemplo) && (
        <Paragraph fontSize={14} lineHeight={20} color="$textoSecundario">
          Mientras el sitio esté en preparación, el número y el correo de destino son datos de ejemplo.
        </Paragraph>
      )}
    </Form>
  )
}

type NombreCampo = 'nombre' | 'empresa' | 'telefono' | 'ambulancias'

type PropsCampo = {
  // El tipo del formulario es largo; basta con lo que usa el campo.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any
  nombre: NombreCampo
  etiqueta: string
  autoComplete?: string
  inputMode?: 'tel' | 'numeric' | 'text'
}

function Campo({ form, nombre, etiqueta, autoComplete, inputMode }: PropsCampo) {
  const id = `campo-${nombre}`
  return (
    <form.Field name={nombre}>
      {(field: {
        state: { value: string; meta: { errors: unknown[]; isValid: boolean } }
        handleChange: (valor: string) => void
        handleBlur: () => void
      }) => {
        const error = textoDeError(field.state.meta.errors)
        return (
          <YStack flex={1} gap={8}>
            <Label htmlFor={id} fontSize={16} fontWeight="600" color="$texto">
              {etiqueta}
            </Label>
            <Input
              id={id}
              height={52}
              fontSize={17}
              bg="$placa"
              rounded={4}
              borderColor={error ? '$linea' : '$bordeFuerte'}
              autoComplete={autoComplete}
              inputMode={inputMode}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${id}-error` : undefined}
              value={field.state.value}
              onChange={(evento) => field.handleChange(evento.currentTarget.value)}
              onBlur={field.handleBlur}
            />
            {error && (
              <Paragraph id={`${id}-error`} role="alert" fontSize={15} lineHeight={20} color="$primarioTinteTexto">
                {error}
              </Paragraph>
            )}
          </YStack>
        )
      }}
    </form.Field>
  )
}

function textoDeError(errores: unknown[]): string | null {
  for (const error of errores) {
    if (typeof error === 'string') return error
    if (error && typeof error === 'object' && 'message' in error) return String((error as { message: unknown }).message)
  }
  return null
}

type PropsOpcion = {
  activo: boolean
  onElegir: () => void
  Icono: ComponentType<PropsIcono>
  children: string
}

function OpcionCanal({ activo, onElegir, Icono, children }: PropsOpcion) {
  return (
    <XStack
      role="radio"
      aria-checked={activo}
      tabIndex={0}
      onPress={onElegir}
      onKeyDown={(evento: KeyboardEvent) => {
        if (evento.key === 'Enter' || evento.key === ' ') {
          evento.preventDefault()
          onElegir()
        }
      }}
      items="center"
      gap={10}
      minH={48}
      px={18}
      rounded={4}
      borderWidth={2}
      borderColor={activo ? '$placaOscura' : '$bordeFuerte'}
      bg={activo ? '$placaOscura' : '$placa'}
      cursor="pointer"
    >
      <Icono size={20} color={activo ? 'var(--placaOscuraTexto)' : 'var(--texto)'} />
      <Text fontFamily="$heading" fontWeight="700" fontSize={20} color={activo ? '$placaOscuraTexto' : '$texto'}>
        {children}
      </Text>
    </XStack>
  )
}
