import { Paragraph, Text, XStack, YStack } from 'tamagui'
import { AccionPrincipal } from '../../shared/ui/acciones'
import { CabeceraPagina, Contenedor, Texto, TituloTramo, Tramo } from '../../shared/ui/estructura'

/** Valores de la sección 7.1 del documento, ajustados a lo que el sistema hace hoy. */
const VALORES = [
  {
    nombre: 'La vida primero',
    texto: 'Ante una emergencia, cualquier unidad disponible puede sumarse a la atención.',
  },
  {
    nombre: 'Rapidez con precisión',
    texto: 'La ayuda llega antes cuando la ubicación es exacta y la información es clara.',
  },
  {
    nombre: 'Privacidad de los datos de salud',
    texto: 'Los datos de los pacientes pertenecen a la empresa que los atiende; nosotros solo los custodiamos.',
  },
  {
    nombre: 'La IA sugiere, no decide',
    texto: 'El resumen que prepara la inteligencia artificial es un apoyo para la tripulación, no un diagnóstico.',
  },
  {
    nombre: 'Calidad verificable',
    texto: 'El servidor central se prueba de forma automática con cada cambio, antes de llegar a nuestros clientes.',
  },
  {
    nombre: 'Colaboración ágil',
    texto: 'Trabajamos con Scrum y validamos cada avance con nuestros clientes.',
  },
]

const EQUIPO = [
  {
    nombre: 'Jairo Moisés Vargas Figueroa',
    rol: 'Gerente y responsable del producto',
    iniciales: 'JV',
  },
  {
    nombre: 'Brayan Albaro García Taboada',
    rol: 'Responsable de ingeniería y soporte',
    iniciales: 'BG',
  },
]

