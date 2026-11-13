import type { ComponentType } from 'react'
import { Paragraph, Text, XStack, YStack } from 'tamagui'
import { AccionSecundaria } from '../../shared/ui/acciones'
import { CabeceraPagina, Contenedor, Tramo } from '../../shared/ui/estructura'
import { IconoCruz, IconoEscena, IconoEscudo, IconoReloj, type PropsIcono } from '../../shared/ui/iconos'

type Compromiso = {
  Icono: ComponentType<PropsIcono>
  titulo: string
  parrafos: string[]
}

/** Lo que Auxilia se compromete a cuidar: cada punto describe algo que el sistema ya hace. */
const COMPROMISOS: Compromiso[] = [
  {
    Icono: IconoCruz,
    titulo: 'La atención no espera a la tecnología',
    parrafos: [
      'El despacho de las unidades no depende de la inteligencia artificial: si el resumen de la escena no llega, la tripulación atiende igual.',
      'Quien no puede usar el GPS marca su ubicación en el mapa, y el pedido sale igual.',
    ],
  },
  {
    Icono: IconoEscudo,
    titulo: 'Privacidad de los datos de salud',
    parrafos: [
      'Los datos de los pacientes pertenecen a la empresa de ambulancias que los atiende; Auxilia solo los custodia para prestar el servicio y no los vende.',
      'Mientras una alerta espera unidad, el personal en turno ve el punto y la descripción, sin el nombre ni el teléfono de quien pide ayuda.',
    ],
  },
  {
    Icono: IconoEscena,
    titulo: 'La IA sugiere, no decide',
    parrafos: [
      'El resumen de la escena se muestra como preliminar, separa lo que se ve de lo que se deduce y nunca es un diagnóstico.',
      'Al proveedor de inteligencia artificial no se envían el nombre ni el teléfono del ciudadano.',
    ],
  },
  {
    Icono: IconoReloj,
    titulo: 'Calidad verificable',
    parrafos: [
      'El servidor central se prueba de forma automática con cada cambio, antes de llegar a nuestros clientes.',
      'Cada paso de una atención queda registrado con su hora, para que la empresa pueda revisar y mejorar sus tiempos.',
    ],
  },
]

export function PaginaCompromiso() {
  return (
    <Contenedor>
      <CabeceraPagina
        titulo="Compromiso"
        entrada="Un sistema para emergencias se gana la confianza en los detalles. Esto es lo que cuidamos en cada servicio."
      />
      {COMPROMISOS.map(({ Icono, titulo, parrafos }, indice) => (
        <Tramo key={titulo} final={indice === COMPROMISOS.length - 1}>
          <XStack gap={48} $max-md={{ flexDirection: 'column', gap: 18 }}>
            <XStack width={420} shrink={0} gap={18} items="flex-start" $max-md={{ width: '100%' }}>
              <YStack width={56} height={56} rounded={4} bg="$placaOscura" items="center" justify="center" shrink={0}>
                <Icono size={30} color="var(--placaOscuraTexto)" />
              </YStack>
              <Text
                render="h2"
                flex={1}
                fontFamily="$heading"
                fontWeight="700"
                fontSize={40}
                lineHeight={42}
                color="$texto"
                $max-sm={{ fontSize: 32, lineHeight: 34 }}
              >
                {titulo}
              </Text>
            </XStack>
            <YStack flex={1} gap={14} pt={6}>
              {parrafos.map((parrafo) => (
                <Paragraph key={parrafo} fontSize={18} lineHeight={29} color="$texto" maxW={640}>
                  {parrafo}
                </Paragraph>
              ))}
              {indice === COMPROMISOS.length - 1 && (
                <AccionSecundaria to="/privacidad">Leer la política de privacidad</AccionSecundaria>
              )}
            </YStack>
          </XStack>
        </Tramo>
      ))}
    </Contenedor>
  )
}
