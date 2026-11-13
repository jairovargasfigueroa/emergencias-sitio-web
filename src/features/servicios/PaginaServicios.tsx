import type { ReactNode } from 'react'
import { Paragraph, Text, XStack, YStack } from 'tamagui'
import { HORARIO_ATENCION } from '../../contenido/empresa'
import { AccionPrincipal } from '../../shared/ui/acciones'
import { CabeceraPagina, Contenedor, Entrada, TituloTramo, Tramo } from '../../shared/ui/estructura'
import { PantallaCiudadano, PantallaPanel, PantallaParamedico } from './pantallas'

export function PaginaServicios() {
  return (
    <Contenedor>
      <CabeceraPagina
        titulo="Servicios"
        entrada="Auxilia presta a las empresas de ambulancias un sistema en la nube: no instalan servidores ni compran equipos. Nosotros lo operamos, lo actualizamos y damos el soporte."
      />

      <Tramo id="ciudadano">
        <Parte
          titulo="App del ciudadano"
          entrada="Para quien pide ayuda. Es gratuita."
          funciones={[
            'Pide ayuda tocando tres veces un solo botón, con la ubicación del celular.',
            'Sin señal de GPS, marca el punto en el mapa antes de enviar.',
            'Adjunta fotos o audios de la escena para que la tripulación sepa qué va a encontrar.',
            'Sigue en el mapa a la unidad que va en camino.',
            'Pide y sigue un traslado programado a un centro de salud.',
          ]}
          pantalla={<PantallaCiudadano />}
        />
      </Tramo>

      <Tramo id="paramedico">
        <Parte
          titulo="App del paramédico"
          entrada="Para la tripulación de cada ambulancia."
          funciones={[
            'Activa su acceso con el código que entrega la central y un PIN propio.',
            'Inicia y cierra su turno; mientras está en servicio, su unidad aparece en el mapa.',
            'Ve los incidentes cercanos, toma uno o se suma a uno ya tomado.',
            'Lee o escucha el resumen de la escena mientras va en camino.',
            'Marca cada paso de la atención hasta la entrega del paciente.',
          ]}
          pantalla={<PantallaParamedico />}
        />
      </Tramo>

      <Tramo id="panel">
        <Parte
          titulo="Panel de la central"
          entrada="Para la central de la empresa, en la computadora."
          funciones={[
            'Muestra la flota y los incidentes en vivo, sobre el mapa.',
            'Avisa cuando un incidente espera unidad y permite despachar una.',
            'Organiza la agenda de traslados del día y los que se quedaron sin unidad.',
            'Registra ambulancias y paramédicos, y genera sus códigos de activación.',
            'Guarda el historial de cada incidente con la hora de cada paso.',
          ]}
          pantalla={<PantallaPanel />}
          ancha
        />
      </Tramo>

      <Tramo id="resumen">
        <YStack gap={28}>
          <TituloTramo>Resumen de la escena con inteligencia artificial</TituloTramo>
          <Entrada>
            Con las fotos y los audios que envía quien pide ayuda, el sistema arma un resumen corto para la
            tripulación: qué pasó, cuántas personas hay, qué peligros esperar y una gravedad orientativa.
          </Entrada>
          <XStack gap={24} $max-md={{ flexDirection: 'column' }}>
            <Garantia titulo="Separa lo visto de lo deducido">
              Cada dato dice si salió de lo que se ve o se escucha, o si es una deducción.
            </Garantia>
            <Garantia titulo="Sugiere, no decide">
              No es un diagnóstico ni decide el despacho. Si el resumen no llega, la atención sigue igual.
            </Garantia>
            <Garantia titulo="Sin datos personales">
              Al servicio de inteligencia artificial no viajan el nombre ni el teléfono de quien pide ayuda.
            </Garantia>
          </XStack>
        </YStack>
      </Tramo>

      <Tramo id="como-trabajamos" final>
        <YStack gap={32}>
          <TituloTramo>Cómo trabajamos con su empresa</TituloTramo>
          <YStack render="ol" m={0} p={0} borderTopWidth={2} borderColor="$texto" style={{ listStyle: 'none' }}>
            <PasoDeTrabajo numero="1" titulo="Demostración">
              Le mostramos un servicio completo en su base, en unos 20 minutos.
            </PasoDeTrabajo>
            <PasoDeTrabajo numero="2" titulo="Puesta en marcha">
              Verificamos la habilitación del SEDES, registramos su flota y su personal y activamos las cuentas.
            </PasoDeTrabajo>
            <PasoDeTrabajo numero="3" titulo="Capacitación">
              Una sesión para la central y otra para las tripulaciones.
            </PasoDeTrabajo>
            <PasoDeTrabajo numero="4" titulo="Soporte">
              Correo y WhatsApp ({HORARIO_ATENCION.toLowerCase()}) y una línea para fallas críticas las 24 horas.
            </PasoDeTrabajo>
          </YStack>
          <Paragraph fontSize={18} lineHeight={28} color="$textoSecundario" maxW={680}>
            Las condiciones comerciales se conversan en la demostración.
          </Paragraph>
          <AccionPrincipal to="/contacto" hash="demostracion">
            Pedir una demostración
          </AccionPrincipal>
        </YStack>
      </Tramo>
    </Contenedor>
  )
}

