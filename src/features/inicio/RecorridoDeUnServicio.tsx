import { Paragraph, Text, XStack, YStack } from 'tamagui'
import { Entrada, TituloTramo } from '../../shared/ui/estructura'

type Paso = {
  hora: string
  titulo: string
  quien: string
  texto: string
}

/**
 * Un servicio de demostración contado por sus pasos reales en el sistema. Las horas son de ejemplo; los pasos son
 * los hitos que registra la app del paramédico.
 */
const PASOS: Paso[] = [
  {
    hora: '12:04',
    titulo: 'Pide ayuda',
    quien: 'Ciudadano',
    texto: 'Toca tres veces el botón de ayuda. La alerta sale con su ubicación exacta.',
  },
  {
    hora: '12:05',
    titulo: 'Toma la alerta',
    quien: 'Tripulación',
    texto: 'Una unidad disponible cercana la toma y sale en camino.',
  },
  {
    hora: '12:11',
    titulo: 'Llega al lugar',
    quien: 'Tripulación',
    texto: 'Ya sabe qué va a encontrar: leyó el resumen de la escena en el camino.',
  },
  {
    hora: '12:29',
    titulo: 'Lleva al paciente',
    quien: 'Tripulación',
    texto: 'Recoge al paciente y marca el centro de salud de destino.',
  },
  {
    hora: '12:44',
    titulo: 'Lo entrega',
    quien: 'Central',
    texto: 'El servicio queda registrado con la hora de cada paso.',
  },
]

/** Las etapas como placas de la misma escala sobre una sola línea, y cada una anuncia la que viene. */
export function RecorridoDeUnServicio() {
  return (
    <YStack gap={36}>
      <YStack gap={18}>
        <TituloTramo>Un servicio, paso por paso, sin una sola llamada.</TituloTramo>
        <Entrada>Así se ve un servicio de ejemplo en el sistema: cada paso queda registrado con su hora.</Entrada>
      </YStack>

      <YStack render="ol" m={0} p={0} style={{ listStyle: 'none' }}>
        {/* La línea que une las placas: horizontal en pantallas anchas, vertical en el celular. */}
        <XStack gap={0} $max-md={{ flexDirection: 'column' }}>
          {PASOS.map((paso, indice) => (
            <PlacaDePaso key={paso.titulo} paso={paso} siguiente={PASOS[indice + 1]?.titulo} ultimo={indice === PASOS.length - 1} />
          ))}
        </XStack>
      </YStack>
    </YStack>
  )
}

type PropsPlaca = {
  paso: Paso
  siguiente?: string
  ultimo: boolean
}

function PlacaDePaso({ paso, siguiente, ultimo }: PropsPlaca) {
  return (
    <YStack render="li" flex={1} minW={0} $max-md={{ flexDirection: 'row', gap: 18, flexBasis: 'auto' }}>
      {/* Tramo de línea con su parada. */}
      <XStack height={28} items="center" $max-md={{ height: 'auto', width: 28, flexDirection: 'column' }}>
        <YStack width={18} height={18} rounded={2} bg="$linea" />
        {!ultimo && <YStack flex={1} height={6} bg="$linea" $max-md={{ width: 6, height: 'auto' }} />}
        {ultimo && <YStack flex={1} />}
      </XStack>

      <YStack
        flex={1}
        mt={18}
        mr={12}
        gap={10}
        px={18}
        pt={18}
        pb={22}
        bg="$placa"
        borderWidth={1}
        borderColor="$bordePlaca"
        rounded={6}
        minH={248}
        $max-md={{ mt: 0, mr: 0, mb: 16, minH: 0 }}
      >
        <XStack justify="space-between" items="baseline">
          <Text fontFamily="$mono" fontWeight="600" fontSize={22} color="$texto" className="numeros-fijos">
            {paso.hora}
          </Text>
          <Text fontSize={14} color="$textoSecundario">
            {paso.quien}
          </Text>
        </XStack>
        <Text fontFamily="$heading" fontWeight="700" fontSize={24} lineHeight={26} color="$texto">
          {paso.titulo}
        </Text>
        <Paragraph flexGrow={1} fontSize={16} lineHeight={24} color="$textoSecundario">
          {paso.texto}
        </Paragraph>
        <Text fontSize={14} lineHeight={20} color="$texto" fontWeight="600">
          {siguiente ? `Sigue: ${siguiente.toLowerCase()}` : 'Servicio cerrado'}
        </Text>
      </YStack>
    </YStack>
  )
}
