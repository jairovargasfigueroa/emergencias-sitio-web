import { Link } from '@tanstack/react-router'
import { Text, XStack } from 'tamagui'
import type { RutaSitio } from '../../contenido/empresa'
import { IconoFlecha } from './iconos'

type Props = {
  to: RutaSitio
  hash?: string
  children: string
}

/**
 * La acción principal es una placa roja con flecha, como la señal que lleva a Emergencias: hay una sola por
 * pantalla.
 */
export function AccionPrincipal({ to, hash, children }: Props) {
  return (
    <Link to={to} hash={hash} style={{ textDecoration: 'none', alignSelf: 'flex-start' }}>
      <XStack
        items="center"
        gap={14}
        minH={56}
        pl={22}
        pr={18}
        bg="$linea"
        rounded={4}
        hoverStyle={{ bg: '$primarioPresionado' }}
        pressStyle={{ bg: '$primarioPresionado' }}
        cursor="pointer"
      >
        <Text fontFamily="$heading" fontWeight="700" fontSize={21} letterSpacing={0.2} color="$lineaTexto">
          {children}
        </Text>
        <IconoFlecha size={24} color="var(--lineaTexto)" />
      </XStack>
    </Link>
  )
}

/** Acción secundaria: texto de señalética con flecha, sin placa. */
export function AccionSecundaria({ to, hash, children }: Props) {
  return (
    <Link to={to} hash={hash} style={{ textDecoration: 'none', alignSelf: 'flex-start' }}>
      <XStack
        items="center"
        gap={10}
        minH={56}
        px={4}
        cursor="pointer"
        borderBottomWidth={2}
        borderColor="transparent"
        hoverStyle={{ borderColor: '$texto' }}
      >
        <Text fontFamily="$heading" fontWeight="700" fontSize={21} letterSpacing={0.2} color="$texto">
          {children}
        </Text>
        <IconoFlecha size={22} color="var(--texto)" />
      </XStack>
    </Link>
  )
}
