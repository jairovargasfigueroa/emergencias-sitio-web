import type { ComponentType } from 'react'
import { Paragraph, Text, XStack, YStack } from 'tamagui'
import { EMPRESA, HORARIO_ATENCION, type DatoDeContacto } from '../../contenido/empresa'
import { CabeceraPagina, Contenedor, TituloTramo, Tramo } from '../../shared/ui/estructura'
import { IconoAlerta, IconoCorreo, IconoMensaje, type PropsIcono } from '../../shared/ui/iconos'
import { FormularioDemostracion } from './FormularioDemostracion'

type Canal = {
  Icono: ComponentType<PropsIcono>
  nombre: string
  para: string
  disponibilidad: string
  respuesta: string
  dato: DatoDeContacto
}

/** Canales de la sección 7.2 del documento. */
const CANALES: Canal[] = [
  {
    Icono: IconoCorreo,
    nombre: 'Correo de soporte',
    para: 'Consultas, pedidos de cuentas, afiliación y facturación. También pedidos sobre datos personales.',
    disponibilidad: HORARIO_ATENCION,
    respuesta: 'Primera respuesta en hasta 8 horas hábiles',
    dato: EMPRESA.correo,
  },
  {
    Icono: IconoMensaje,
    nombre: 'WhatsApp de atención',
    para: 'Dudas de uso de la central y de las tripulaciones, con ayuda paso a paso.',
    disponibilidad: HORARIO_ATENCION,
    respuesta: 'Primera respuesta en hasta 2 horas hábiles',
    dato: EMPRESA.whatsapp,
  },
  {
    Icono: IconoAlerta,
    nombre: 'Fallas críticas',
    para: 'Para empresas que ya usan el sistema: cuando no llegan las alertas o no se puede tomar un incidente.',
    disponibilidad: 'Las 24 horas, todos los días, por el mismo WhatsApp',
    respuesta: 'Primera respuesta en hasta 30 minutos',
    dato: EMPRESA.whatsapp,
  },
]

export function PaginaContacto() {
  return (
    <Contenedor>
      <CabeceraPagina
        titulo="Contacto"
        entrada="Escríbanos para conocer el sistema o si su empresa ya lo usa y necesita ayuda. Atendemos en persona, por correo y por WhatsApp."
      />

      <Tramo id="demostracion">
        <XStack gap={56} $max-lg={{ flexDirection: 'column', gap: 32 }}>
          <YStack width={360} shrink={0} gap={18} $max-lg={{ width: '100%' }}>
            <TituloTramo>Pida una demostración</TituloTramo>
            <Paragraph fontSize={18} lineHeight={28} color="$textoSecundario">
              Le mostramos un servicio completo en su base, en unos 20 minutos. Deje sus datos y le escribimos para
              coordinar el día.
            </Paragraph>
          </YStack>
          <YStack flex={1} $max-lg={{ flexBasis: 'auto' }} minW={0} p={32} bg="$placa" borderWidth={1} borderColor="$bordePlaca" rounded={6} $max-sm={{ p: 20 }}>
            <FormularioDemostracion />
          </YStack>
        </XStack>
      </Tramo>

      <Tramo id="canales" final>
        <YStack gap={32}>
          <TituloTramo>Canales de atención</TituloTramo>
          <XStack gap={14} items="center" p={18} rounded={6} bg="$placaOscura">
            <IconoAlerta size={24} color="var(--placaOscuraTexto)" />
            <Paragraph flex={1} fontSize={17} lineHeight={25} color="$placaOscuraTexto" fontWeight="600">
              Ninguno de estos canales recibe pedidos de ambulancia. Ante una emergencia, pida ayuda desde la app
              del ciudadano o llame al {EMPRESA.lineaEmergencias}.
            </Paragraph>
          </XStack>
          <YStack render="ul" m={0} p={0} borderTopWidth={2} borderColor="$texto" style={{ listStyle: 'none' }}>
            {CANALES.map(({ Icono, nombre, para, disponibilidad, respuesta, dato }) => (
              <XStack
                render="li"
                key={nombre}
                gap={32}
                py={26}
                borderBottomWidth={1}
                borderColor="$bordePlaca"
                $max-md={{ flexDirection: 'column', gap: 12 }}
              >
                <XStack width={330} shrink={0} gap={14} items="flex-start" $max-md={{ width: '100%' }}>
                  <Icono size={28} color="var(--texto)" />
                  <YStack gap={4} flex={1}>
                    <Text fontFamily="$heading" fontWeight="700" fontSize={28} lineHeight={30} color="$texto">
                      {nombre}
                    </Text>
                    <a href={dato.enlace} style={{ color: 'var(--texto)' }}>
                      <Text fontSize={17} color="$texto" className="numeros-fijos">
                        {dato.valor}
                      </Text>
                    </a>
                    {dato.ejemplo && (
                      <Text fontSize={14} color="$textoSecundario">
                        Dato de ejemplo
                      </Text>
                    )}
                  </YStack>
                </XStack>
                <YStack flex={1} $max-md={{ flexBasis: 'auto' }} gap={8}>
                  <Paragraph fontSize={18} lineHeight={27} color="$texto">
                    {para}
                  </Paragraph>
                  <Paragraph fontSize={16} lineHeight={24} color="$textoSecundario">
                    {disponibilidad}. {respuesta}.
                  </Paragraph>
                </YStack>
              </XStack>
            ))}
          </YStack>
          <Paragraph fontSize={17} lineHeight={26} color="$textoSecundario">
            {EMPRESA.razonSocial} · {EMPRESA.ciudad}
          </Paragraph>
        </YStack>
      </Tramo>
    </Contenedor>
  )
}
