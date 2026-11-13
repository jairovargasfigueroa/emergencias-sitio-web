import { useEffect, useRef, type CSSProperties } from 'react'

/**
 * Plano de ubicación de Santa Cruz por anillos, como el «Usted está aquí» de la señalética. Cuenta un servicio de
 * demostración: la alerta cae en el 3er anillo y la unidad disponible más cercana traza su ruta. Los datos son de
 * demostración y el plano lo dice.
 */

const ANCHO = 560
const ALTO = 540
const CENTRO = { x: 286, y: 286 }

const ANILLOS = [
  { radio: 46, nombre: '1er anillo' },
  { radio: 94, nombre: '2do anillo' },
  { radio: 148, nombre: '3er anillo' },
  { radio: 206, nombre: '4to anillo' },
]

function polar(radio: number, grados: number) {
  const angulo = (grados * Math.PI) / 180
  return { x: CENTRO.x + radio * Math.cos(angulo), y: CENTRO.y + radio * Math.sin(angulo) }
}

const RADIALES = [-90, -60, -30, 0, 30, 60, 90, 120, 150, 180, 210, 240]

const ALERTA = polar(148, -58)
const UNIDAD_DISPONIBLE = polar(206, -94)
const QUIEBRE_RUTA = polar(148, -94)
const UNIDAD_EN_ATENCION = polar(110, 200)
const UNIDAD_LEJANA = polar(206, 118)

// Ruta: baja por la radial hasta el 3er anillo y sigue el anillo hasta la alerta.
const RUTA = `M${UNIDAD_DISPONIBLE.x} ${UNIDAD_DISPONIBLE.y} L${QUIEBRE_RUTA.x} ${QUIEBRE_RUTA.y} A148 148 0 0 1 ${ALERTA.x} ${ALERTA.y}`
const LARGO_RUTA = 58 + (148 * 36 * Math.PI) / 180 + 4

const SENAL = '"Barlow Semi Condensed", "Arial Narrow", sans-serif'
const DATO = '"Barlow", sans-serif'