export function PaginaQuienesSomos() {
  return (
    <Contenedor>
      <CabeceraPagina
        titulo="Quiénes somos"
        entrada="Somos Auxilia Tecnologías S.R.L., una startup de software de Santa Cruz de la Sierra. Desarrollamos y operamos un sistema para que las empresas privadas de ambulancias reciban los pedidos de auxilio, coordinen a sus unidades y registren cada servicio."
      />

      <Tramo id="historia">
        <XStack gap={56} $max-md={{ flexDirection: 'column', gap: 24 }}>
          <YStack flex={1} $max-md={{ flexBasis: 'auto' }} minW={0}>
            <TituloTramo>De dónde venimos</TituloTramo>
          </YStack>
          <YStack flex={1} $max-md={{ flexBasis: 'auto' }} gap={18} minW={0} pt={8}>
            <Texto>
              El proyecto nació en la Facultad de Ingeniería en Ciencias de la Computación y Telecomunicaciones de
              la UAGRM, a partir de la operación real de la Unidad de Emergencias Médicas, nuestro cliente base.
            </Texto>
            <Texto>
              Hoy muchas empresas de ambulancias reciben los pedidos por teléfono y WhatsApp, coordinan a sus
              unidades con llamadas y anotan los servicios en cuadernos, cuando los anotan. Así se pierden
              servicios y la tripulación llega sin saber qué va a encontrar. Trabajamos para cambiar eso con
              herramientas simples de usar.
            </Texto>
          </YStack>
        </XStack>
      </Tramo>

      <Tramo id="mision">
        <YStack gap={40}>
          <TituloTramo>Misión y visión</TituloTramo>
          <XStack gap={24} $max-md={{ flexDirection: 'column' }}>
            <PlacaDeDeclaracion titulo="Misión">
              Que cada pedido de ayuda llegue con su ubicación exacta a las ambulancias disponibles, que la
              tripulación sepa qué va a encontrar antes de llegar y que cada servicio quede registrado, para que las
              empresas privadas de ambulancias de Santa Cruz de la Sierra atiendan más rápido y mejor.
            </PlacaDeDeclaracion>
            <PlacaDeDeclaracion titulo="Visión" oscura>
              Que nuestro sistema sea el de referencia para coordinar la atención prehospitalaria privada en
              Bolivia: una sola red que conecte a ciudadanos, ambulancias y centros de salud, donde ninguna
              emergencia se pierda por falta de información.
            </PlacaDeDeclaracion>
          </XStack>
        </YStack>
      </Tramo>

      <Tramo id="valores">
        <YStack gap={36}>
          <TituloTramo>Nuestros valores</TituloTramo>
          <YStack render="ul" m={0} p={0} borderTopWidth={2} borderColor="$texto" style={{ listStyle: 'none' }}>
            {VALORES.map(({ nombre, texto }) => (
              <XStack
                render="li"
                key={nombre}
                gap={32}
                py={22}
                borderBottomWidth={1}
                borderColor="$bordePlaca"
                $max-sm={{ flexDirection: 'column', gap: 6 }}
              >
                <Text
                  width={340}
                  shrink={0}
                  fontFamily="$heading"
                  fontWeight="700"
                  fontSize={28}
                  lineHeight={30}
                  color="$texto"
                  $max-md={{ width: 260 }}
                  $max-sm={{ width: '100%' }}
                >
                  {nombre}
                </Text>
                <Paragraph flex={1} $max-sm={{ flexBasis: 'auto' }} fontSize={18} lineHeight={28} color="$textoSecundario">
                  {texto}
                </Paragraph>
              </XStack>
            ))}
          </YStack>
        </YStack>
      </Tramo>

      <Tramo id="equipo">
        <YStack gap={36}>
          <TituloTramo>El equipo</TituloTramo>
          <XStack gap={24} flexWrap="wrap" $max-sm={{ flexDirection: 'column' }}>
            {EQUIPO.map(({ nombre, rol, iniciales }) => (
              <XStack
                key={nombre}
                gap={20}
                items="center"
                p={24}
                bg="$placa"
                borderWidth={1}
                borderColor="$bordePlaca"
                rounded={6}
                flex={1}
                minW={300}
                $max-sm={{ minW: 0, flexBasis: 'auto' }}
              >
                <YStack width={72} height={72} rounded={4} bg="$placaOscura" items="center" justify="center" shrink={0}>
                  <Text fontFamily="$heading" fontWeight="700" fontSize={30} color="$placaOscuraTexto" aria-hidden>
                    {iniciales}
                  </Text>
                </YStack>
                <YStack gap={4} flex={1}>
                  <Text fontFamily="$heading" fontWeight="700" fontSize={26} lineHeight={28} color="$texto">
                    {nombre}
                  </Text>
                  <Text fontSize={16} lineHeight={22} color="$textoSecundario">
                    {rol}
                  </Text>
                </YStack>
              </XStack>
            ))}
          </XStack>
          <Texto>Trabajamos desde Santa Cruz de la Sierra y atendemos a nuestros clientes en persona, por correo y por WhatsApp.</Texto>
        </YStack>
      </Tramo>

      <Tramo final>
        <YStack gap={24}>
          <TituloTramo>Hacia dónde vamos</TituloTramo>
          <Texto>
            Hoy cada empresa usa el sistema para coordinar sus propias unidades. El paso siguiente es una red que
            conecte a varias empresas, para que un pedido de ayuda encuentre siempre la ambulancia disponible más
            cercana.
          </Texto>
          <AccionPrincipal to="/contacto" hash="demostracion">
            Pedir una demostración
          </AccionPrincipal>
        </YStack>
      </Tramo>
    </Contenedor>
  )
}

type PropsDeclaracion = {
  titulo: string
  oscura?: boolean
  children: string
}

function PlacaDeDeclaracion({ titulo, oscura = false, children }: PropsDeclaracion) {
  return (
    <YStack
      flex={1} $max-md={{ flexBasis: 'auto' }}
      gap={16}
      p={32}
      rounded={6}
      bg={oscura ? '$placaOscura' : '$placa'}
      borderWidth={1}
      borderColor={oscura ? '$placaOscura' : '$bordePlaca'}
      $max-sm={{ p: 24 }}
    >
      <Text
        fontFamily="$heading"
        fontWeight="700"
        fontSize={34}
        lineHeight={36}
        color={oscura ? '$placaOscuraTexto' : '$texto'}
      >
        {titulo}
      </Text>
      <Paragraph fontSize={19} lineHeight={30} color={oscura ? '$placaOscuraTexto' : '$texto'}>
        {children}
      </Paragraph>
    </YStack>
  )
}
