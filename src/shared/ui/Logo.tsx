import { Text, XStack, YStack } from 'tamagui'

type Props = {
  /** Tamaño del ícono en px; la palabra se escala con él. */
  tamano?: number
  /** Sobre una placa oscura la palabra va clara. */
  invertido?: boolean
}

/** Ícono del logo de Auxilia: el pin rojo con la cruz, sobre la placa oscura de esquinas redondeadas. */
export function IconoLogo({ tamano = 40 }: { tamano?: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 64 64" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect width="64" height="64" rx="15" fill="#1A1A1D" />
      <path
        d="M32 11c-9.4 0-17 7.3-17 16.4 0 11.3 13.4 22.5 17 25.6 3.6-3.1 17-14.3 17-25.6C49 18.3 41.4 11 32 11Z"
        fill="#D92D20"
      />
      <circle cx="32" cy="27.5" r="9.5" fill="#FFFFFF" />
      <path d="M32 22v11M26.5 27.5h11" stroke="#D92D20" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ tamano = 40, invertido = false }: Props) {
  return (
    <XStack items="center" gap={tamano * 0.3} aria-label="Auxilia Tecnología" role="img">
      <IconoLogo tamano={tamano} />
      <YStack gap={1} aria-hidden>
        <Text
          fontFamily="$heading"
          fontWeight="700"
          fontSize={tamano * 0.6}
          lineHeight={tamano * 0.6}
          letterSpacing={tamano * 0.012}
          color={invertido ? '$placaOscuraTexto' : '$texto'}
        >
          AUXILIA
        </Text>
        <Text
          fontFamily="$heading"
          fontWeight="600"
          fontSize={tamano * 0.24}
          lineHeight={tamano * 0.28}
          letterSpacing={tamano * 0.075}
          color="$linea"
        >
          TECNOLOGÍA
        </Text>
      </YStack>
    </XStack>
  )
}