export function PlanoUstedEstaAqui() {
  const plano = useRef<SVGSVGElement>(null)

  // La animación se enciende recién en el primer cuadro dibujado: si el navegador no dibuja (pestaña oculta), el
  // plano queda en su estado final, completo.
  useEffect(() => {
    const cuadro = requestAnimationFrame(() => plano.current?.classList.add('animar'))
    return () => cancelAnimationFrame(cuadro)
  }, [])

  return (
    <svg
      ref={plano}
      viewBox={`0 0 ${ANCHO} ${ALTO}`}
      width="100%"
      role="img"
      aria-labelledby="plano-titulo plano-descripcion"
      style={{ display: 'block', height: 'auto' }}
    >
      <title id="plano-titulo">Plano de demostración de Santa Cruz de la Sierra por anillos</title>
      <desc id="plano-descripcion">
        Una alerta llega entre el 3er anillo y una radial. La unidad disponible más cercana, la 03, toma el pedido y
        traza su ruta: llega en unos 4 minutos. Otra unidad está en atención y una más está lejos. Datos de
        demostración.
      </desc>

      <rect x="0" y="0" width={ANCHO} height={ALTO} rx="6" fill="var(--plano)" />

      {/* Calles: radiales y anillos de la ciudad. */}
      <g stroke="var(--planoCalle)" strokeLinecap="round" fill="none">
        {RADIALES.map((grados) => {
          const fin = polar(260, grados)
          return <line key={grados} x1={CENTRO.x} y1={CENTRO.y} x2={fin.x} y2={fin.y} strokeWidth="5" />
        })}
        {ANILLOS.map(({ radio }) => (
          <circle key={radio} cx={CENTRO.x} cy={CENTRO.y} r={radio} strokeWidth="9" />
        ))}
      </g>
      <g stroke="var(--planoTrazo)" fill="none">
        {ANILLOS.map(({ radio }) => (
          <circle key={radio} cx={CENTRO.x} cy={CENTRO.y} r={radio} strokeWidth="1" strokeDasharray="2 5" />
        ))}
      </g>

      {/* Nombres de los anillos en placas, como los letreros de calle, sobre la diagonal de abajo a la izquierda.
          El 1er anillo queda sin nombre: al centro no hay lugar y los de afuera ya ubican la escala. */}
      <g fontFamily={SENAL} fontSize="16" fontWeight="700">
        {ANILLOS.filter(({ radio }) => radio > 46).map(({ radio, nombre }) => {
          const punto = polar(radio, 135)
          return (
            <g key={nombre}>
              <rect x={punto.x - 42} y={punto.y - 13} width="84" height="26" rx="3" fill="var(--placa)" stroke="var(--planoTrazo)" />
              <text x={punto.x} y={punto.y + 5.5} textAnchor="middle" fill="var(--texto)">
                {nombre}
              </text>
            </g>
          )
        })}
      </g>

      {/* Ruta de la unidad que toma el pedido. */}
      <path
        className="plano-ruta"
        d={RUTA}
        fill="none"
        stroke="var(--disponibleFuerte)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ '--largo-ruta': `${Math.ceil(LARGO_RUTA)}` } as CSSProperties}
      />

      {/* Unidades: verde disponible, ámbar en atención. */}
      <Unidad punto={UNIDAD_EN_ATENCION} color="var(--enAtencionFuerte)" numero="07" />
      <Unidad punto={UNIDAD_LEJANA} color="var(--disponibleFuerte)" numero="11" />
      <Unidad punto={UNIDAD_DISPONIBLE} color="var(--disponibleFuerte)" numero="03" />

      {/* La alerta: onda y pin. */}
      <circle className="plano-onda" cx={ALERTA.x} cy={ALERTA.y} r="18" fill="var(--linea)" />
      <g className="plano-alerta">
        <path
          transform={`translate(${ALERTA.x - 17} ${ALERTA.y - 42}) scale(1)`}
          d="M17 0C7.6 0 0 7.3 0 16.4 0 27.7 13.4 38.9 17 42c3.6-3.1 17-14.3 17-25.6C34 7.3 26.4 0 17 0Z"
          fill="var(--linea)"
          stroke="var(--placa)"
          strokeWidth="2"
        />
        <circle cx={ALERTA.x} cy={ALERTA.y - 26} r="8" fill="#FFFFFF" />
        <path
          d={`M${ALERTA.x} ${ALERTA.y - 30.5}v9M${ALERTA.x - 4.5} ${ALERTA.y - 26}h9`}
          stroke="var(--linea)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>

      {/* Placa «Usted está aquí». */}
      <g className="plano-alerta">
        <rect x={ALERTA.x + 22} y={ALERTA.y - 50} width="150" height="40" rx="3" fill="var(--linea)" />
        <text x={ALERTA.x + 34} y={ALERTA.y - 23} fontFamily={SENAL} fontSize="21" fontWeight="700" fill="var(--lineaTexto)">
          Usted está aquí
        </text>
      </g>

      {/* Rótulo de la unidad que va. */}
      <g className="plano-rotulo">
        <rect x={ALERTA.x + 22} y={ALERTA.y - 2} width="150" height="58" rx="3" fill="var(--placa)" stroke="var(--bordePlaca)" />
        <circle cx={ALERTA.x + 38} cy={ALERTA.y + 17} r="6" fill="var(--disponibleFuerte)" />
        <text x={ALERTA.x + 52} y={ALERTA.y + 23} fontFamily={SENAL} fontSize="18" fontWeight="700" fill="var(--texto)">
          Unidad 03
        </text>
        <text x={ALERTA.x + 34} y={ALERTA.y + 44} fontFamily={DATO} fontSize="14" fontWeight="500" fill="var(--textoSecundario)">
          En camino · 4 min
        </text>
      </g>

      {/* Leyenda y aviso de demostración. */}
      <rect x="0" y={ALTO - 52} width={ANCHO} height="52" fill="var(--placa)" opacity="0.9" />
      <g fontFamily={DATO} fontSize="16" fontWeight="500" fill="var(--texto)">
        <circle cx="22" cy={ALTO - 26} r="7" fill="var(--disponibleFuerte)" />
        <text x="35" y={ALTO - 20}>Disponible</text>
        <circle cx="134" cy={ALTO - 26} r="7" fill="var(--enAtencionFuerte)" />
        <text x="147" y={ALTO - 20}>En atención</text>
        <circle cx="258" cy={ALTO - 26} r="7" fill="var(--linea)" />
        <text x="271" y={ALTO - 20}>Pedido de ayuda</text>
        <text x={ANCHO - 14} y={ALTO - 20} textAnchor="end" fill="var(--textoSecundario)">
          Demostración
        </text>
      </g>
    </svg>
  )
}

type PropsUnidad = {
  punto: { x: number; y: number }
  color: string
  numero: string
}

function Unidad({ punto, color, numero }: PropsUnidad) {
  return (
    <g>
      <rect x={punto.x - 15} y={punto.y - 12} width="30" height="24" rx="4" fill={color} stroke="var(--placa)" strokeWidth="2" />
      <text
        x={punto.x}
        y={punto.y + 5}
        textAnchor="middle"
        fontFamily={DATO}
        fontSize="13"
        fontWeight="600"
        fill="#FFFFFF"
      >
        {numero}
      </text>
    </g>
  )
}
