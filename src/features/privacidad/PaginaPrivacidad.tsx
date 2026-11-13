import { isValidElement, type ReactNode } from 'react'
import { Paragraph, Text, XStack, YStack } from 'tamagui'
import { EMPRESA } from '../../contenido/empresa'
import { CabeceraPagina, Contenedor, TituloTramo, Tramo } from '../../shared/ui/estructura'

/**
 * Política de privacidad y términos de uso, resumidos de las secciones 11.6 y 11.7 del documento y limitados a lo
 * que el sistema hace hoy. Los puntos que el documento deja pendientes se marcan como tales.
 */
export function PaginaPrivacidad() {
  return (
    <Contenedor>
      <CabeceraPagina
        titulo="Privacidad y términos"
        entrada="Cómo cuidamos los datos que pasan por el sistema y en qué condiciones se usa la plataforma."
      />

      <Tramo id="privacidad">
        <YStack gap={8}>
          <TituloTramo>Política de privacidad</TituloTramo>
          <Bloque titulo="Quién responde por los datos">
            La empresa de ambulancias es dueña de los datos de su operación: su flota, su personal, los servicios que
            atiende y los datos de sus pacientes. {EMPRESA.razonSocial} opera la plataforma y trata esos datos por
            cuenta de cada empresa, solo para prestar el servicio, sin usarlos para otros fines, divulgarlos ni
            venderlos. Los datos de la cuenta del ciudadano los administra Auxilia para que la persona pueda pedir
            ayuda desde la aplicación gratuita.
          </Bloque>
          <Bloque titulo="Qué datos se usan y para qué">
            <Lista
              items={[
                'Nombre y número de celular verificado por SMS: para crear la cuenta y poder llamar a quien pide ayuda.',
                'Ubicación al pedir ayuda: para llevar la ambulancia al lugar. Se pide solo mientras se usa la aplicación.',
                'Descripción, fotos y audios de la escena: para que la tripulación sepa qué va a encontrar y para el resumen de la escena.',
                'Datos de la atención y del paciente: para registrar el servicio y entregar al paciente en el centro de salud.',
                'Posición de la ambulancia: solo mientras la unidad está en servicio.',
              ]}
            />
          </Bloque>
          <Bloque titulo="Uso de la inteligencia artificial">
            El resumen de la escena es un apoyo para la tripulación y la central, no un diagnóstico. Para generarlo,
            las fotos, los audios y la descripción se envían a un proveedor externo de inteligencia artificial, cuyos
            servidores pueden estar fuera de Bolivia. No se envían el nombre ni el teléfono de quien pide ayuda. El
            despacho no depende de la inteligencia artificial.
          </Bloque>
          <Bloque titulo="Con quién se comparten">
            Solo con los proveedores que alojan o procesan los datos por cuenta de Auxilia (servidores en la nube,
            verificación por SMS, notificaciones, mapas y el resumen de la escena), con el centro de salud que recibe
            al paciente y con las autoridades cuando la ley lo exige.
          </Bloque>
          <Bloque titulo="Cuánto tiempo se guardan">
            Las fotos y los audios de la escena se borran a los 90 días. Los registros de las atenciones se conservan
            según lo que acuerde cada empresa con la normativa de salud.{' '}
            <Pendiente>Plazo de conservación de los registros por definir.</Pendiente>
          </Bloque>
          <Bloque titulo="Sus derechos">
            Toda persona puede pedir conocer qué datos suyos tiene la plataforma, corregirlos, pedir que se eliminen o
            retirar un consentimiento, por el correo de soporte ({EMPRESA.correo.valor}) o por WhatsApp (
            {EMPRESA.whatsapp.valor}).{' '}
            {(EMPRESA.correo.ejemplo || EMPRESA.whatsapp.ejemplo) && <Pendiente>Datos de contacto de ejemplo.</Pendiente>}
          </Bloque>
        </YStack>
      </Tramo>

      <Tramo id="terminos" final>
        <YStack gap={8}>
          <TituloTramo>Términos de uso</TituloTramo>
          <Bloque titulo="Qué es Auxilia">
            Auxilia presta una plataforma en la nube para gestionar servicios de ambulancia: recibir alertas con
            ubicación, coordinar a las unidades, registrar cada atención y organizar los traslados. Auxilia no presta
            servicios de ambulancia ni de salud: la atención está a cargo de la empresa de ambulancias y de su
            personal.
          </Bloque>
          <Bloque titulo="Licencia de uso">
            Cada empresa de ambulancias recibe una licencia no exclusiva e intransferible para usar el panel y la
            aplicación del paramédico mientras su contrato esté vigente. La aplicación del ciudadano es gratuita y de
            uso personal.
          </Bloque>
          <Bloque titulo="Obligaciones">
            La empresa mantiene la habilitación del SEDES de sus ambulancias y su personal, registra datos verdaderos y
            respeta el secreto médico. El personal usa solo su propia cuenta y no comparte su PIN. El ciudadano pide
            ayuda solo ante una necesidad real: la aplicación no reemplaza a las líneas públicas de emergencia.
          </Bloque>
          <Bloque titulo="Propiedad intelectual">
            El software, la marca Auxilia y su logotipo pertenecen a {EMPRESA.razonSocial}. Que el código sea público
            para la evaluación académica no da permiso para explotarlo.
          </Bloque>
          <Bloque titulo="Ley aplicable">
            Estos términos se rigen por las leyes del Estado Plurinacional de Bolivia; cualquier controversia se somete
            a los tribunales de Santa Cruz de la Sierra.
          </Bloque>
        </YStack>
      </Tramo>
    </Contenedor>
  )
}

function Bloque({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <XStack gap={40} py={24} borderBottomWidth={1} borderColor="$bordePlaca" $max-md={{ flexDirection: 'column', gap: 10 }}>
      <Text
        render="h3"
        width={300}
        shrink={0}
        fontFamily="$heading"
        fontWeight="700"
        fontSize={26}
        lineHeight={28}
        color="$texto"
        $max-md={{ width: '100%' }}
      >
        {titulo}
      </Text>
      <YStack flex={1} maxW={680}>
        {/* Una lista va tal cual; el texto corrido va en un párrafo. */}
        {isValidElement(children) && children.type === Lista ? (
          children
        ) : (
          <Paragraph fontSize={18} lineHeight={29} color="$texto">
            {children}
          </Paragraph>
        )}
      </YStack>
    </XStack>
  )
}

function Lista({ items }: { items: string[] }) {
  return (
    <YStack render="ul" m={0} p={0} gap={10} style={{ listStyle: 'none' }}>
      {items.map((item) => (
        <XStack render="li" key={item} gap={12}>
          <YStack width={8} height={8} mt={10} bg="$texto" shrink={0} />
          <Paragraph flex={1} fontSize={18} lineHeight={28} color="$texto">
            {item}
          </Paragraph>
        </XStack>
      ))}
    </YStack>
  )
}

function Pendiente({ children }: { children: string }) {
  return (
    <Text fontSize={15} color="$textoSecundario" fontStyle="italic">
      ({children})
    </Text>
  )
}
