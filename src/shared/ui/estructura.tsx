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
 * Un tramo de la línea roja del piso. La línea corre a la izquierda de todo el contenido y cada tramo marca su
 * parada a la altura del título. En el celular sigue ahí, más angosta, pegada al margen.
 */
export function Tramo({ id, final = false, children }: PropsTramo) {
  return (
    <XStack render="section" id={id} width="100%">
      <YStack position="relative" width={56} shrink={0} items="center" $max-md={{ width: 18 }}>
        <YStack width={6} height={final ? 46 : '100%'} bg="$linea" $max-md={{ width: 4, height: final ? 34 : '100%' }} />
        <YStack
          position="absolute"
          t={26}
          width={22}
          height={22}
          bg="$pared"
          borderWidth={6}
          borderColor="$linea"
          rounded={2}
          $max-md={{ t: 20, width: 16, height: 16, borderWidth: 4 }}
        />
      </YStack>
      <YStack flex={1} minW={0} pt={16} pb={112} pl={24} $max-md={{ pl: 16, pb: 80 }} $max-sm={{ pb: 64 }}>
        {children}
      </YStack>
    </XStack>
  )
}

/**
 * Empalme entre la portada y el primer tramo: la línea roja nace debajo del plano «Usted está aquí», dobla y llega
 * a la primera parada, como la cinta del piso que sale de un punto y lleva al resto del recorrido.
 */
export function Empalme() {
  return (
    <YStack position="relative" height={96} aria-hidden $max-md={{ height: 64 }}>
      {/* Baja desde el centro del plano. */}
      <YStack position="absolute" t={0} r="22%" width={6} height={66} bg="$linea" $max-md={{ r: '50%', width: 4, height: 40 }} />
      {/* Cruza hacia la izquierda, hasta la línea de los tramos. */}
      <YStack position="absolute" t={60} l={25} r="22%" height={6} bg="$linea" $max-md={{ t: 36, l: 7, r: '50%', height: 4 }} />
      {/* Baja hasta la primera parada. */}
      <YStack position="absolute" t={60} b={0} l={25} width={6} bg="$linea" $max-md={{ t: 36, l: 7, width: 4 }} />
    </YStack>
  )
}

/** Título de un tramo: letra de señalética, grande y en una o dos líneas. */
export function TituloTramo({ children }: { children: ReactNode }) {
  return (
    <YStack>
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
