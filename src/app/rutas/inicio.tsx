import { createRoute } from '@tanstack/react-router'
import { H1, YStack } from 'tamagui'
import { rutaRaiz } from './raiz'

export const rutaInicio = createRoute({
  getParentRoute: () => rutaRaiz,
  path: '/',
  component: () => (
    <YStack flex={1} items="center" justify="center" bg="$fondo" minH="100vh">
      <H1 color="$texto">Auxilia</H1>
    </YStack>
  ),
})
