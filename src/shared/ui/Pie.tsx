import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { EMPRESA, SECCIONES_DEL_SITIO } from '../../contenido/empresa'
import { IconoCorreo, IconoMensaje } from './iconos'
import { Logo } from './Logo'

/** Pie del sitio: la placa oscura del directorio, con la empresa, las secciones y el contacto. */
export function Pie() {
  const anio = new Date().getFullYear()

  return (
    <YStack render="footer" bg="$placaOscura">
      <XStack
        width="100%"
        maxW={1240}
        mx="auto"
        px={40}
        pt={64}
        pb={40}
        gap={48}
        flexWrap="wrap"
        justify="space-between"
        $max-md={{ px: 24 }}
        $max-sm={{ px: 16, pt: 48, gap: 36 }}
      >
        <YStack gap={18} maxW={360}>
          <Logo tamano={40} invertido />
          <Text color="$placaOscuraSecundario" fontSize={16} lineHeight={25}>
            Tecnología para que las empresas privadas de ambulancias reciban cada pedido de auxilio con su
            ubicación exacta, coordinen a sus unidades y registren cada servicio.
          </Text>
        </YStack>

        <YStack render="nav" aria-label="Secciones del sitio" gap={10}>
          {SECCIONES_DEL_SITIO.map(({ to, etiqueta }) => (
            <Link key={to} to={to} style={{ textDecoration: 'none' }}>
              <Text
                fontFamily="$heading"
                fontWeight="600"
                fontSize={19}
                color="$placaOscuraTexto"
                hoverStyle={{ textDecorationLine: 'underline' }}
              >
                {etiqueta}
              </Text>
            </Link>
          ))}
        </YStack>

        <YStack gap={14}>
          <DatoContacto icono={<IconoCorreo size={20} color="var(--placaOscuraTexto)" />} {...EMPRESA.correo} />
          <DatoContacto icono={<IconoMensaje size={20} color="var(--placaOscuraTexto)" />} {...EMPRESA.whatsapp} />
          <Text color="$placaOscuraSecundario" fontSize={15} lineHeight={22}>
            {EMPRESA.ciudad}
          </Text>
        </YStack>
      </XStack>

      <XStack
        width="100%"
        maxW={1240}
        mx="auto"
        px={40}
        py={20}
        gap={24}
        flexWrap="wrap"
        justify="space-between"
        borderTopWidth={1}
        borderColor="$bordePlacaOscura"
        $max-md={{ px: 24 }}
        $max-sm={{ px: 16 }}
      >
        <Text color="$placaOscuraSecundario" fontSize={14}>
          © {anio} {EMPRESA.razonSocial}
        </Text>
        <Link to="/privacidad" style={{ textDecoration: 'none' }}>
          <Text color="$placaOscuraTexto" fontSize={14} hoverStyle={{ textDecorationLine: 'underline' }}>
            Privacidad y términos de uso
          </Text>
        </Link>
      </XStack>
    </YStack>
  )
}

type PropsDato = {
  icono: ReactNode
  valor: string
  enlace: string
  ejemplo: boolean
}

function DatoContacto({ icono, valor, enlace, ejemplo }: PropsDato) {
  return (
    <XStack items="center" gap={10}>
      {icono}
      <a href={enlace} style={{ color: 'inherit' }}>
        <Text color="$placaOscuraTexto" fontSize={16} className="numeros-fijos">
          {valor}
        </Text>
      </a>
      {ejemplo && (
        <Text color="$placaOscuraSecundario" fontSize={13}>
          (dato de ejemplo)
        </Text>
      )}
    </XStack>
  )
}
