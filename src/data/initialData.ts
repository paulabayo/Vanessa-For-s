import { ServiceItem, DocumentSection, BeforeAfterItem, Testimonial, FAQItem, StudioConfig } from '../types';

import heroVanessaImg from '../assets/images/vanessa_hero_burriana_1788101724851.jpg';
import studioLogoImg from '../assets/images/vanessa_fores_logotipo_1788101706636.jpg';
import browsAfterImg from '../assets/images/brows_microblading_1788095532419.jpg';
import browsBeforeImg from '../assets/images/brows_natural_before_1788095624426.jpg';
import lipsAfterImg from '../assets/images/lips_aquarelle_1788095568733.jpg';
import lipsBeforeImg from '../assets/images/lips_natural_before_1788095637039.jpg';
import eyelinerImg from '../assets/images/eyeliner_close_up_1788095586961.jpg';

export const initialStudioConfig: StudioConfig = {
  studioName: "Vanessa Forés",
  tagline: "Micropigmentación Facial & Visagismo de Autor",
  heroHeadline: "Micropigmentación Facial de Autor.",
  heroSubheadline: "Técnicas hiperrealistas de micropigmentación que realzan tu mirada y armonizan tus rasgos con elegancia duradera. Nueva consulta en Burriana.",
  heroImage: "/DIRECCION.jpeg",
  logoImage: "/LOGOTIPO.jpeg",
  phone: "+34 605 470 721",
  whatsapp: "34605470721",
  instagram: "@vanessafores.micropigmentacion",
  email: "contacto@vanessafores.es",
  location: "Calle Benicarló 8, Burriana (Castellón)",
  schedule: "Lunes a Viernes: 10:00 - 20:00 | Sábados: 10:00 - 15:00",
  specialistName: "Vanessa Forés",
  specialistTitle: "Premio PMU World • Master Artist en Micropigmentación & Visagismo Facial",
  specialistBio: "Especialista galardonada con el Premio PMU World y certificada con honores por Mario Gisbert Academy y la Asociación Española de Micropigmentación (AEM). Con más de 8 años de trayectoria y más de 1.500 tratamientos de autor, mi filosofía une la precisión médica y el visagismo áureo para sublimar tu belleza con total naturalidad."
};

export const initialServices: ServiceItem[] = [
  {
    id: 'cejas-shading',
    name: 'Cejas Shading & Powder Brows',
    category: 'cejas',
    categoryLabel: 'Cejas',
    price: 280,
    duration: '2h 15min',
    healingTime: '7 - 10 días',
    durability: '1.5 a 2.5 años',
    description: 'Efecto degradado empolvado hiperrealista. Proporciona densidad, definición óptica y un acabado aterciopelado impecable y natural.',
    details: [
      'Estudio previo de visagismo y diseño áureo personalizado',
      'Pigmentos minerales estables que no viran a tonos rojizos o azulados',
      'Anestesia tópica secundaria de máximo confort',
      'Incluye kit de cuidados post-tratamiento de regalo'
    ],
    recommendedFor: 'Personas con cejas poco pobladas, asimetrías o que buscan no tener que maquillarse a diario.',
    image: browsAfterImg,
    badge: 'Más Solicitado'
  },
  {
    id: 'labios-aquarelle',
    name: 'Aquarelle Lip Blush',
    category: 'labios',
    categoryLabel: 'Labios',
    price: 310,
    duration: '2h 30min',
    healingTime: '4 - 6 días',
    durability: '2 a 3 años',
    description: 'Velo de color translúcido con efecto rubor acuarela. Restaura el contorno perdido, define los bordes y crea una sensación de volumen y juventud 24/7.',
    details: [
      'Elección personalizada del pantone (nude, rosa empolvado, melocotón o coral)',
      'Técnica suave no invasiva sin efecto borde marcado artificial',
      'Estimulación de colágeno natural por microneedling leve',
      'Opción de neutralización para labios oscuros o hiperpigmentados'
    ],
    recommendedFor: 'Labios pálidos, con pérdida de definición en el arco de cupido o asimetrías leves.',
    image: lipsAfterImg,
    badge: 'Tendencia Top'
  },
  {
    id: 'eyeliner-soft',
    name: 'Eye-liner Soft & Lash Enhancement',
    category: 'ojos',
    categoryLabel: 'Ojos',
    price: 240,
    duration: '1h 45min',
    healingTime: '5 - 7 días',
    durability: '2 a 4 años',
    description: 'Intensificación de la línea de pestañas y delineado sombreado sutil. Abre la mirada, aportando profundidad y densidad visual sin recargar.',
    details: [
      'Relleno interciliar para crear efecto de pestañas más densas',
      'Difuminado ahumado (Smoky liner) en el tercio exterior',
      'Pigmento de alta pureza hipoalergénico certificado oftalmológicamente',
      'No se corre con el agua, sudor o lágrimas'
    ],
    recommendedFor: 'Miradas cansadas, párpados con falta de definición o usuarios de lentes de contacto.',
    image: eyelinerImg
  },
  {
    id: 'microblading-hibrido',
    name: 'Microblading Pelo a Pelo Híbrido',
    category: 'cejas',
    categoryLabel: 'Cejas',
    price: 290,
    duration: '2h 30min',
    healingTime: '7 - 10 días',
    durability: '1 a 2 años',
    description: 'Combinación magistral de trazos de pelo a pelo en el inicio y sombreado tridimensional en el cuerpo y cola de la ceja para máxima tridimensionalidad.',
    details: [
      'Simulación exacta de la dirección y grosor del vello biológico',
      'Microcuchillas nano de acero quirúrgico esterilizadas',
      'Ideal para pieles secas y mixtas',
      'Fijación uniforme y acabado ultra-natural'
    ],
    recommendedFor: 'Reconstrucción total o parcial de cejas con calvas o alopecia.',
    image: browsAfterImg
  },
  {
    id: 'micropigmentacion-paramedica',
    name: 'Micropigmentación Paramédica & Areolar',
    category: 'paramedica',
    categoryLabel: 'Paramédica',
    price: 360,
    duration: '2h 45min',
    healingTime: '10 - 14 días',
    durability: '3 a 5 años',
    description: 'Reconstrucción óptica 3D del complejo areola-pezón post-mastectomía y camuflaje estético de cicatrices quirúrgicas o traumatológicas.',
    details: [
      'Técnica tridimensional hiperrealista con luces y sombras',
      'Trato 100% empático, íntimo y confidencial',
      'Pigmentos médicos biorreabsorbibles de grado hospitalario',
      'Asesoramiento con informe médico previo'
    ],
    recommendedFor: 'Pacientes recuperadas de procesos oncológicos o con cicatrices periareolares.',
    image: heroVanessaImg,
    badge: 'Médico-Estético'
  }
];

