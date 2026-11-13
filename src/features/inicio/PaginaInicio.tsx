import type { ComponentType } from 'react'
import { H1, Paragraph, Text, XStack, YStack } from 'tamagui'
import { AccionPrincipal, AccionSecundaria } from '../../shared/ui/acciones'
import { Contenedor, Empalme, Entrada, Texto, TituloTramo, Tramo } from '../../shared/ui/estructura'
import {
  IconoAmbulancia,
  IconoCelular,
  IconoCuaderno,
  IconoEscena,
  IconoPanel,
  IconoTelefono,
  IconoUbicacion,
  type PropsIcono,
} from '../../shared/ui/iconos'
import { PlanoUstedEstaAqui } from './PlanoUstedEstaAqui'
import { RecorridoDeUnServicio } from './RecorridoDeUnServicio'

export function PaginaInicio() {
  return (
    <>
      <Portada />
      <Contenedor>
        <Empalme />
        <Tramo id="problema">
          <Problema />
        </Tramo>
        <Tramo id="recorrido">
          <RecorridoDeUnServicio />
        </Tramo>
        <Tramo id="sistema">
          <Directorio />
        </Tramo>
        <Tramo id="origen">
          <Origen />
        </Tramo>
        <Tramo final>
          <Cierre />
        </Tramo>
      </Contenedor>
    </>
  )
}

function Portada() {
  return (
    <Contenedor>
      <XStack
        gap={48}
        pt={56}
        items="flex-end"
        $max-lg={{ gap: 32 }}
        $max-md={{ flexDirection: 'column', items: 'stretch', pt: 32, gap: 40 }}
      >
        <YStack flex={1} $max-md={{ flexBasis: 'auto' }} gap={28} minW={0}>
          {/* El mensaje va montado en una placa esmaltada, como el letrero grande de un área del hospital. */}
          <YStack bg="$placaOscura" rounded={6} px={40} py={36} $max-sm={{ px: 22, py: 24 }}>
            <H1
              fontFamily="$heading"
              fontWeight="700"
              fontSize={68}
              lineHeight={68}
              letterSpacing={-1.2}
              color="$placaOscuraTexto"
              $max-lg={{ fontSize: 56, lineHeight: 57 }}
              $max-sm={{ fontSize: 42, lineHeight: 43, letterSpacing: -0.6 }}
              style={{ textWrap: 'balance' }}
            >
              Cada pedido de auxilio, con su ubicación exacta, en la ambulancia disponible.
            </H1>
          </YStack>
          <Entrada>
            Auxilia es el sistema con el que las empresas privadas de ambulancias de Santa Cruz reciben los
            pedidos de ayuda, coordinan a sus unidades y registran cada servicio.
          </Entrada>
          <XStack gap={28} items="center" flexWrap="wrap" pt={4}>
            <AccionPrincipal to="/contacto" hash="demostracion">
              Pedir una demostración
            </AccionPrincipal>
            <AccionSecundaria to="/servicios">Conocer el sistema</AccionSecundaria>
          </XStack>
        </YStack>
        <YStack
          width="44%"
          maxW={540}
          shrink={0}
          borderWidth={1}
          borderColor="$bordePlaca"
          rounded={8}
          p={10}
          bg="$placa"
          $max-md={{ width: '100%', maxW: 560, self: 'center' }}
        >
          <PlanoUstedEstaAqui />
        </YStack>
      </XStack>
    </Contenedor>
  )
}

type Senal = {
  Icono: ComponentType<PropsIcono>
  titulo: string
  texto: string
}

const HOY: Senal[] = [
  {
    Icono: IconoTelefono,
    titulo: 'Pedidos por teléfono y WhatsApp',
    texto: 'La central atiende llamadas y mensajes al mismo tiempo, y coordina a sus unidades con más llamadas.',
  },
  {
    Icono: IconoUbicacion,
    titulo: 'Sin ubicación exacta',
    texto: 'La dirección llega de palabra; la tripulación sale sin saber bien adónde va ni qué va a encontrar.',
  },
  {
    Icono: IconoCuaderno,
    titulo: 'Servicios en un cuaderno',
    texto: 'Cada servicio se anota a mano, cuando se anota. Así se pierden pedidos y no queda registro.',
  },
]

function Problema() {
  return (
    <YStack gap={36}>
      <TituloTramo>Hoy, un pedido de auxilio pasa por el teléfono, el WhatsApp y un cuaderno.</TituloTramo>
      {/* Una sola placa, con una fila por problema, como un cartel de indicaciones. */}
      <YStack render="ul" m={0} p={0} bg="$placa" borderWidth={1} borderColor="$bordePlaca" rounded={6} style={{ listStyle: 'none' }}>
        {HOY.map(({ Icono, titulo, texto }, indice) => (
          <XStack
            render="li"
            key={titulo}
            gap={24}
            px={28}
            py={24}
            items="center"
            borderTopWidth={indice === 0 ? 0 : 1}
            borderColor="$bordePlaca"
            $max-sm={{ px: 18, py: 20, gap: 16, items: 'flex-start' }}
          >
            <YStack width={56} height={56} rounded={4} bg="$placaOscura" items="center" justify="center" shrink={0} $max-sm={{ width: 48, height: 48 }}>
              <Icono size={28} color="var(--placaOscuraTexto)" />
            </YStack>
            <XStack flex={1} gap={28} items="center" $max-md={{ flexDirection: 'column', items: 'flex-start', gap: 6 }}>
              <Text
                width={320}
                shrink={0}
                fontFamily="$heading"
                fontWeight="700"
                fontSize={28}
                lineHeight={30}
                color="$texto"
                $max-md={{ width: '100%', fontSize: 25, lineHeight: 27 }}
              >
                {titulo}
              </Text>
              <Paragraph flex={1} $max-md={{ flexBasis: 'auto' }} fontSize={17} lineHeight={26} color="$textoSecundario">
                {texto}
              </Paragraph>
            </XStack>
          </XStack>
        ))}
      </YStack>
    </YStack>
  )
}

