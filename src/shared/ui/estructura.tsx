import type { ReactNode } from 'react'
import { H1, H2, Paragraph, XStack, YStack } from 'tamagui'

/** Ancho de lectura del sitio, con los márgenes laterales de cada tamaño de pantalla. */
export function Contenedor({ children }: { children: ReactNode }) {
  return (
    <YStack width="100%" maxW={1240} mx="auto" px={40} $max-md={{ px: 24 }} $max-sm={{ px: 16 }}>
      {children}
    </YStack>
  )
}

type PropsTramo = {
  /** id del ancla, para llegar con un enlace. */
  id?: string
  /** La línea termina en este tramo (último de la página). */
  final?: boolean
  children: ReactNode
}

/**
 * Un tramo de la línea roja del piso. En pantallas anchas la línea corre a la izquierda de todo el contenido y
 * cada tramo marca su parada a la altura del título; en el celular la línea se vuelve una marca corta sobre el
 * título.
 */
export function Tramo({ id, final = false, children }: PropsTramo) {
  return (
    <XStack render="section" id={id} width="100%">
      <YStack position="relative" width={56} shrink={0} items="center" $max-md={{ display: 'none' }}>
        <YStack width={6} height={final ? 46 : '100%'} bg="$linea" />
        <YStack
          position="absolute"
          t={26}
          width={22}
          height={22}
          bg="$pared"
          borderWidth={6}
          borderColor="$linea"
          rounded={2}
        />
      </YStack>
      <YStack flex={1} minW={0} pt={16} pb={112} pl={24} $max-md={{ pl: 0, pb: 80 }} $max-sm={{ pb: 64 }}>
        {children}
      </YStack>
    </XStack>
  )
}

/** Título de un tramo: letra de señalética, grande y en una o dos líneas. */
export function TituloTramo({ children }: { children: ReactNode }) {
  return (
    <YStack gap={14}>
      <YStack width={40} height={6} bg="$linea" display="none" $max-md={{ display: 'flex' }} />
      <H2
        fontFamily="$heading"
        fontWeight="700"
        fontSize={56}
        lineHeight={56}
        letterSpacing={-0.6}
        color="$texto"
        maxW={900}
        $max-md={{ fontSize: 42, lineHeight: 44 }}
        $max-sm={{ fontSize: 34, lineHeight: 36 }}
        style={{ textWrap: 'balance' }}
      >
        {children}
      </H2>
    </YStack>
  )
}

/** Párrafo de entrada debajo de un título. */
export function Entrada({ children }: { children: ReactNode }) {
  return (
    <Paragraph
      color="$textoSecundario"
      fontSize={20}
      lineHeight={31}
      maxW={680}
      $max-sm={{ fontSize: 18, lineHeight: 28 }}
    >
      {children}
    </Paragraph>
  )
}

/** Párrafo de lectura corriente. */
export function Texto({ children }: { children: ReactNode }) {
  return (
    <Paragraph color="$texto" fontSize={18} lineHeight={29} maxW={680} $max-sm={{ fontSize: 17, lineHeight: 27 }}>
      {children}
    </Paragraph>
  )
}

type PropsCabecera = {
  titulo: string
  entrada: string
}

/** Cabecera de las páginas internas: el nombre de la página como la placa grande de un área del hospital. */
export function CabeceraPagina({ titulo, entrada }: PropsCabecera) {
  return (
    <YStack gap={20} pt={72} pb={56} $max-sm={{ pt: 48, pb: 40 }}>
      <H1
        fontFamily="$heading"
        fontWeight="700"
        fontSize={88}
        lineHeight={84}
        letterSpacing={-1.6}
        color="$texto"
        $max-md={{ fontSize: 64, lineHeight: 62 }}
        $max-sm={{ fontSize: 46, lineHeight: 46, letterSpacing: -0.8 }}
      >
        {titulo}
      </H1>
      <Entrada>{entrada}</Entrada>
    </YStack>
  )
}