export const initialDocuments: DocumentSection[] = [
  {
    id: 'doc-consentimiento',
    title: '1. Consentimiento Informado & Ficha Médica',
    category: 'consentimiento',
    categoryLabel: 'Consentimiento & Salud',
    iconName: 'ShieldCheck',
    summary: 'Documento legal y clínico obligatorio que garantiza la seguridad, idoneidad y trazabilidad de tu tratamiento.',
    importantNote: 'Debe ser leído y firmado presencialmente o digitalmente antes de dar inicio a la sesión.',
    printable: true,
    lastUpdated: 'Revisión Médica 2025/2026',
    points: [
      {
        title: 'Cuestionario de Salud y Alergias',
        description: 'Evaluación previa de antecedentes de cicatrización queloide, hemofilia, afecciones cardíacas, alergia a metales/anestésicos locales o pigmentos.'
      },
      {
        title: 'Contraindicaciones Absolutas',
        description: 'Embarazo o periodo de lactancia activa, tratamiento con isotretinoína/Roacután en los últimos 6 meses, infecciones activas o dermatitis en la zona a tratar.',
        warning: true
      },
      {
        title: 'Prueba de Sensibilidad Dérmica',
        description: 'Para pieles reactivas o con alergias conocidas, se realiza un test alérgico 48h antes del procedimiento detrás de la oreja o pliegue del codo.'
      },
      {
        title: 'Aceptación de Diseño y Visagismo Previo',
        description: 'La clienta aprueba explícitamente la simulación y medidas exactas dibujadas en el rostro antes de iniciar cualquier inserción de pigmento.'
      }
    ]
  },
  {
    id: 'doc-pre-care',
    title: '2. Protocolo de Cuidados Previos (Pre-Care)',
    category: 'previos',
    categoryLabel: 'Preparación Previa',
    iconName: 'Clock',
    summary: 'Instrucciones vitales para las 48 horas previas que maximizan la retención del pigmento y minimizan cualquier molestia.',
    importantNote: 'Seguir estas pautas evita el sangrado excesivo y asegura un color uniforme y duradero.',
    printable: true,
    points: [
      {
        title: '48 Horas Antes: Evitar Vasodilatadores',
        description: 'No consumir alcohol, bebidas energéticas, café en exceso, aspirina, ibuprofeno ni suplementos como Vitamina E, Ginkgo Biloba o cápsulas de Omega 3.',
        warning: true
      },
      {
        title: '7 Días Antes: Sin Peelings ni Retinol',
        description: 'Suspender el uso de ácidos exfoliantes (glicólico, salicílico, retinol), dermoabrasiones o peelings químicos en el rostro.'
      },
      {
        title: '2 Semanas Antes: Sin Exposición Solar Intensa',
        description: 'No acudir a sesiones de bronceado UVA ni exponerse al sol directo sin protección total. La piel no debe estar inflamada ni quemada.'
      },
      {
        title: 'Para Labios: Profilaxis de Herpes',
        description: 'Si tienes tendencia a brotes de herpes labial, se recomienda tomar profilaxis antiviral (ej. Aciclovir/Valaciclovir) 3 días antes previa consulta médica.'
      }
    ]
  },
  {
    id: 'doc-post-care',
    title: '3. Protocolo de Cuidados Posteriores (Post-Care)',
    category: 'posteriores',
    categoryLabel: 'Cuidados Post-Sesión',
    iconName: 'HeartHandshake',
    summary: 'El 60% del éxito del resultado depende de los cuidados durante los primeros 14 días de regeneración celular.',
    importantNote: 'Incluimos gratis tu crema regeneradora y toallitas estériles en el kit de salida.',
    printable: true,
    points: [
      {
        title: 'Días 1 a 3: Higiene Suave y Secado',
        description: 'Limpiar la zona suavemente 2 veces al día con agua mineral tibia y jabón neutro sin frotar. Secar a toques suaves con papel tisú desechable y aplicar capa milimétrica de pomada.',
        dayRange: 'Días 1 - 3'
      },
      {
        title: 'Días 4 a 7: Formación de Microcostras',
        description: 'La piel creará pequeñas escamaciones protectoras. ¡ESTRICTAMENTE PROHIBIDO rascar, frotar o tirar de las pieles! Dejar que caigan por sí solas.',
        warning: true,
        dayRange: 'Días 4 - 7'
      },
      {
        title: 'Primeras 2 Semanas: Factores a Evitar',
        description: 'Cero saunas, baños de inmersión en piscinas o mar, sudoración extrema por ejercicio intenso y cero maquillaje directo en la zona tratada.',
        dayRange: 'Días 1 - 14'
      },
      {
        title: 'Protección Solar Continua (SPF 50+)',
        description: 'Una vez cicatrizada la zona, aplicar protector solar a diario para preservar la frescura y saturación del pigmento durante años.',
        dayRange: 'Día 15 en adelante'
      }
    ]
  },
  {
    id: 'doc-cicatrizacion',
    title: '4. Fases de Cicatrización y Sesión de Retoque',
    category: 'cicatrizacion',
    categoryLabel: 'Evolución del Color',
    iconName: 'Sparkles',
    summary: 'Entiende cómo evoluciona el color y por qué la sesión de retoque a los 30-45 días es indispensable.',
    importantNote: 'No te asustes: el color pasará por una fase oscura, luego muy clara, y finalmente se estabilizará a la perfección.',
    printable: true,
    points: [
      {
        title: 'Día 1 al 4: Fase de Color Intenso',
        description: 'El pigmento se ve 30-40% más oscuro e intenso debido a la oxidación en contacto con el aire y la inflamación leve. Es completamente normal.'
      },
      {
        title: 'Día 5 al 10: Caída de Piel y "Efecto Fantasma"',
        description: 'Al caer las microescamas, la piel nueva translúcida hace parecer que el pigmento ha desaparecido casi por completo.'
      },
      {
        title: 'Día 11 al 28: Maduración y Reaparición del Color',
        description: 'Las capas dérmicas se regeneran y el tono florece a la superficie, mostrando el color real, suave y definitivo.'
      },
      {
        title: 'Día 30 a 45: Sesión de Retoque Perfeccionador',
        description: 'Revisamos la asimilación del pigmento en cada poro, rellenamos posibles pequeñas calvas y fijamos la durabilidad para los próximos años.'
      }
    ]
  },
  {
    id: 'doc-bioseguridad',
    title: '5. Bioseguridad, Higiene y Pigmentos REACH',
    category: 'bioseguridad',
    categoryLabel: 'Garantía & Bioseguridad',
    iconName: 'Award',
    summary: 'Máximos estándares sanitarios europeos, instrumental desechable de un solo uso y pigmentos veganos hipoalergénicos.',
    points: [
      {
        title: 'Normativa Europea REACH 2022/2025',
        description: 'Utilizamos únicamente pigmentos libres de metales pesados, aminas aromáticas y componentes tóxicos, cumpliendo con la legislación sanitaria europea.'
      },
      {
        title: 'Agujas y Mangos Desechables en Blíster Estéril',
        description: 'Todo el material cortopunzante se abre exclusivamente delante de la clienta y se desecha en contenedor biológico homologado.'
      },
      {
        title: 'Cabina Sanitizada con Protocolo Hospitalario',
        description: 'Desinfección superficial de grado quirúrgico entre cada paciente y barreras de film protector en todo el mobiliario y dermógrafo.'
      }
    ]
  }
];

