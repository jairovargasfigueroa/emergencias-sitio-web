# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + TypeScript con Vite y pnpm, Tamagui para los componentes y el tema, TanStack Router para las rutas y TanStack Form + Zod para el formulario. Es el mismo stack que el panel de la central (`ambulancias-panel-web`), decidido por el usuario para no mezclar tecnologías entre repos. Se publica en AWS Amplify; por ahora se prueba en local y el dominio se define más adelante. No tiene backend propio ni se conecta al backend del sistema.

## Users

- **Principal: quien decide en una empresa privada de ambulancias de Santa Cruz de la Sierra** (dueño, gerente o administrador de la central). Llega al sitio para entender quién es Auxilia, qué hace su sistema y si conviene pedir una demostración. Suele ser una empresa chica (dos o pocas ambulancias) que hoy recibe pedidos por teléfono y WhatsApp y anota los servicios en cuadernos.
- **Aliados:** clínicas y hospitales privados (algunos con ambulancias propias), el SEDES y el CCES-D, y colegios de profesionales de salud.
- **Secundario: el ciudadano.** Puede llegar buscando "pedir ambulancia". El sitio no recibe pedidos de ayuda; tiene que decirle en el acto cómo pedirla.
- El sitio también lo revisan los docentes y el tribunal de la materia (proyecto de la UAGRM).

## Product Purpose

Es el sitio corporativo de Auxilia Tecnologías S.R.L.: su carta de presentación en internet. Presenta a la empresa (quién es, de dónde viene, misión, visión, valores y equipo), lo que ofrece (el sistema de gestión de ambulancias), sus noticias, su compromiso y cómo contactarla. No es una tienda ni una landing de campaña. Tiene éxito cuando una empresa de ambulancias entiende en segundos qué hace Auxilia, le cree, y escribe para pedir una demostración.

## Positioning

El sistema nació de la operación real de una empresa de ambulancias de Santa Cruz, la Unidad de Emergencias Médicas (UEM), su cliente base, y como proyecto de la FICCT-UAGRM. Su mecanismo: cada pedido de ayuda llega con la ubicación exacta a las ambulancias disponibles, la tripulación sabe qué va a encontrar antes de llegar (un resumen de la escena preparado con inteligencia artificial a partir de fotos y audios) y cada servicio queda registrado con sus tiempos. Frente al teléfono y al rastreo GPS de flotas, Auxilia recibe la alerta del ciudadano, coordina a las unidades en el incidente y registra la atención.

## Operating Context

- Mercado: empresas privadas de ambulancias de Santa Cruz de la Sierra (37 registradas en el SEDES en 2024, unas 250 ambulancias).
- Hoy esas empresas coordinan con llamadas y WhatsApp; se pierden servicios y la tripulación llega sin información.
- En Bolivia casi todos navegan desde el celular: el sitio se piensa primero para el celular.
- El trato con los clientes es en persona, por correo y por WhatsApp; soporte con autoayuda, soporte funcional e ingeniería (capítulo VII del documento de Ingeniería de Software II).

## Capabilities and Constraints

Lo que el sistema hace hoy (comprobado en el código) y el sitio puede mostrar:

- **App del ciudadano:** pedir ayuda con la ubicación del GPS o marcando el punto en el mapa, adjuntar fotos o audios de la escena, seguir en el mapa a la unidad que va, pedir y seguir un traslado programado. Cuenta con verificación del número por SMS.
- **App del paramédico:** activar el acceso con el código que entrega la central y un PIN, iniciar y cerrar el turno, ver los incidentes cercanos, tomar un incidente o sumarse a uno, leer (o escuchar) el resumen de la escena, marcar los hitos de la atención hasta la entrega del paciente, atender traslados.
- **Panel de la central:** centro de control con la flota y los incidentes en vivo en el mapa, despacho de una unidad, cierre de incidentes, agenda de traslados, registro de ambulancias y paramédicos.
- **Resumen con IA:** describe la escena (tipo de suceso, cuántas personas, peligros, gravedad orientativa) y transcribe audios; separa lo observado de lo deducido. Es apoyo para la tripulación, nunca un diagnóstico ni una decisión de despacho.

Restricciones:

- El sitio no recibe pedidos de ambulancia y lo dice siempre a la vista.
- No se presentan como existentes: reportes de operación, cobros y tarifas en el panel, una red de varias empresas en la misma plataforma, ni el envío de video. La red de empresas es la **visión** de Auxilia, no la oferta actual.
- Las apps se nombran de forma genérica: "App del ciudadano", "App del paramédico", "Panel de la central".
- Montos de la tarifa sin publicar hasta confirmarlos.
- Correo de soporte y WhatsApp definidos; se cargan de variables de entorno (`.env.local`, no versionado) porque el repositorio es público. Pendientes: dirección de oficina, redes sociales y dominio.
- Español de Bolivia, con trato de "tú" o "usted" a definir en los textos; el documento usa la primera persona del plural ("Somos Auxilia…").

## Brand Commitments

- Nombre: **Auxilia** (Auxilia Tecnologías S.R.L.).
- Logo existente (Figura 61 del documento): un pin de ubicación rojo con una cruz blanca dentro de un cuadrado oscuro de esquinas redondeadas; la palabra AUXILIA en negro, en negrita, y debajo TECNOLOGÍA en rojo con letras espaciadas.
- El rojo de alerta `#D92D20` es el color que comparten el panel y las dos apps.
- Misión, visión y valores ya redactados (sección 7.1 del documento): "La vida primero", "Rapidez con precisión", "Privacidad de los datos de salud", "La IA sugiere, no decide", "Calidad verificable", "Colaboración ágil".
- Equipo: Jairo Moisés Vargas Figueroa (gerente y responsable del producto) y Brayan Albaro García Taboada (responsable de ingeniería y soporte).
- Es un sistema para emergencias: nada de tono festivo, gamificación ni efectos de adorno. El proyecto no usa los comandos `bolder`, `delight`, `overdrive`, `animate` ni `colorize`.

## Evidence on Hand

- Textos de la empresa: sección 7.1 del documento `Software Documentacion word (3).docx` (raíz de project-taller).
- Logo: Figura 61 del mismo documento.
- Capturas del sistema en el documento: panel (Figura 69), apps (Figuras 70 y 71), alerta, toma de incidente, hitos y despacho (Figuras 91 a 94). No hay capturas nuevas en buena calidad.
- Noticias: hitos reales del proyecto (septiembre a noviembre de 2026). No existen: testimonios, resultados medidos del piloto con la UEM, notas de prensa, clientes además de la UEM, fotos del equipo. No se inventan.

## Product Principles

1. **Decir solo lo que el sistema hace.** Lo que todavía no existe se presenta como visión o como próximo paso, nunca como función.
2. **Primero lo urgente.** Quien llega en una emergencia sabe en la primera pantalla cómo pedir ayuda.
3. **Seriedad antes que espectáculo.** La confianza de una empresa de salud se gana con claridad, precisión y orden, no con efectos.
4. **La IA sugiere, no decide.** Cada mención a la inteligencia artificial la presenta como apoyo a la tripulación.
5. **Mostrar, no prometer.** El sistema se muestra funcionando (pantallas, flujo de un servicio), con datos de demostración rotulados como tales.

## Accessibility & Inclusion

- Contraste WCAG 2.1 AA como mínimo, en modo claro y oscuro (sigue el tema del sistema, como el panel).
- Pensado primero para celular: textos legibles sin zoom y áreas táctiles de al menos 44 px.
- Todo el contenido se entiende sin depender del color (los estados llevan texto).
