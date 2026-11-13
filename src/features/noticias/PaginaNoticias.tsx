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
 * Noticias de la empresa, de la más nueva a la más vieja. Son hitos reales del proyecto (fechas del historial de
 * los repositorios y del despliegue). Una noticia que todavía no ocurrió no se publica; si hace falta mostrar una
 * de prueba, se marca con `ejemplo: true` y el sitio lo avisa.
 */
const NOTICIAS: Noticia[] = [
  {
    fecha: 'Noviembre de 2026',
    titulo: 'Auxilia presenta su sitio web',
    resumen:
      'El sitio reúne quiénes somos, qué hace el sistema y cómo una empresa de ambulancias puede pedir una demostración.',
    ejemplo: false,
  },
  {
    fecha: 'Octubre de 2026',
    titulo: 'El servidor central supera más de 300 pruebas automáticas',
    resumen:
      'Cada función del servidor central se verifica de forma automática antes de llegar a las empresas: alertas, toma de incidentes, hitos de la atención, traslados y el resumen de la escena.',
    ejemplo: false,
  },
  {
    fecha: 'Octubre de 2026',
    titulo: 'El sistema suma el resumen de la escena con inteligencia artificial',
    resumen:
      'Con las fotos y los audios que envía quien pide ayuda, la tripulación recibe un resumen de lo que va a encontrar antes de llegar. Es un apoyo, no un diagnóstico.',
    ejemplo: false,
  },
  {
    fecha: 'Septiembre de 2026',
    titulo: 'La primera versión del sistema funciona en la nube',
    resumen:
      'El servidor central queda desplegado y conectado con la app del ciudadano, la app del paramédico y el panel de la central.',
    ejemplo: false,
  },
  {
    fecha: 'Septiembre de 2026',
    titulo: 'Nace el proyecto en la FICCT-UAGRM',
    resumen:
      'El sistema comienza como proyecto de la Facultad de Ingeniería en Ciencias de la Computación y Telecomunicaciones, con la Unidad de Emergencias Médicas como caso de estudio.',
    ejemplo: false,
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
                <Text fontFamily="$mono" fontWeight="600" fontSize={17} color="$texto" className="numeros-fijos">
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
