import type { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { IconoUbicacion } from '../../shared/ui/iconos'

/**
 * Pantallas de demostración del sistema, dibujadas con los mismos colores del panel y las apps. No son capturas:
 * llevan datos inventados y lo dicen.
 */

function Etiqueta({ children }: { children: string }) {
  return (
    <Text fontSize={13} color="$textoSecundario" mt={10} self="center">
      {children}
    </Text>
  )
}

function Celular({ children }: { children: ReactNode }) {
  return (
    <YStack self="center" width={300} maxW="100%" p={10} rounded={30} bg="$placaOscura" aria-hidden>
      <YStack rounded={22} bg="$fondo" overflow="hidden" minH={520}>
        <XStack height={30} items="center" justify="center">
          <YStack width={84} height={6} rounded={3} bg="$bordeFuerte" />
        </XStack>
        {children}
      </YStack>
    </YStack>
  )
}

export function PantallaCiudadano() {
  return (
    <YStack>
      <Celular>
        <YStack flex={1} px={20} pb={24} gap={18} items="center">
          <Text fontSize={14} color="$textoSecundario" self="flex-start">
            Pedirás ayuda como Ana · 7•• ••• 12
          </Text>
          <YStack flex={1} items="center" justify="center" gap={18}>
            <YStack width={208} height={208} rounded={104} borderWidth={10} borderColor="$primarioTinte" items="center" justify="center">
              <YStack width={168} height={168} rounded={84} bg="$primario" items="center" justify="center">
                <Text fontFamily="$heading" fontWeight="700" fontSize={30} color="$primarioTexto">
                  AYUDA
                </Text>
              </YStack>
            </YStack>
            <Text fontFamily="$heading" fontWeight="700" fontSize={24} color="$texto">
              Toca 3 veces
            </Text>
          </YStack>
          <XStack gap={8} items="center" self="stretch" p={12} rounded={10} bg="$disponibleTinte">
            <IconoUbicacion size={18} color="var(--disponibleTexto)" />
            <Text fontSize={14} color="$disponibleTexto" flex={1}>
              Tu ubicación está lista para enviarse
            </Text>
          </XStack>
        </YStack>
      </Celular>
      <Etiqueta>Pantalla de demostración</Etiqueta>
    </YStack>
  )
}

export function PantallaParamedico() {
  return (
    <YStack>
      <Celular>
        <YStack flex={1} px={14} pb={18} gap={12}>
          <XStack justify="space-between" items="center" px={4}>
            <Text fontFamily="$heading" fontWeight="700" fontSize={20} color="$texto">
              Incidente cercano
            </Text>
            <Text fontSize={14} color="$textoSecundario" className="numeros-fijos">
              1,2 km
            </Text>
          </XStack>
          <YStack p={14} gap={10} rounded={12} bg="$superficie" borderWidth={1} borderColor="$borde">
            <Text fontSize={13} fontWeight="600" color="$textoSecundario">
              Preliminar, armado automáticamente con lo que reportaron
            </Text>
            <Text fontSize={16} lineHeight={22} color="$texto">
              Choque entre dos vehículos en la avenida. Dos personas lesionadas, una consciente.
            </Text>
            <XStack gap={6} flexWrap="wrap">
              <Insignia fondo="$disponibleTinte" color="$disponibleTexto">
                Visto en las fotos
              </Insignia>
              <Insignia fondo="$enAtencionTinte" color="$enAtencionTexto">
                Deducido
              </Insignia>
            </XStack>
            <Text fontSize={15} lineHeight={21} color="$texto">
              Peligro: tránsito en la vía.
            </Text>
          </YStack>
          <YStack flex={1} />
          <XStack height={52} rounded={10} bg="$primario" items="center" justify="center">
            <Text fontFamily="$heading" fontWeight="700" fontSize={20} color="$primarioTexto">
              Tomar el incidente
            </Text>
          </XStack>
        </YStack>
      </Celular>
      <Etiqueta>Pantalla de demostración</Etiqueta>
    </YStack>
  )
}

type Fila = { placa: string; estado: string; tinte: string; texto: string }

const FLOTA: Fila[] = [
  { placa: '3412-KLM', estado: 'En camino', tinte: '$enAtencionTinte', texto: '$enAtencionTexto' },
  { placa: '2290-PTR', estado: 'Disponible', tinte: '$disponibleTinte', texto: '$disponibleTexto' },
  { placa: '4108-BNX', estado: 'Disponible', tinte: '$disponibleTinte', texto: '$disponibleTexto' },
  { placa: '1876-GHS', estado: 'Fuera de servicio', tinte: '$fueraServicioTinte', texto: '$fueraServicioTexto' },
]

export function PantallaPanel() {
  return (
    <YStack>
      <YStack rounded={10} bg="$fondo" borderWidth={1} borderColor="$bordeFuerte" overflow="hidden" aria-hidden>
        <XStack px={18} py={12} bg="$superficie" borderBottomWidth={1} borderColor="$borde" justify="space-between" items="center">
          <Text fontFamily="$heading" fontWeight="700" fontSize={20} color="$texto">
            Centro de control
          </Text>
          <Text fontSize={13} color="$textoSecundario">
            2 disponibles · 1 en camino
          </Text>
        </XStack>
        <XStack mx={14} mt={14} p={12} gap={10} rounded={8} bg="$primarioTinte" items="center">
          <YStack width={10} height={10} rounded={5} bg="$primario" />
          <Text flex={1} fontSize={15} fontWeight="600" color="$primarioTinteTexto">
            Incidente sin unidad · espera 2 min
          </Text>
          <Text fontSize={14} fontWeight="600" color="$primarioTinteTexto">
            Despachar
          </Text>
        </XStack>
        <YStack p={14} gap={6}>
          {FLOTA.map(({ placa, estado, tinte, texto }) => (
            <XStack key={placa} px={12} py={10} rounded={6} bg="$superficie" justify="space-between" items="center">
              <Text fontFamily="$mono" fontSize={15} color="$texto" className="numeros-fijos">
                {placa}
              </Text>
              <Insignia fondo={tinte} color={texto}>
                {estado}
              </Insignia>
            </XStack>
          ))}
        </YStack>
      </YStack>
      <Etiqueta>Pantalla de demostración</Etiqueta>
    </YStack>
  )
}

function Insignia({ fondo, color, children }: { fondo: string; color: string; children: string }) {
  return (
    <XStack px={10} height={24} rounded={999} bg={fondo as '$fondo'} items="center">
      <Text fontSize={13} fontWeight="500" color={color as '$texto'}>
        {children}
      </Text>
    </XStack>
  )
}