type PropsParte = {
  titulo: string
  entrada: string
  funciones: string[]
  pantalla: ReactNode
  ancha?: boolean
}

function Parte({ titulo, entrada, funciones, pantalla, ancha = false }: PropsParte) {
  return (
    <XStack gap={56} items="flex-start" $max-md={{ flexDirection: 'column', gap: 36 }}>
      <YStack flex={1} $max-md={{ flexBasis: 'auto' }} gap={22} minW={0}>
        <TituloTramo>{titulo}</TituloTramo>
        <Entrada>{entrada}</Entrada>
        <YStack render="ul" m={0} p={0} gap={0} style={{ listStyle: 'none' }}>
          {funciones.map((funcion) => (
            <XStack render="li" key={funcion} gap={14} py={12} borderTopWidth={1} borderColor="$bordePlaca">
              <YStack width={10} height={10} mt={8} bg="$texto" shrink={0} />
              <Paragraph flex={1} fontSize={18} lineHeight={27} color="$texto">
                {funcion}
              </Paragraph>
            </XStack>
          ))}
        </YStack>
      </YStack>
      <YStack width={ancha ? '46%' : 340} shrink={0} $max-md={{ width: '100%' }}>
        {pantalla}
      </YStack>
    </XStack>
  )
}

function Garantia({ titulo, children }: { titulo: string; children: string }) {
  return (
    <YStack flex={1} $max-md={{ flexBasis: 'auto' }} gap={10} p={24} bg="$placa" borderWidth={1} borderColor="$bordePlaca" rounded={6}>
      <Text fontFamily="$heading" fontWeight="700" fontSize={26} lineHeight={28} color="$texto">
        {titulo}
      </Text>
      <Paragraph fontSize={17} lineHeight={26} color="$textoSecundario">
        {children}
      </Paragraph>
    </YStack>
  )
}

function PasoDeTrabajo({ numero, titulo, children }: { numero: string; titulo: string; children: ReactNode }) {
  return (
    <XStack render="li" gap={24} py={22} borderBottomWidth={1} borderColor="$bordePlaca" items="flex-start">
      <YStack width={48} height={48} rounded={4} bg="$placaOscura" items="center" justify="center" shrink={0}>
        <Text fontFamily="$heading" fontWeight="700" fontSize={26} color="$placaOscuraTexto">
          {numero}
        </Text>
      </YStack>
      <YStack flex={1} gap={4}>
        <Text fontFamily="$heading" fontWeight="700" fontSize={28} lineHeight={30} color="$texto">
          {titulo}
        </Text>
        <Paragraph fontSize={18} lineHeight={27} color="$textoSecundario">
          {children}
        </Paragraph>
      </YStack>
    </XStack>
  )
}
