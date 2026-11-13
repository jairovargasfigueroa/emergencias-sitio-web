import { Outlet } from '@tanstack/react-router'
import { YStack } from 'tamagui'
import { AvisoEmergencia } from './AvisoEmergencia'
import { Encabezado } from './Encabezado'
import { Pie } from './Pie'

/** Marco de todas las páginas: el aviso de emergencia, el encabezado, el contenido y el pie. */
export function Marco() {
  return (
    <YStack minH="100vh" bg="$pared">
      <AvisoEmergencia />
      <Encabezado />
      <YStack render="main" flexGrow={1} flexShrink={0}>
        <Outlet />
      </YStack>
      <Pie />
    </YStack>
  )
}