export const initialBeforeAfter: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Transformación de Cejas: Shading & Arquitectura Facial',
    service: 'Cejas Shading',
    description: 'De cejas con calvas en la cola y forma descendente a un arco rejuvenecedor con efecto polvo tridimensional.',
    beforeImage: browsBeforeImg,
    afterImage: browsAfterImg,
    technique: 'Micropigmentación Shading Degradé',
    retouchTime: 'Resultado a los 40 días tras retoque'
  },
  {
    id: 'ba-2',
    title: 'Aquarelle Lips: Definición & Volumen Óptico',
    service: 'Labios Aquarelle',
    description: 'Relleno de tono nude rosáceo empolvado, eliminando palidez y definiendo el arco de cupido sin efecto delineador duro.',
    beforeImage: lipsBeforeImg,
    afterImage: lipsAfterImg,
    technique: 'Velo translúcido Pixel Blush',
    retouchTime: 'Resultado cicatrizado definitivo'
  },
  {
    id: 'ba-3',
    title: 'Eyeliner Soft & Densificación de Pestañas',
    service: 'Eyeliner Difuminado',
    description: 'Apertura de mirada mediante pigmentación interciliar y sutil difuminado ascendente en extremo exterior.',
    beforeImage: browsBeforeImg,
    afterImage: eyelinerImg,
    technique: 'Lash Line Smoky Effect',
    retouchTime: 'Sesión única cicatrizada'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Carmen Morales',
    service: 'Cejas Shading & Aquarelle Lips',
    rating: 5,
    comment: 'Llegué con mucho miedo a que quedara artificial y el resultado superó todas mis expectativas. Vanessa tiene unas manos de ángel, no me dolió nada y mis cejas parecen recién peinadas cada mañana.',
    date: 'Hace 2 semanas'
  },
  {
    id: 't-2',
    name: 'Elena Santamaría',
    service: 'Aquarelle Lip Blush',
    rating: 5,
    comment: 'Mis labios eran muy pálidos y no tenían contorno definido. Ahora tienen un tono rosado saludable súper natural, solo me pongo bálsamo hidratante y quedan divinos. ¡El kit de post-care fue clave!',
    date: 'Hace 1 mes'
  },
  {
    id: 't-3',
    name: 'Beatriz Navarro',
    service: 'Microblading Híbrido',
    rating: 5,
    comment: 'Increíble el trato y la profesionalidad. Te explica todo el proceso paso a paso con los documentos médicos y el diseño previo antes de empezar. 100% recomendable.',
    date: 'Hace 3 semanas'
  }
];

