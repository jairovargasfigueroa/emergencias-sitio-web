import { H2, Paragraph, Text, XStack, YStack } from 'tamagui'
import { CabeceraPagina, Contenedor, Tramo } from '../../shared/ui/estructura'

type Noticia = {
  fecha: string
  titulo: string
  resumen: string
  /** Noticia de ejemplo: falta confirmar el hecho y la fecha antes de publicar. */
  ejemplo: boolean
}

/**
 * Noticias de la empresa, de la más nueva a la más vieja. Las marcadas como ejemplo se muestran con ese aviso
 * hasta confirmarlas: el sitio no inventa hechos.
 */
const NOTICIAS: Noticia[] = [
  {
    fecha: 'Noviembre de 2026',
    titulo: 'Auxilia presenta su sistema para empresas privadas de ambulancias',
    resumen:
      'El sistema reúne la app del ciudadano, la app del paramédico y el panel de la central, conectados a un servidor en la nube.',
    ejemplo: true,
  },
  {
    fecha: 'Noviembre de 2026',
    titulo: 'Piloto con la Unidad de Emergencias Médicas',
    resumen:
      'Nuestro cliente base usará el sistema en su operación diaria para medir los tiempos de respuesta y recoger sus observaciones.',
    ejemplo: true,
  },
  {
    fecha: 'Septiembre de 2026',
    titulo: 'El proyecto nace en la FICCT-UAGRM',
    resumen:
      'El sistema comenzó como proyecto de la Facultad de Ingeniería en Ciencias de la Computación y Telecomunicaciones, a partir de la operación real de la UEM.',
    ejemplo: true,
  },
]

export function PaginaNoticias() {
  return (
    <Contenedor>
      <CabeceraPagina titulo="Noticias" entrada="Lo nuevo de Auxilia y de su sistema." />
      <Tramo final>
        <YStack render="ol" m={0} p={0} borderTopWidth={2} borderColor="$texto" style={{ listStyle: 'none' }}>
          {NOTICIAS.map(({ fecha, titulo, resumen, ejemplo }) => (
            <XStack
              render="li"
              key={titulo}
              gap={40}
              py={32}
              borderBottomWidth={1}
              borderColor="$bordePlaca"
              $max-md={{ flexDirection: 'column', gap: 10 }}
            >
              <YStack width={220} shrink={0} gap={8} $max-md={{ width: '100%', flexDirection: 'row', items: 'center', gap: 12 }}>
                <Text fontFamily="$mono" fontWeight="600" fontSize={17} color="$texto">
                  {fecha}
                </Text>
                {ejemplo && (
                  <XStack self="flex-start" px={10} height={26} rounded={3} borderWidth={1} borderColor="$bordeFuerte" items="center">
                    <Text fontSize={13} color="$textoSecundario">
                      Noticia de ejemplo
                    </Text>
                  </XStack>
                )}
              </YStack>
              <YStack flex={1} $max-md={{ flexBasis: 'auto' }} gap={10}>
                <H2
                  fontFamily="$heading"
                  fontWeight="700"
                  fontSize={34}
                  lineHeight={36}
                  color="$texto"
                  $max-sm={{ fontSize: 28, lineHeight: 30 }}
                >
                  {titulo}
                </H2>
                <Paragraph fontSize={18} lineHeight={28} color="$textoSecundario" maxW={680}>
                  {resumen}
                </Paragraph>
              </YStack>
            </XStack>
          ))}
        </YStack>
      </Tramo>
    </Contenedor>
  )
}