type ParteDelSistema = {
  Icono: ComponentType<PropsIcono>
  nombre: string
  quien: string
  que: string
}

const DIRECTORIO: ParteDelSistema[] = [
  {
    Icono: IconoCelular,
    nombre: 'App del ciudadano',
    quien: 'Quien pide ayuda',
    que: 'Pide ayuda con la ubicación del celular, adjunta fotos o audios de la escena y sigue a la unidad en el mapa.',
  },
  {
    Icono: IconoAmbulancia,
    nombre: 'App del paramédico',
    quien: 'La tripulación',
    que: 'Toma el incidente o se suma a uno, lee el resumen de la escena y marca cada paso de la atención.',
  },
  {
    Icono: IconoPanel,
    nombre: 'Panel de la central',
    quien: 'La central de la empresa',
    que: 'Ve la flota y los incidentes en vivo, despacha una unidad y organiza los traslados del día.',
  },
  {
    Icono: IconoEscena,
    nombre: 'Resumen de la escena',
    quien: 'Tripulación y central',
    que: 'Con las fotos y audios, la inteligencia artificial anticipa qué pasó y qué peligros hay. Sugiere; no decide.',
  },
]

/** El sistema como el directorio de un hospital: una placa oscura con una fila por parte. */
function Directorio() {
  return (
    <YStack gap={36}>
      <YStack gap={18}>
        <TituloTramo>Un solo sistema, de la alerta al registro.</TituloTramo>
        <Entrada>
          Cuatro partes conectadas a un servidor central. Cada una la usa quien la necesita, en el momento en que
          la necesita.
        </Entrada>
      </YStack>
      <YStack bg="$placaOscura" rounded={8} overflow="hidden">
        {DIRECTORIO.map(({ Icono, nombre, quien, que }, indice) => (
          <XStack
            key={nombre}
            gap={28}
            px={32}
            py={26}
            items="center"
            borderTopWidth={indice === 0 ? 0 : 1}
            borderColor="$bordePlacaOscura"
            $max-md={{ flexDirection: 'column', items: 'flex-start', gap: 12, px: 22, py: 22 }}
          >
            <XStack width={300} shrink={0} gap={16} items="center" $max-md={{ width: '100%' }}>
              <Icono size={30} color="var(--placaOscuraTexto)" />
              <YStack>
                <Text fontFamily="$heading" fontWeight="700" fontSize={26} lineHeight={28} color="$placaOscuraTexto">
                  {nombre}
                </Text>
                <Text fontSize={15} lineHeight={21} color="$placaOscuraSecundario">
                  {quien}
                </Text>
              </YStack>
            </XStack>
            <Paragraph flex={1} $max-md={{ flexBasis: 'auto' }} fontSize={17} lineHeight={26} color="$placaOscuraTexto">
              {que}
            </Paragraph>
          </XStack>
        ))}
      </YStack>
      <AccionSecundaria to="/servicios">Ver cada parte en detalle</AccionSecundaria>
    </YStack>
  )
}

function Origen() {
  return (
    <XStack gap={56} $max-md={{ flexDirection: 'column', gap: 28 }}>
      <YStack flex={1} $max-md={{ flexBasis: 'auto' }} minW={0}>
        <TituloTramo>Nació en una central de ambulancias de verdad.</TituloTramo>
      </YStack>
      <YStack flex={1} $max-md={{ flexBasis: 'auto' }} gap={18} minW={0} pt={8}>
        <Texto>
          El sistema se construyó a partir de la operación real de la Unidad de Emergencias Médicas (UEM), una
          empresa de ambulancias de Santa Cruz y nuestro cliente base, como proyecto de la Facultad de Ingeniería
          en Ciencias de la Computación y Telecomunicaciones de la UAGRM.
        </Texto>
        <Texto>
          Cada regla del sistema copia cómo trabaja una central: quién toma un pedido, cuándo se suma otra unidad,
          qué se registra en cada paso.
        </Texto>
        <AccionSecundaria to="/quienes-somos">Conocer a Auxilia</AccionSecundaria>
      </YStack>
    </XStack>
  )
}

function Cierre() {
  return (
    <YStack gap={24}>
      <TituloTramo>¿Tiene una empresa de ambulancias?</TituloTramo>
      <Entrada>
        Le mostramos un servicio completo en su base, en unos 20 minutos: un ciudadano pide ayuda, la tripulación
        toma la alerta y la central sigue su avance en el mapa.
      </Entrada>
      <AccionPrincipal to="/contacto" hash="demostracion">
        Pedir una demostración
      </AccionPrincipal>
    </YStack>
  )
}