export const initialFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿El procedimiento de micropigmentación es doloroso?',
    answer: 'La molestia es mínima. Aplicamos geles y cremas tópicas de anestesia local secundaria que insensibilizan la zona. La mayoría de nuestras clientas describen la sensación como un cosquilleo suave o vibración.',
    category: 'dolor'
  },
  {
    id: 'faq-2',
    question: '¿Cuánto tiempo dura el resultado intacto?',
    answer: 'La duración media oscila entre 1.5 y 3 años, dependiendo de la técnica, el tipo de piel (en pieles grasas se metaboliza ligeramente más rápido) y la exposición solar. Recomendamos una sesión anual de refresco de color.',
    category: 'duracion'
  },
  {
    id: 'faq-3',
    question: '¿Por qué es necesario hacer una sesión de retoque a los 30 días?',
    answer: 'Durante el primer mes, el sistema inmunológico reabsorbe parte del pigmento nuevo. El retoque permite evaluar la fijación exacta en cada zona, corregir pequeñas asimetrías y sellar el color para garantizar su longevidad.',
    category: 'cuidados'
  },
  {
    id: 'faq-4',
    question: '¿Puedo ir a trabajar al día siguiente del tratamiento?',
    answer: '¡Totalmente! No requiere baja laboral. Habrá una ligera rojez en las primeras 2-4 horas que remite rápidamente. El color se verá más nítido los primeros días pero no impide continuar con tu rutina social normal.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: '¿Los pigmentos pueden cambiar a color rojo, azul o gris con el tiempo?',
    answer: 'No en nuestro estudio. Empleamos exclusivamente pigmentos minerales y orgánicos homologados por la UE con formulación balanceada y fotocontrolada, garantizando que el tono simplemente se aclare con el tiempo de manera homogénea.',
    category: 'general'
  },
  {
    id: 'faq-6',
    question: '¿Qué precauciones debo tener antes de mi cita?',
    answer: 'No tomar alcohol ni café 24h antes, no consumir aspirinas ni suplementos vasodilatadores 48h antes, y no haber realizado peelings químicos intensos en los 7 días previos.',
    category: 'cuidados'
  }
];
