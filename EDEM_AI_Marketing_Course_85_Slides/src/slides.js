const source = (label, url) => ({ label, url });

export const slides = [
  {
    id: "cover",
    kind: "cover",
    theme: "light",
    eyebrow: "EDEM · FORMACIÓN EJECUTIVA",
    title: "IA PARA <span>LÍDERES</span><br>DEL MARKETING<br>ACTUAL.",
    subtitle: "Cómo invertir, decidir y crecer con inteligencia artificial sin comprar humo.",
    meta: ["5 HORAS", "85 SLIDES", "100% APLICABLE", "MX & LATAM"],
    notes: "Abrir sin definiciones. La clase trata sobre decisiones de negocio, no sobre prompts."
  },
  {
    id: "opening-question",
    kind: "statement",
    theme: "dark",
    eyebrow: "OPEN MIC",
    title: "¿TU ORGANIZACIÓN ESTÁ LISTA PARA LA IA…<br><span>O SOLO CREE QUE LO ESTÁ?</span>",
    subtitle: "Levanten la mano quienes ya tienen al menos un piloto de IA. Manténganla arriba si pueden demostrar impacto financiero.",
    notes: "Usar el contraste entre adopción aparente y valor probado. No juzgar respuestas todavía."
  },
  {
    id: "adoption-gap",
    kind: "metrics",
    theme: "red",
    eyebrow: "LA BRECHA 2026",
    title: "LA IA YA ENTRÓ.<br>EL VALOR TODAVÍA NO.",
    meta: ["88% USA IA", "≈1/3 ESCALA", "39% VE EBIT", "2/3 SIGUE EN PILOTOS"],
    subtitle: "Adopción no es transformación. Una licencia activa no equivale a un workflow rediseñado.",
    sources: [
      source("McKinsey — State of AI 2025", "https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-in-2025.pdf"),
      source("Stanford HAI — AI Index 2026", "https://hai.stanford.edu/ai-index/2026-ai-index-report")
    ],
    notes: "88% reporta uso regular en al menos una función; 39% reporta impacto en EBIT a nivel empresa. Diferenciar encuesta de causalidad."
  },
  {
    id: "icebreaker",
    kind: "activity",
    theme: "light",
    duration: 8,
    eyebrow: "ICE BREAKER · PAREJAS",
    title: "CUÉNTAME EL PILOTO<br>QUE NADIE QUIERE MATAR.",
    body: `
      <ol class="steps">
        <li>¿Qué problema prometía resolver?</li>
        <li>¿Quién lo patrocina y quién lo usa?</li>
        <li>¿Qué evidencia existe de que funciona?</li>
        <li>¿Por qué sigue vivo si no genera resultado?</li>
      </ol>
      <p class="activity-output">OUTPUT: una frase que explique el verdadero bloqueo.</p>`,
    notes: "Pedir dos historias. Capturar patrones: vanity, ausencia de owner, herramienta sin workflow, miedo reputacional."
  },
  {
    id: "alexis",
    kind: "profile",
    theme: "light",
    eyebrow: "¡HOLA! SOY…",
    title: "ALEXIS<br><span>SOUBRAN</span>",
    subtitle: "CEO · MINIMALIST",
    body: `
      <ul class="clean-list">
        <li>Growth, data, performance y transformación</li>
        <li>Google · Meta · TikTok · Microsoft Partners</li>
        <li>Construcción de sistemas de revenue, no demos</li>
        <li>Obsesión: traducir tecnología en decisiones</li>
      </ul>`,
    image: "/assets/alexis-soubran.png",
    notes: "Presentación breve. Conectar experiencia con las decisiones que enfrentan líderes, no con credenciales técnicas."
  },
  {
    id: "promise",
    kind: "statement",
    theme: "dark",
    eyebrow: "LA PROMESA",
    title: "NO VAS A SALIR SABIENDO MÁS DE IA.<br><span>VAS A SALIR DECIDIENDO MEJOR.</span>",
    subtitle: "Diagnosticar · priorizar · evaluar · anticipar · personalizar · ejecutar.",
    notes: "Marcar que el curso no compite con tutoriales. El deliverable es criterio ejecutivo."
  },
  {
    id: "journey",
    kind: "journey",
    theme: "light",
    eyebrow: "EL VIAJE DE HOY",
    title: "DE LA ANSIEDAD<br>A UN PORTAFOLIO FINANCIABLE.",
    body: `
      <div class="journey-line">
        <div><b>01</b><span>READINESS</span></div>
        <div><b>02</b><span>CAPITAL</span></div>
        <div><b>03</b><span>VENDORS</span></div>
        <div><b>04</b><span>PREDICCIÓN</span></div>
        <div><b>05</b><span>INTELLIGENCE</span></div>
        <div><b>06</b><span>TRUST</span></div>
        <div><b>07</b><span>STACK</span></div>
      </div>`,
    notes: "La progresión es deliberada: primero capacidad, después inversión, después aplicaciones."
  },
  {
    id: "objectives",
    kind: "cards",
    theme: "light",
    eyebrow: "LOS OBJETIVOS DE HOY",
    title: "TRES CAMBIOS DE COMPORTAMIENTO.",
    body: `
      <div class="numbered-cards">
        <article><b>01</b><h3>DETECTAR</h3><p>Separar capacidad real de adopción cosmética.</p></article>
        <article><b>02</b><h3>DECIDIR</h3><p>Asignar capital con impacto, payback y riesgo.</p></article>
        <article><b>03</b><h3>DEMOSTRAR</h3><p>Diseñar experimentos que conecten IA con dinero.</p></article>
      </div>`,
    notes: "Revisar al final si se cumplieron."
  },
  {
    id: "rules",
    kind: "cards",
    theme: "dark",
    eyebrow: "CÓMO VAMOS A TRABAJAR",
    title: "MENOS ESPECTADORES.<br>MÁS COMITÉ DE INVERSIÓN.",
    body: `
      <div class="rule-grid">
        <div><b>01</b><p>Trae un problema real.</p></div>
        <div><b>02</b><p>Cuestiona el dato.</p></div>
        <div><b>03</b><p>Habla de dinero.</p></div>
        <div><b>04</b><p>Define un owner.</p></div>
        <div><b>05</b><p>Mata ideas débiles.</p></div>
        <div><b>06</b><p>Protege la confianza.</p></div>
      </div>`,
    notes: "Permiso explícito para cuestionar y descartar iniciativas."
  },
  {
    id: "readiness-section",
    kind: "section",
    theme: "red",
    eyebrow: "BLOQUE 01 · 30 MIN",
    title: "¿ESTÁS LISTO<br>PARA LA IA?",
    subtitle: "Antes de elegir una herramienta, audita el sistema que tendrá que absorberla.",
    notes: "Transición al primer bloque."
  },
  {
    id: "readiness-tension",
    kind: "statement",
    theme: "light",
    eyebrow: "LA HISTORIA CLÍNICA",
    title: "LA EMPRESA PIDE<br>UN AGENTE AUTÓNOMO.",
    subtitle: "Pero sus datos viven en hojas distintas, Legal llega al final y nadie puede definir qué decisión debe tomar el agente.",
    notes: "Preguntar: ¿el problema es tecnológico? Respuesta: normalmente es arquitectura organizacional."
  },
  {
    id: "tool-myth",
    kind: "split",
    theme: "dark",
    eyebrow: "EL GRAN MITO",
    title: "COMPRAR IA<br>NO CREA CAPACIDAD.",
    body: `
      <div class="versus">
        <article><span>COMPRAR</span><h3>TOOL</h3><p>Licencia, acceso, demo, capacitación.</p></article>
        <strong>≠</strong>
        <article><span>CONSTRUIR</span><h3>SISTEMA</h3><p>Datos, workflow, owner, control y medición.</p></article>
      </div>`,
    notes: "La herramienta es el componente más visible y con frecuencia el menos escaso."
  },
  {
    id: "readiness-definition",
    kind: "definition",
    theme: "light",
    eyebrow: "DEFINICIÓN EJECUTIVA",
    title: "AI READINESS ES LA CAPACIDAD DE<br><span>CONVERTIR MODELOS EN RESULTADOS REPETIBLES.</span>",
    body: `
      <div class="formula">DATOS × WORKFLOW × ADOPCIÓN × CONTROL</div>
      <p>Si uno de los factores se aproxima a cero, el resultado también.</p>`,
    sources: [source("NIST AI Risk Management Framework", "https://www.nist.gov/itl/ai-risk-management-framework")],
    notes: "Framework propio, alineado con la lógica de gobernar, mapear, medir y gestionar de NIST."
  },
  {
    id: "readiness-stack",
    kind: "framework",
    theme: "dark",
    eyebrow: "EL AI READINESS STACK",
    title: "CINCO CAPAS.<br>UN SOLO CUELLO DE BOTELLA.",
    body: `
      <div class="stack">
        <div><b>05</b><span>GOBERNANZA</span></div>
        <div><b>04</b><span>PERSONAS</span></div>
        <div><b>03</b><span>PROCESOS</span></div>
        <div><b>02</b><span>DATOS</span></div>
        <div><b>01</b><span>TESIS DE NEGOCIO</span></div>
      </div>`,
    notes: "Leer de abajo hacia arriba. La tesis evita automatizar problemas irrelevantes."
  },
  {
    id: "five-dimensions",
    kind: "cards",
    theme: "light",
    eyebrow: "QUÉ EVALUAR",
    title: "LA ORGANIZACIÓN NO ES UN PROMEDIO.",
    body: `
      <div class="dimension-grid">
        <article><b>R</b><h3>REVENUE</h3><p>Problema, valor y métrica.</p></article>
        <article><b>D</b><h3>DATA</h3><p>Acceso, calidad y permisos.</p></article>
        <article><b>W</b><h3>WORKFLOW</h3><p>Decisión y proceso afectado.</p></article>
        <article><b>A</b><h3>ADOPTION</h3><p>Owner, incentivos y uso.</p></article>
        <article><b>G</b><h3>GOVERNANCE</h3><p>Riesgo, control y auditoría.</p></article>
      </div>`,
    notes: "Un score alto en herramientas no compensa datos inaccesibles o ausencia de proceso."
  },
  {
    id: "maturity-ladder",
    kind: "framework",
    theme: "light",
    eyebrow: "MADUREZ",
    title: "NO TODAS LAS EMPRESAS<br>DEBEN BUSCAR AUTONOMÍA.",
    body: `
      <div class="ladder">
        <article><b>1</b><h3>ASISTIR</h3><p>Humano decide.</p></article>
        <article><b>2</b><h3>ACELERAR</h3><p>IA propone.</p></article>
        <article><b>3</b><h3>AUTOMATIZAR</h3><p>IA ejecuta reglas.</p></article>
        <article><b>4</b><h3>ORQUESTAR</h3><p>IA coordina sistemas.</p></article>
        <article><b>5</b><h3>DELEGAR</h3><p>IA decide con límites.</p></article>
      </div>`,
    notes: "La ambición correcta depende del riesgo y la reversibilidad de la decisión."
  },
  {
    id: "readiness-instructions",
    kind: "activity",
    theme: "dark",
    duration: 4,
    eyebrow: "ACTIVIDAD INDIVIDUAL",
    title: "AUDITA TU READINESS.<br>SIN AUTOENGAÑO.",
    body: `
      <ol class="steps">
        <li>Piensa en un caso de uso concreto.</li>
        <li>Califica cada dimensión del 1 al 5.</li>
        <li>No califiques la empresa: califica el caso.</li>
        <li>Anota el factor que podría matar el piloto.</li>
      </ol>`,
    notes: "Preparar el calculador de la siguiente slide."
  },
  {
    id: "readiness-calculator",
    kind: "interactive",
    theme: "light",
    eyebrow: "AI READINESS SCORE",
    title: "¿QUÉ TAN FINANCIABLE ES TU CASO?",
    body: `
      <form class="score-form" data-calculator="readiness">
        <label>Revenue thesis <input type="range" min="1" max="5" value="3" name="revenue"><output>3</output></label>
        <label>Data disponible <input type="range" min="1" max="5" value="3" name="data"><output>3</output></label>
        <label>Workflow definido <input type="range" min="1" max="5" value="3" name="workflow"><output>3</output></label>
        <label>Adopción y owner <input type="range" min="1" max="5" value="3" name="adoption"><output>3</output></label>
        <label>Gobernanza y control <input type="range" min="1" max="5" value="3" name="governance"><output>3</output></label>
        <div class="score-result"><strong data-score>60</strong><span data-verdict>LISTO PARA PILOTO CONTROLADO</span></div>
      </form>`,
    notes: "Pedir que compartan el factor más bajo, no el score total."
  },
  {
    id: "readiness-interpretation",
    kind: "cards",
    theme: "light",
    eyebrow: "INTERPRETACIÓN",
    title: "EL PROMEDIO ESCONDE<br>EL RIESGO DE COLAPSO.",
    body: `
      <div class="thresholds">
        <article><b>0–39</b><h3>NO FINANCIAR</h3><p>Primero corrige fundamentos.</p></article>
        <article><b>40–59</b><h3>EXPERIMENTO</h3><p>Scope estrecho y reversible.</p></article>
        <article><b>60–79</b><h3>PILOTO</h3><p>Owner y baseline definidos.</p></article>
        <article><b>80–100</b><h3>ESCALAR</h3><p>Con gates de riesgo.</p></article>
      </div>`,
    notes: "Aplicar una regla adicional: ninguna dimensión crítica menor a 3."
  },
  {
    id: "pilot-purgatory",
    kind: "statement",
    theme: "red",
    eyebrow: "EL PURGATORIO DEL PILOTO",
    title: "DEMASIADO PROMETEDOR<br>PARA MATARLO.<br>DEMASIADO DÉBIL<br>PARA ESCALARLO.",
    subtitle: "La ausencia de criterios de salida convierte experimentos en costos fijos.",
    notes: "Provocar reconocimiento. Preguntar cuántos pilotos llevan más de seis meses."
  },
  {
    id: "failure-patterns",
    kind: "cards",
    theme: "dark",
    eyebrow: "PATRONES DE FALLA",
    title: "LA TECNOLOGÍA RARA VEZ<br>ES EL PRIMER DOMINÓ.",
    body: `
      <div class="rule-grid">
        <div><b>01</b><p>Problema sin valor financiero.</p></div>
        <div><b>02</b><p>Data sin permisos.</p></div>
        <div><b>03</b><p>Output sin decisión.</p></div>
        <div><b>04</b><p>Proceso sin owner.</p></div>
        <div><b>05</b><p>Riesgo sin responsable.</p></div>
        <div><b>06</b><p>Piloto sin kill criteria.</p></div>
      </div>`,
    notes: "Pedir un ejemplo por mesa."
  },
  {
    id: "readiness-decision",
    kind: "split",
    theme: "light",
    eyebrow: "LA DECISIÓN CORRECTA",
    title: "NO ES SÍ O NO.<br>ES QUÉ DEBEMOS CONSTRUIR ANTES.",
    body: `
      <div class="decision-tree">
        <article><span>SI FALLA DATA</span><h3>INSTRUMENTA</h3></article>
        <article><span>SI FALLA WORKFLOW</span><h3>REDISEÑA</h3></article>
        <article><span>SI FALLA ADOPCIÓN</span><h3>REALINEA INCENTIVOS</h3></article>
        <article><span>SI FALLA CONTROL</span><h3>REDUCE AUTONOMÍA</h3></article>
      </div>`,
    notes: "Convertir diagnóstico en secuencia de inversión."
  },
  {
    id: "readiness-takeaway",
    kind: "takeaway",
    theme: "light",
    eyebrow: "KEY TAKEAWAY 01",
    title: "LA IA NO ESCALA<br>DONDE EL NEGOCIO<br>NO ESTÁ DISEÑADO PARA APRENDER.",
    subtitle: "Readiness no mide entusiasmo. Mide la capacidad de repetir, controlar y mejorar.",
    notes: "Cierre del bloque."
  },
  {
    id: "investment-section",
    kind: "section",
    theme: "dark",
    eyebrow: "BLOQUE 02 · 40 MIN",
    title: "DÓNDE INVERTIR<br><span>PRIMERO.</span>",
    subtitle: "Separar iniciativas que producen resultado de iniciativas que producen ruido.",
    notes: "Cambiar lenguaje de innovación por Capital Allocation."
  },
  {
    id: "use-case-cemetery",
    kind: "statement",
    theme: "light",
    eyebrow: "EL CEMENTERIO DE USE CASES",
    title: "UNA LISTA DE 50 IDEAS<br>NO ES UNA ESTRATEGIA.",
    subtitle: "Es una forma sofisticada de evitar elegir.",
    notes: "Preguntar quién tiene un backlog de IA y cuántos casos tienen P&L owner."
  },
  {
    id: "capital-allocation",
    kind: "definition",
    theme: "red",
    eyebrow: "CAMBIO DE MENTALIDAD",
    title: "EL PRESUPUESTO DE IA<br>ES <span>CAPITAL DE INVERSIÓN.</span>",
    body: `
      <div class="formula">RETORNO ESPERADO × CONFIANZA ÷ CAPITAL EN RIESGO</div>
      <p>Cada peso invertido compite contra otra mejora posible del negocio.</p>`,
    notes: "Introducir costo de oportunidad."
  },
  {
    id: "value-formula",
    kind: "framework",
    theme: "light",
    eyebrow: "EL AI VALUE SCORE",
    title: "PRIORIZA VALOR.<br>NO NOVEDAD.",
    body: `
      <div class="big-equation">
        <span>(IMPACTO × VELOCIDAD × CONFIANZA)</span>
        <hr>
        <span>ESFUERZO × RIESGO</span>
      </div>`,
    notes: "No vender falsa precisión. El score fuerza comparabilidad y conversación."
  },
  {
    id: "impact-feasibility",
    kind: "matrix",
    theme: "dark",
    eyebrow: "MAPA DE CAPITAL",
    title: "IMPACTO × VIABILIDAD.",
    body: `
      <div class="matrix-grid">
        <div class="q q1"><b>APUESTAS</b><span>Aprender antes de escalar</span></div>
        <div class="q q2"><b>ESCALAR</b><span>Financiar con gates</span></div>
        <div class="q q3"><b>MATAR</b><span>Costo de distracción</span></div>
        <div class="q q4"><b>QUICK WINS</b><span>Automatizar y liberar tiempo</span></div>
        <span class="axis-x">VIABILIDAD →</span><span class="axis-y">IMPACTO →</span>
      </div>`,
    notes: "Quick win no significa estratégico. Su valor puede ser financiar aprendizaje."
  },
  {
    id: "financial-lens",
    kind: "cards",
    theme: "light",
    eyebrow: "FILTRO DEL INVERSIONISTA",
    title: "CUATRO PREGUNTAS<br>ANTES DE SOLTAR CAPITAL.",
    body: `
      <div class="numbered-cards">
        <article><b>01</b><h3>UPSIDE</h3><p>¿Qué ingreso o costo puede mover?</p></article>
        <article><b>02</b><h3>PAYBACK</h3><p>¿Cuándo vuelve el cash?</p></article>
        <article><b>03</b><h3>DOWNSIDE</h3><p>¿Qué perdemos si falla?</p></article>
        <article><b>04</b><h3>OPTION VALUE</h3><p>¿Qué capacidad desbloquea?</p></article>
      </div>`,
    notes: "Conectar con runway y reversibilidad."
  },
  {
    id: "cost-stack",
    kind: "framework",
    theme: "light",
    eyebrow: "EL COSTO REAL",
    title: "LA LICENCIA ES SOLO<br>LA PUNTA DEL TCO.",
    body: `
      <div class="cost-stack">
        <div><b>TOOL</b><span>licencias y consumo</span></div>
        <div><b>INTEGRATION</b><span>APIs, data, seguridad</span></div>
        <div><b>CHANGE</b><span>proceso, training, adopción</span></div>
        <div><b>CONTROL</b><span>evals, revisión, auditoría</span></div>
        <div><b>FAILURE</b><span>errores, rework, reputación</span></div>
      </div>`,
    notes: "TCO = Total Cost of Ownership. Añadir costo de oportunidad del equipo."
  },
  {
    id: "payback",
    kind: "definition",
    theme: "dark",
    eyebrow: "PAYBACK PERIOD",
    title: "EL LTV TEÓRICO<br>NO PAGA LA NÓMINA.",
    body: `
      <div class="formula">INVERSIÓN INICIAL ÷ BENEFICIO MENSUAL INCREMENTAL</div>
      <p>Si el payback supera el runway o el ciclo presupuestal, el caso no está listo para escalar.</p>`,
    notes: "Usar ejemplo simple: 600k inversión / 100k beneficio = 6 meses."
  },
  {
    id: "risk-adjusted",
    kind: "cards",
    theme: "light",
    eyebrow: "RISK-ADJUSTED RETURN",
    title: "NO TODO IMPACTO<br>VALE EL MISMO RIESGO.",
    body: `
      <div class="risk-grid">
        <article><h3>REVERSIBLE</h3><p>Copy interno, resumen, ideación.</p><b>FAST TRACK</b></article>
        <article><h3>OBSERVABLE</h3><p>Recomendación con humano.</p><b>PILOTO</b></article>
        <article><h3>SENSIBLE</h3><p>Pricing, crédito, salud, empleo.</p><b>CONTROL</b></article>
        <article><h3>IRREVERSIBLE</h3><p>Acciones con daño difícil de reparar.</p><b>NO AUTONOMÍA</b></article>
      </div>`,
    notes: "A mayor daño potencial, mayor supervisión y evidencia requerida."
  },
  {
    id: "three-horizons",
    kind: "framework",
    theme: "red",
    eyebrow: "PORTAFOLIO 70 / 20 / 10",
    title: "EFICIENCIA FINANCIA<br>TRANSFORMACIÓN.",
    body: `
      <div class="horizons">
        <article><b>70%</b><h3>MEJORAR</h3><p>Procesos actuales.</p></article>
        <article><b>20%</b><h3>REDISEÑAR</h3><p>Workflows completos.</p></article>
        <article><b>10%</b><h3>EXPLORAR</h3><p>Nuevos modelos.</p></article>
      </div>`,
    notes: "Es una regla inicial, no dogma. Ajustar según madurez y runway."
  },
  {
    id: "use-case-examples",
    kind: "cards",
    theme: "light",
    eyebrow: "DE LO GENÉRICO A LO FINANCIABLE",
    title: "CAMBIA EL NOMBRE.<br>CAMBIA LA DECISIÓN.",
    body: `
      <div class="before-after">
        <article><span>NO</span><p>“Usar IA para contenidos.”</p><b>SIN BASELINE</b></article>
        <article><span>SÍ</span><p>“Reducir 35% el tiempo de adaptación de 120 assets mensuales sin elevar retrabajo.”</p><b>MEDIBLE</b></article>
        <article><span>NO</span><p>“Chatbot inteligente.”</p><b>SIN JOB</b></article>
        <article><span>SÍ</span><p>“Resolver consultas de estatus con 80% containment y CSAT estable.”</p><b>DECIDIBLE</b></article>
      </div>`,
    notes: "Los targets son ejemplos de diseño, no benchmarks universales."
  },
  {
    id: "prioritization-instructions",
    kind: "activity",
    theme: "dark",
    duration: 10,
    eyebrow: "ACTIVIDAD GRUPAL",
    title: "COMITÉ DE INVERSIÓN:<br>¿QUÉ FINANCIAMOS?",
    body: `
      <ol class="steps">
        <li>Elijan un caso de uso real.</li>
        <li>Definan impacto, viabilidad, confianza, esfuerzo y riesgo.</li>
        <li>Calculen el AI Value Score.</li>
        <li>Decidan: escalar, pilotear, rediseñar o matar.</li>
      </ol>
      <p class="activity-output">OUTPUT: tesis de inversión en 30 palabras.</p>`,
    notes: "Formar grupos de 3–4. Insistir en un caso concreto y una métrica."
  },
  {
    id: "prioritization-calculator",
    kind: "interactive",
    theme: "light",
    eyebrow: "AI VALUE CALCULATOR",
    title: "PRESIONA LA IDEA<br>ANTES DE PRESIONAR BUY.",
    body: `
      <form class="score-form compact" data-calculator="value">
        <label>Impacto <input type="range" min="1" max="5" value="3" name="impact"><output>3</output></label>
        <label>Velocidad <input type="range" min="1" max="5" value="3" name="speed"><output>3</output></label>
        <label>Confianza <input type="range" min="1" max="5" value="3" name="confidence"><output>3</output></label>
        <label>Esfuerzo <input type="range" min="1" max="5" value="3" name="effort"><output>3</output></label>
        <label>Riesgo <input type="range" min="1" max="5" value="3" name="risk"><output>3</output></label>
        <div class="score-result"><strong data-score>3.0</strong><span data-verdict>REDISEÑAR ANTES DE FINANCIAR</span></div>
      </form>`,
    notes: "Fórmula normalizada. El valor pedagógico está en la discusión de inputs."
  },
  {
    id: "investment-debrief",
    kind: "share",
    theme: "red",
    duration: 6,
    eyebrow: "COMPARTIR",
    title: "VENDE TU TESIS.<br>NO TU ENTUSIASMO.",
    subtitle: "60 segundos por equipo: problema, impacto, payback, riesgo y decisión.",
    notes: "Elegir dos equipos. El grupo actúa como IC y hace una pregunta adversarial."
  },
  {
    id: "kill-criteria",
    kind: "cards",
    theme: "light",
    eyebrow: "KILL CRITERIA",
    title: "UN BUEN EXPERIMENTO<br>SABE CÓMO MORIR.",
    body: `
      <div class="numbered-cards">
        <article><b>01</b><h3>PERFORMANCE</h3><p>No supera baseline.</p></article>
        <article><b>02</b><h3>ECONOMICS</h3><p>Payback inviable.</p></article>
        <article><b>03</b><h3>ADOPTION</h3><p>El workflow lo rechaza.</p></article>
        <article><b>04</b><h3>RISK</h3><p>El control cuesta más que el valor.</p></article>
      </div>`,
    notes: "Definir criterios antes del piloto para evitar sesgo de compromiso."
  },
  {
    id: "workflow-case",
    kind: "case",
    theme: "dark",
    eyebrow: "CASO · EL PATRÓN DE LOS HIGH PERFORMERS",
    title: "NO AÑADEN IA AL PROCESO.<br><span>REDISEÑAN EL PROCESO.</span>",
    body: `
      <div class="case-flow">
        <span>BRIEF</span><i>→</i><span>INSIGHTS</span><i>→</i><span>CREATIVE</span><i>→</i><span>QA</span><i>→</i><span>LEARNING</span>
      </div>
      <p>El valor aparece cuando feedback, decisiones y ejecución se conectan; no cuando cada área compra su propio copiloto.</p>`,
    sources: [source("McKinsey — State of AI 2025", "https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-in-2025.pdf")],
    notes: "McKinsey identifica rediseño de workflows como factor diferenciador en high performers."
  },
  {
    id: "investment-takeaway",
    kind: "takeaway",
    theme: "light",
    eyebrow: "KEY TAKEAWAY 02",
    title: "FINANCIA LA DECISIÓN<br>QUE CAMBIA.<br>NO LA DEMO QUE IMPRESIONA.",
    subtitle: "El mejor caso combina valor material, aprendizaje rápido y downside controlado.",
    notes: "Cierre de Capital Allocation."
  },
  {
    id: "vendor-section",
    kind: "section",
    theme: "red",
    eyebrow: "BLOQUE 03 · 30 MIN",
    title: "CÓMO NO<br>COMPRAR HUMO.",
    subtitle: "Evaluar herramientas y proveedores sin depender del equipo técnico.",
    notes: "El líder no necesita programar; necesita hacer preguntas que produzcan evidencia."
  },
  {
    id: "demo-theater",
    kind: "statement",
    theme: "dark",
    eyebrow: "DEMO THEATER",
    title: "LA DEMO ESTÁ DISEÑADA<br>PARA EL MEJOR DÍA.<br><span>TÚ COMPRAS TODOS LOS DÍAS.</span>",
    subtitle: "La pregunta no es “¿qué puede hacer?”. Es “¿qué tan consistentemente lo hace en nuestro contexto?”.",
    notes: "Diferenciar capability demo de reliability evidence."
  },
  {
    id: "prueba",
    kind: "framework",
    theme: "light",
    eyebrow: "EL FRAMEWORK P.R.U.E.B.A.",
    title: "SEIS FILTROS PARA<br>NO DEPENDER DE LA JERGA.",
    body: `
      <div class="acronym">
        <div><b>P</b><span>PROBLEM FIT</span></div>
        <div><b>R</b><span>RESULT EVIDENCE</span></div>
        <div><b>U</b><span>USABILITY</span></div>
        <div><b>E</b><span>ECONOMICS</span></div>
        <div><b>B</b><span>BOUNDARIES</span></div>
        <div><b>A</b><span>ARCHITECTURE</span></div>
      </div>`,
    notes: "Framework propietario para conversar con vendors."
  },
  {
    id: "six-vendor-criteria",
    kind: "cards",
    theme: "light",
    eyebrow: "DUE DILIGENCE",
    title: "LA RESPUESTA DEBE TRAER<br>EVIDENCIA, NO ADJETIVOS.",
    body: `
      <div class="rule-grid">
        <div><b>P</b><p>¿Qué job específico mejora?</p></div>
        <div><b>R</b><p>¿Contra qué baseline ganó?</p></div>
        <div><b>U</b><p>¿Quién cambia su workflow?</p></div>
        <div><b>E</b><p>¿Cuál es el TCO a 12 meses?</p></div>
        <div><b>B</b><p>¿Dónde falla y quién responde?</p></div>
        <div><b>A</b><p>¿Cómo entra y cómo salgo?</p></div>
      </div>`,
    notes: "Si el vendor no puede explicar límites, no conoce el sistema o no quiere vender la verdad."
  },
  {
    id: "tech-concepts",
    kind: "split",
    theme: "dark",
    eyebrow: "TRADUCTOR PARA LÍDERES",
    title: "NO TODO LO QUE HABLA<br>ES UN AGENTE.",
    body: `
      <div class="concept-grid">
        <article><h3>COPILOT</h3><p>Propone. El humano ejecuta.</p></article>
        <article><h3>RAG</h3><p>Responde usando conocimiento recuperado.</p></article>
        <article><h3>AUTOMATION</h3><p>Ejecuta reglas predefinidas.</p></article>
        <article><h3>AGENT</h3><p>Planea y usa herramientas dentro de límites.</p></article>
      </div>`,
    notes: "El nombre importa menos que la autonomía, permisos y reversibilidad."
  },
  {
    id: "evals",
    kind: "definition",
    theme: "light",
    eyebrow: "LA PALABRA QUE DEBES EXIGIR",
    title: "EVALS:<br><span>PRUEBAS REPETIBLES DEL COMPORTAMIENTO.</span>",
    body: `
      <div class="formula">DATA REAL + CRITERIO + MUESTRA + UMBRAL + MONITOREO</div>
      <p>Sin evals, “funciona bien” significa que alguien vio tres respuestas bonitas.</p>`,
    notes: "Pedir evidencia por segmento, idioma, edge cases y condiciones de fallo."
  },
  {
    id: "vendor-red-flags",
    kind: "cards",
    theme: "red",
    eyebrow: "RED FLAGS",
    title: "SI ESCUCHAS ESTO,<br>BAJA LA VALUACIÓN.",
    body: `
      <div class="red-flags">
        <p>“100% PRECISO”</p><p>“IMPLEMENTACIÓN INSTANTÁNEA”</p>
        <p>“NO NECESITA DATA”</p><p>“TOTALMENTE AUTÓNOMO”</p>
        <p>“ROI GARANTIZADO”</p><p>“MODELO PROPIETARIO”</p>
      </div>`,
    notes: "Cada claim debe convertirse en definición, benchmark, muestra y condición."
  },
  {
    id: "vendor-tco",
    kind: "framework",
    theme: "dark",
    eyebrow: "ECONOMICS",
    title: "EL PRECIO POR USUARIO<br>ES UNA DISTRACCIÓN.",
    body: `
      <div class="big-equation">
        <span>LICENCIA + CONSUMO + INTEGRACIÓN + CAMBIO + CONTROL + SALIDA</span>
        <hr>
        <span>VOLUMEN ÚTIL PRODUCIDO</span>
      </div>`,
    notes: "Calcular costo por outcome útil, no por asiento."
  },
  {
    id: "vendor-calculator",
    kind: "interactive",
    theme: "light",
    eyebrow: "VENDOR SCORECARD",
    title: "¿COMPRAR, PILOTEAR<br>O RECHAZAR?",
    body: `
      <form class="score-form compact" data-calculator="vendor">
        <label>Problem fit <input type="range" min="1" max="5" value="3" name="problem"><output>3</output></label>
        <label>Evidence <input type="range" min="1" max="5" value="3" name="evidence"><output>3</output></label>
        <label>Usability <input type="range" min="1" max="5" value="3" name="usability"><output>3</output></label>
        <label>Economics <input type="range" min="1" max="5" value="3" name="economics"><output>3</output></label>
        <label>Boundaries <input type="range" min="1" max="5" value="3" name="boundaries"><output>3</output></label>
        <label>Architecture <input type="range" min="1" max="5" value="3" name="architecture"><output>3</output></label>
        <div class="score-result"><strong data-score>60</strong><span data-verdict>PILOTO CONDICIONADO</span></div>
      </form>`,
    notes: "Evidence y boundaries tienen peso mayor. Un vendor que oculta fallas no debe pasar."
  },
  {
    id: "procurement-roleplay",
    kind: "activity",
    theme: "dark",
    duration: 10,
    eyebrow: "ROLE PLAY",
    title: "VENDEDOR VS.<br>COMITÉ DE INVERSIÓN.",
    body: `
      <ol class="steps">
        <li>Una persona vende un “agente de marketing autónomo”.</li>
        <li>El comité solo puede usar preguntas P.R.U.E.B.A.</li>
        <li>El vendor debe admitir al menos dos límites.</li>
        <li>Decidan: comprar, pilotear o rechazar.</li>
      </ol>`,
    notes: "Entregar al vendor el permiso de improvisar. Evaluar calidad de preguntas del comité."
  },
  {
    id: "vendor-debrief",
    kind: "share",
    theme: "light",
    duration: 5,
    eyebrow: "DEBRIEF",
    title: "¿QUÉ PREGUNTA<br>ROMPIÓ LA DEMO?",
    subtitle: "La mejor pregunta suele revelar datos, límites, economía o dependencia.",
    notes: "Capturar las tres preguntas más fuertes del grupo."
  },
  {
    id: "first-half-synthesis",
    kind: "takeaway",
    theme: "red",
    eyebrow: "PRIMERA MITAD",
    title: "READINESS DEFINE<br>QUÉ PUEDES HACER.<br>CAPITAL DEFINE QUÉ DEBES HACER.<br>DUE DILIGENCE DEFINE CON QUIÉN.",
    notes: "Recapitular antes del descanso."
  },
  {
    id: "break",
    kind: "break",
    theme: "dark",
    duration: 20,
    title: "INTERMEDIO",
    subtitle: "20 MINUTOS · VOLVEMOS CON TU AUDIENCIA DEL FUTURO.",
    notes: "Iniciar timer. La cuenta permanece aunque se cambie de slide."
  },
  {
    id: "predictive-section",
    kind: "section",
    theme: "red",
    eyebrow: "BLOQUE 04 · 35 MIN",
    title: "TU AUDIENCIA<br>CAMBIÓ MIENTRAS<br>DORMÍAS.",
    subtitle: "Segmentación predictiva para líderes que deciden en tiempo real.",
    notes: "Reactivar energía con una decisión inmediata."
  },
  {
    id: "audience-changed",
    kind: "statement",
    theme: "dark",
    eyebrow: "EL PROBLEMA",
    title: "TU SEGMENTO DICE<br>QUIÉN ERA.<br><span>LA SEÑAL DICE QUÉ HARÁ.</span>",
    subtitle: "Edad, ciudad y NSE describen. Frecuencia, secuencia y contexto anticipan.",
    notes: "No declarar muerto lo demográfico; ubicarlo como contexto, no intención."
  },
  {
    id: "traits-vs-signals",
    kind: "split",
    theme: "light",
    eyebrow: "EL ESPEJO VS. EL RADAR",
    title: "ATRIBUTOS ESTÁTICOS.<br>SEÑALES DINÁMICAS.",
    body: `
      <div class="versus">
        <article><span>TRAITS</span><h3>QUIÉN ES</h3><p>Industria, edad, plan, ubicación.</p></article>
        <strong>+</strong>
        <article><span>SIGNALS</span><h3>QUÉ CAMBIÓ</h3><p>Búsqueda, recencia, secuencia, fricción.</p></article>
      </div>`,
    notes: "Predicción combina ambos. Señal sin contexto produce falsos positivos."
  },
  {
    id: "predictive-definition",
    kind: "definition",
    theme: "light",
    eyebrow: "DEFINICIÓN",
    title: "SEGMENTACIÓN PREDICTIVA<br>AGRUPA POR <span>PROBABILIDAD DE ACCIÓN.</span>",
    body: `
      <div class="formula">P(CONVERSIÓN | SEÑALES, CONTEXTO, TIEMPO)</div>
      <p>No adivina individuos. Ordena decisiones bajo incertidumbre.</p>`,
    notes: "Explicar probabilidad calibrada: un 0.7 debe cumplirse aproximadamente 7 de cada 10 veces en grupos equivalentes."
  },
  {
    id: "predictive-loop",
    kind: "framework",
    theme: "dark",
    eyebrow: "EL LOOP S⁵",
    title: "DE DATA A DECISIÓN<br>EN CINCO MOVIMIENTOS.",
    body: `
      <div class="journey-line five">
        <div><b>1</b><span>SIGNAL</span></div>
        <div><b>2</b><span>SCORE</span></div>
        <div><b>3</b><span>SEGMENT</span></div>
        <div><b>4</b><span>SERVE</span></div>
        <div><b>5</b><span>STUDY</span></div>
      </div>`,
    notes: "El quinto paso evita que el modelo se convierta en dogma."
  },
  {
    id: "propensity",
    kind: "cards",
    theme: "light",
    eyebrow: "CUATRO SCORES ÚTILES",
    title: "PREDICE LA DECISIÓN<br>QUE CAMBIA TU ACCIÓN.",
    body: `
      <div class="numbered-cards">
        <article><b>P₁</b><h3>BUY</h3><p>Propensión de compra.</p></article>
        <article><b>P₂</b><h3>CHURN</h3><p>Riesgo de abandono.</p></article>
        <article><b>P₃</b><h3>VALUE</h3><p>LTV esperado.</p></article>
        <article><b>P₄</b><h3>RESPONSE</h3><p>Lift por intervención.</p></article>
      </div>`,
    notes: "El mejor score no es el más preciso; es el que cambia una acción rentable."
  },
  {
    id: "next-best-action",
    kind: "framework",
    theme: "red",
    eyebrow: "NEXT-BEST-ACTION",
    title: "NO PREGUNTES QUÉ MENSAJE ENVIAR.<br>PREGUNTA <span>QUÉ ACCIÓN MERECE ESTE MOMENTO.</span>",
    body: `
      <div class="action-row">
        <span>EDUCAR</span><span>OFERTAR</span><span>ESPERAR</span><span>ASISTIR</span><span>NO CONTACTAR</span>
      </div>`,
    notes: "No contactar también es una acción optimizada."
  },
  {
    id: "retail-scenario",
    kind: "case",
    theme: "light",
    eyebrow: "CASO · RETAIL",
    title: "MISMO CARRITO.<br>TRES INTENCIONES.",
    body: `
      <div class="scenario-grid">
        <article><b>A</b><h3>ALTA INTENCIÓN</h3><p>Recencia + stock revisado + envío consultado.</p><span>REMOVER FRICCIÓN</span></article>
        <article><b>B</b><h3>COMPARACIÓN</h3><p>Varias categorías + visitas largas + sin checkout.</p><span>PRUEBA Y DIFERENCIACIÓN</span></article>
        <article><b>C</b><h3>BAJA CONFIANZA</h3><p>Devoluciones + reseñas negativas + soporte.</p><span>NO PRESIONAR</span></article>
      </div>`,
    notes: "La personalización útil cambia la intervención, no solo el copy."
  },
  {
    id: "predictive-activity",
    kind: "activity",
    theme: "dark",
    duration: 12,
    eyebrow: "ACTIVIDAD GRUPAL",
    title: "DE SEGMENTO<br>A SISTEMA DE DECISIÓN.",
    body: `
      <ol class="steps">
        <li>Elijan una decisión: adquirir, retener o expandir.</li>
        <li>Definan tres señales predictivas.</li>
        <li>Definan una acción diferente por nivel de score.</li>
        <li>Definan qué resultado enseñará al sistema.</li>
      </ol>
      <p class="activity-output">OUTPUT: Signal → Score → Action → Learning.</p>`,
    notes: "Evitar variables sensibles o proxies problemáticos."
  },
  {
    id: "predictive-guardrails",
    kind: "cards",
    theme: "light",
    eyebrow: "GUARDRAILS",
    title: "PRECISIÓN SIN CAUSALIDAD<br>PUEDE DESTRUIR MARGEN.",
    body: `
      <div class="rule-grid">
        <div><b>01</b><p>Compara contra control.</p></div>
        <div><b>02</b><p>Mide lift incremental.</p></div>
        <div><b>03</b><p>Vigila drift.</p></div>
        <div><b>04</b><p>Audita sesgo.</p></div>
        <div><b>05</b><p>Limita frecuencia.</p></div>
        <div><b>06</b><p>Permite opt-out.</p></div>
      </div>`,
    notes: "Propensión alta no significa que el marketing causó la compra."
  },
  {
    id: "predictive-takeaway",
    kind: "takeaway",
    theme: "red",
    eyebrow: "KEY TAKEAWAY 03",
    title: "EL SEGMENTO DEL FUTURO<br>NO ES UNA PERSONA.<br>ES UNA PROBABILIDAD<br>QUE CAMBIA.",
    subtitle: "La ventaja está en actualizar la decisión más rápido que la competencia.",
    notes: "Cierre del bloque."
  },
  {
    id: "intelligence-section",
    kind: "section",
    theme: "dark",
    eyebrow: "BLOQUE 05 · 30 MIN",
    title: "LO QUE TU CONSUMIDOR<br>NO TE DICE.<br><span>PERO LA IA YA VE.</span>",
    subtitle: "Inteligencia de mercado accionable.",
    notes: "Diferenciar research episódico de sistema de señales."
  },
  {
    id: "consumer-unsaid",
    kind: "statement",
    theme: "light",
    eyebrow: "LA PARADOJA",
    title: "EL CONSUMIDOR NO LLENA TU ENCUESTA.<br><span>PERO DEJA RASTROS.</span>",
    subtitle: "Busca, compara, abandona, comenta, pregunta, devuelve, recomienda y cambia de lenguaje.",
    notes: "No romantizar: el rastro también tiene sesgo y ruido."
  },
  {
    id: "data-sources",
    kind: "cards",
    theme: "light",
    eyebrow: "EL NUEVO RESEARCH MIX",
    title: "ESCUCHA LO QUE DICE.<br>OBSERVA LO QUE HACE.",
    body: `
      <div class="dimension-grid">
        <article><b>01</b><h3>SEARCH</h3><p>Necesidad explícita.</p></article>
        <article><b>02</b><h3>SOCIAL</h3><p>Lenguaje y cultura.</p></article>
        <article><b>03</b><h3>CRM</h3><p>Relación y valor.</p></article>
        <article><b>04</b><h3>BEHAVIOR</h3><p>Fricción y secuencia.</p></article>
        <article><b>05</b><h3>SERVICE</h3><p>Problemas no resueltos.</p></article>
      </div>`,
    notes: "Triangular señales. Ninguna fuente representa el mercado completo."
  },
  {
    id: "signal-stack",
    kind: "framework",
    theme: "red",
    eyebrow: "EL SIGNAL STACK",
    title: "VOLUMEN NO ES INSIGHT.",
    body: `
      <div class="stack">
        <div><b>05</b><span>DECISIÓN</span></div>
        <div><b>04</b><span>IMPLICACIÓN</span></div>
        <div><b>03</b><span>PATRÓN</span></div>
        <div><b>02</b><span>SEÑAL</span></div>
        <div><b>01</b><span>DATA</span></div>
      </div>`,
    notes: "Un dashboard que no cambia ninguna decisión es almacenamiento decorativo."
  },
  {
    id: "anomaly-detection",
    kind: "definition",
    theme: "dark",
    eyebrow: "DETECTAR ANTES",
    title: "LA IA ES BUENA VIENDO<br>LO QUE ROMPE EL PATRÓN.",
    body: `
      <div class="formula">BASELINE → DESVIACIÓN → CONTEXTO → HIPÓTESIS → TEST</div>
      <p>Una anomalía no es una explicación. Es una invitación priorizada a investigar.</p>`,
    notes: "Evitar confundir correlación con causa."
  },
  {
    id: "jobs-to-be-done",
    kind: "split",
    theme: "light",
    eyebrow: "LLM + JTBD",
    title: "AGRUPA POR PROBLEMA.<br>NO SOLO POR SENTIMIENTO.",
    body: `
      <div class="before-after">
        <article><span>DÉBIL</span><p>“37% negativo.”</p><b>DESCRIBE</b></article>
        <article><span>FUERTE</span><p>“Quieren certeza de entrega antes de pagar más.”</p><b>ACTIVA</b></article>
        <article><span>DÉBIL</span><p>“Tema: servicio.”</p><b>GENÉRICO</b></article>
        <article><span>FUERTE</span><p>“Necesitan resolver sin repetir su historia.”</p><b>DISEÑABLE</b></article>
      </div>`,
    notes: "Los LLM ayudan a codificar lenguaje; la interpretación sigue requiriendo criterio y muestreo."
  },
  {
    id: "competitive-intelligence",
    kind: "cards",
    theme: "light",
    eyebrow: "COMPETITIVE INTELLIGENCE",
    title: "NO MONITORES COMPETIDORES.<br>MONITOREA MOVIMIENTOS.",
    body: `
      <div class="numbered-cards">
        <article><b>01</b><h3>MESSAGE</h3><p>Qué promesa están reforzando.</p></article>
        <article><b>02</b><h3>MEDIA</h3><p>Dónde crece su presión.</p></article>
        <article><b>03</b><h3>PRODUCT</h3><p>Qué fricción eliminan.</p></article>
        <article><b>04</b><h3>TALENT</h3><p>Qué capacidad están construyendo.</p></article>
      </div>`,
    notes: "Movimiento implica dirección y velocidad, no screenshot aislado."
  },
  {
    id: "command-center",
    kind: "framework",
    theme: "dark",
    eyebrow: "MARKET INTELLIGENCE ROOM",
    title: "CADA SEÑAL NECESITA<br>UNA RUTA DE DECISIÓN.",
    body: `
      <div class="case-flow">
        <span>DETECT</span><i>→</i><span>VERIFY</span><i>→</i><span>SIZE</span><i>→</i><span>DECIDE</span><i>→</i><span>LEARN</span>
      </div>
      <p>Owner · SLA · threshold · action · feedback.</p>`,
    notes: "Sin SLA y owner, real time significa real-time dashboard, delayed decision."
  },
  {
    id: "intelligence-case",
    kind: "case",
    theme: "red",
    eyebrow: "WAR STORY · DEMANDA EMERGENTE",
    title: "LA OPORTUNIDAD APARECIÓ<br>PRIMERO EN EL LENGUAJE.",
    body: `
      <div class="scenario-grid">
        <article><b>1</b><h3>SEÑAL</h3><p>Nuevas preguntas repetidas.</p></article>
        <article><b>2</b><h3>HIPÓTESIS</h3><p>La barrera cambió de precio a confianza.</p></article>
        <article><b>3</b><h3>ACCIÓN</h3><p>Nuevo proof, landing y script comercial.</p></article>
      </div>`,
    notes: "Contar un caso propio sin información confidencial. Enfatizar secuencia y validación."
  },
  {
    id: "signal-to-decision",
    kind: "activity",
    theme: "light",
    duration: 12,
    eyebrow: "ACTIVIDAD GRUPAL",
    title: "CONVIERTE UNA SEÑAL<br>EN UNA DECISIÓN.",
    body: `
      <ol class="steps">
        <li>Elige una señal reciente de tu mercado.</li>
        <li>Escribe tres explicaciones alternativas.</li>
        <li>Define qué dato discrimina entre ellas.</li>
        <li>Diseña una acción reversible en siete días.</li>
      </ol>
      <p class="activity-output">OUTPUT: señal, hipótesis, evidencia y decisión.</p>`,
    notes: "Penalizar hipótesis únicas. Recompensar falsabilidad."
  },
  {
    id: "intelligence-takeaway",
    kind: "takeaway",
    theme: "dark",
    eyebrow: "KEY TAKEAWAY 04",
    title: "LA IA NO REEMPLAZA<br>LA INTUICIÓN.<br><span>LA OBLIGA A COMPETIR CONTRA EVIDENCIA.</span>",
    subtitle: "La inteligencia útil reduce el tiempo entre señal y decisión.",
    notes: "Cierre del bloque."
  },
  {
    id: "personalization-section",
    kind: "section",
    theme: "red",
    eyebrow: "BLOQUE 06 · 25 MIN",
    title: "PERSONALIZAR<br>SIN INVADIR.",
    subtitle: "Escalar relevancia sin perder confianza.",
    notes: "Marcar que legal compliance es piso, no techo de confianza."
  },
  {
    id: "creepy-line",
    kind: "statement",
    theme: "dark",
    eyebrow: "THE CREEPY LINE",
    title: "CUANDO LA MARCA SABE MÁS<br>DE LO QUE EL CLIENTE RECUERDA HABER DICHO,<br><span>LA RELEVANCIA SE VUELVE VIGILANCIA.</span>",
    notes: "Pedir ejemplos que se sintieron útiles vs. inquietantes."
  },
  {
    id: "value-exchange",
    kind: "definition",
    theme: "light",
    eyebrow: "LA ECUACIÓN DE CONFIANZA",
    title: "LA PERSONALIZACIÓN SE ACEPTA<br>CUANDO EL VALOR SUPERA LA SORPRESA.",
    body: `
      <div class="big-equation">
        <span>VALOR PERCIBIDO + CONTROL</span>
        <hr>
        <span>SENSIBILIDAD DEL DATO × SORPRESA</span>
      </div>`,
    notes: "Framework cualitativo. No pretende ser fórmula matemática."
  },
  {
    id: "trust-matrix",
    kind: "matrix",
    theme: "light",
    eyebrow: "MATRIZ DE CONFIANZA",
    title: "NO TODO LO POSIBLE<br>ES PERMISIBLE.",
    body: `
      <div class="matrix-grid trust">
        <div class="q q1"><b>PEDIR CONSENTIMIENTO</b><span>Alto valor · alta sensibilidad</span></div>
        <div class="q q2"><b>PERSONALIZAR</b><span>Alto valor · baja sensibilidad</span></div>
        <div class="q q3"><b>PROHIBIR</b><span>Bajo valor · alta sensibilidad</span></div>
        <div class="q q4"><b>SIMPLIFICAR</b><span>Bajo valor · baja sensibilidad</span></div>
        <span class="axis-x">VALOR →</span><span class="axis-y">SENSIBILIDAD →</span>
      </div>`,
    notes: "La sensibilidad depende del contexto y del posible daño."
  },
  {
    id: "personalization-maturity",
    kind: "framework",
    theme: "dark",
    eyebrow: "MADUREZ DE PERSONALIZACIÓN",
    title: "MÁS PRECISIÓN<br>EXIGE MÁS CONTROL.",
    body: `
      <div class="ladder four">
        <article><b>1</b><h3>CONTEXT</h3><p>Canal, hora, ubicación.</p></article>
        <article><b>2</b><h3>BEHAVIOR</h3><p>Acciones recientes.</p></article>
        <article><b>3</b><h3>PREDICTION</h3><p>Propensión y NBA.</p></article>
        <article><b>4</b><h3>GENERATIVE</h3><p>Contenido individual.</p></article>
      </div>`,
    notes: "No saltar a generative personalization sin frequency caps, QA y medición incremental."
  },
  {
    id: "privacy-bias",
    kind: "cards",
    theme: "red",
    eyebrow: "GOVERNANCE 2026",
    title: "CUATRO RIESGOS<br>QUE MARKETING YA POSEE.",
    body: `
      <div class="numbered-cards">
        <article><b>01</b><h3>PRIVACY</h3><p>Uso fuera de expectativa.</p></article>
        <article><b>02</b><h3>BIAS</h3><p>Exclusión por proxies.</p></article>
        <article><b>03</b><h3>TRANSPARENCY</h3><p>Contenido o interacción sintética.</p></article>
        <article><b>04</b><h3>SECURITY</h3><p>Data, prompts y proveedores.</p></article>
      </div>`,
    sources: [
      source("NIST AI RMF", "https://www.nist.gov/itl/ai-risk-management-framework"),
      source("EU AI Act — implementación", "https://artificialintelligenceact.eu/implementation-timeline/")
    ],
    notes: "No dar asesoría legal. Señalar que desde agosto de 2026 entra en aplicación gran parte del AI Act de la UE; validar jurisdicción con Legal."
  },
  {
    id: "personalization-experiment",
    kind: "activity",
    theme: "light",
    duration: 8,
    eyebrow: "EXPERIMENTO",
    title: "DISEÑA PERSONALIZACIÓN<br>QUE MEREZCA EXISTIR.",
    body: `
      <ol class="steps">
        <li>¿Qué valor adicional recibe el cliente?</li>
        <li>¿Qué dato mínimo necesitas?</li>
        <li>¿Cómo conserva control?</li>
        <li>¿Qué guardrail detiene la experiencia?</li>
        <li>¿Qué lift incremental justificaría escalar?</li>
      </ol>`,
    notes: "Compartir un ejemplo donde la mejor personalización sea reducir mensajes."
  },
  {
    id: "tool-section",
    kind: "section",
    theme: "dark",
    eyebrow: "BLOQUE 07 · 20 MIN",
    title: "EL ARSENAL<br>COMPLETO.",
    subtitle: "La herramienta correcta depende del job, el workflow y el riesgo.",
    body: `
      <div class="tool-categories">
        <span>STRATEGY</span><span>INTELLIGENCE</span><span>CREATIVE</span>
        <span>MEDIA</span><span>CRM</span><span>MEASUREMENT</span><span>AGENTS</span>
      </div>
      <button class="cta-button" data-action="toolbox">ABRIR ARSENAL 2026</button>`,
    sources: [
      source("OpenAI for Marketing", "https://openai.com/business/solutions/marketing/"),
      source("Adobe Firefly Enterprise", "https://business.adobe.com/products/firefly-business.html")
    ],
    notes: "No leer logos. Enseñar el mapa por job y abrir el drawer para explorar categorías."
  },
  {
    id: "capstone",
    kind: "interactive",
    theme: "light",
    duration: 22,
    eyebrow: "CAPSTONE · 90 DÍAS",
    title: "CONSTRUYE TU<br>AI MARKETING INVESTMENT MAP.",
    body: `
      <form class="capstone-form" data-persist="capstone">
        <label>1. Problema de negocio<textarea name="problem" placeholder="Qué decisión o workflow debe mejorar"></textarea></label>
        <label>2. Caso de uso prioritario<textarea name="usecase" placeholder="Usuario + job + cambio medible"></textarea></label>
        <label>3. Métrica y baseline<textarea name="metric" placeholder="Resultado, baseline y target"></textarea></label>
        <label>4. Riesgo principal<textarea name="risk" placeholder="Daño, reversibilidad y guardrail"></textarea></label>
        <label>5. Próximo experimento<textarea name="experiment" placeholder="Owner, 30 días y kill criteria"></textarea></label>
        <div class="capstone-actions">
          <button type="button" data-action="copy-capstone">COPIAR PLAN</button>
          <button type="button" data-action="reset-capstone">LIMPIAR</button>
        </div>
      </form>`,
    notes: "Trabajo individual 12 minutos, contraste en parejas 5, compartir 5. El plan debe caber en una página."
  },
  {
    id: "close",
    kind: "close",
    theme: "red",
    eyebrow: "CIERRE",
    title: "NO NECESITAS MÁS IA.<br><span>NECESITAS MEJORES DECISIONES SOBRE IA.</span>",
    body: `
      <div class="closing-grid">
        <p><b>01</b> READINESS antes de herramientas.</p>
        <p><b>02</b> Capital antes de entusiasmo.</p>
        <p><b>03</b> Evidence antes de demos.</p>
        <p><b>04</b> Señales antes de segmentos.</p>
        <p><b>05</b> Confianza antes de precisión.</p>
      </div>
      <div class="signature">ALEXIS SOUBRAN · CEO, MINIMALIST</div>`,
    sources: [
      source("Stanford AI Index 2026", "https://hai.stanford.edu/ai-index/2026-ai-index-report"),
      source("NIST AI RMF", "https://www.nist.gov/itl/ai-risk-management-framework"),
      source("McKinsey State of AI 2025", "https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-in-2025.pdf")
    ],
    notes: "Volver a la pregunta inicial. Pedir un compromiso concreto para los próximos siete días."
  }
];
