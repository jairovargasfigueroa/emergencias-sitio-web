import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { Button, Text, XStack, YStack } from 'tamagui'
import { SECCIONES_DEL_SITIO } from '../../contenido/empresa'
import { IconoCerrar, IconoMenu } from './iconos'
import { Logo } from './Logo'

/**
 * Encabezado con las secciones como placas de señalética. La sección en la que estás se marca como la placa
 * oscura de "usted está aquí".
 */
export function Encabezado() {
  const ruta = useRouterState({ select: (estado) => estado.location.pathname })
  // El menú del celular recuerda en qué página se abrió: al cambiar de página queda cerrado solo.
  const [abiertoEn, setAbiertoEn] = useState<string | null>(null)
  const abierto = abiertoEn === ruta

  return (
    <YStack render="header" bg="$pared" borderBottomWidth={1} borderColor="$bordePlaca">
      <XStack
        width="100%"
        maxW={1240}
        mx="auto"
        px={40}
        height={88}
        items="center"
        justify="space-between"
        $max-md={{ px: 24, height: 76 }}
        $max-sm={{ px: 16 }}
      >
        <Link to="/" aria-label="Auxilia, ir al inicio" style={{ textDecoration: 'none' }}>
          <Logo tamano={44} />
        </Link>

        <XStack render="nav" aria-label="Secciones del sitio" gap={4} $max-md={{ display: 'none' }}>
          {SECCIONES_DEL_SITIO.map(({ to, etiqueta }) => (
            <EnlaceSeccion key={to} to={to} etiqueta={etiqueta} />
          ))}
        </XStack>

        <Button
          display="none"
          $max-md={{ display: 'flex' }}
          aria-label={abierto ? 'Cerrar el menú' : 'Abrir el menú'}
          aria-expanded={abierto}
          onPress={() => setAbiertoEn(abierto ? null : ruta)}
          width={48}
          height={48}
          p={0}
          bg="transparent"
          borderWidth={0}
          icon={abierto ? <IconoCerrar size={26} /> : <IconoMenu size={26} />}
        />
      </XStack>

      {abierto && (
        <YStack render="nav" aria-label="Secciones del sitio" px={16} pb={20} gap={6} display="none" $max-md={{ display: 'flex' }}>
          {SECCIONES_DEL_SITIO.map(({ to, etiqueta }) => (
            <EnlaceSeccion key={to} to={to} etiqueta={etiqueta} grande />
          ))}
        </YStack>
      )}
    </YStack>
  )
}

type PropsEnlace = {
  to: (typeof SECCIONES_DEL_SITIO)[number]['to']
  etiqueta: string
  grande?: boolean
}

function EnlaceSeccion({ to, etiqueta, grande = false }: PropsEnlace) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      {({ isActive }) => (
        <XStack
          items="center"
          minH={grande ? 56 : 44}
          px={grande ? 18 : 14}
          rounded={4}
          bg={isActive ? '$placaOscura' : 'transparent'}
          hoverStyle={{ bg: isActive ? '$placaOscura' : '$placa' }}
          cursor="pointer"
          aria-current={isActive ? 'page' : undefined}
        >
          <Text
            fontFamily="$heading"
            fontWeight="700"
            fontSize={grande ? 24 : 19}
            letterSpacing={0.2}
            color={isActive ? '$placaOscuraTexto' : '$texto'}
          >
            {etiqueta}
          </Text>
        </XStack>
      )}
    </Link>
  )
}
