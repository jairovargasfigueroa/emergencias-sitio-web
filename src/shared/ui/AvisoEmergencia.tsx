import { Text, XStack } from 'tamagui'
import { EMPRESA } from '../../contenido/empresa'
import { IconoAlerta } from './iconos'

/**
 * Franja fija arriba de todo: quien llega buscando una ambulancia sabe en el acto que este sitio no recibe
 * pedidos y adónde ir.
 */
export function AvisoEmergencia() {
  return (
    <XStack render="aside" aria-label="Aviso de emergencia" bg="$linea" width="100%">
      <XStack
        width="100%"
        maxW={1240}
        mx="auto"
        px={40}
        py={10}
        gap={12}
        items="center"
        $max-md={{ px: 24 }}
        $max-sm={{ px: 16, items: 'flex-start' }}
      >
        <IconoAlerta size={20} color="var(--lineaTexto)" />
        <Text color="$lineaTexto" fontSize={15} lineHeight={21}>
          <Text fontWeight="700" color="$lineaTexto">
            ¿Es una emergencia?{' '}
          </Text>
          Este sitio no recibe pedidos de ambulancia: pide ayuda desde la app del ciudadano o llama al{' '}
          <Text fontWeight="700" color="$lineaTexto" className="numeros-fijos">
            {EMPRESA.lineaEmergencias}
          </Text>
          .
        </Text>
      </XStack>
    </XStack>
  )
}
