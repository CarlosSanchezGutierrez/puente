export type VocationalCity = "Monterrey" | "Tampico";

export type VocationalFamily =
  | "Ingenierías y Ciencias"
  | "Medicina y Ciencias de la Salud"
  | "Negocios"
  | "Escuela de Arquitectura, Arte y Diseño"
  | "Humanidades";

export type VocationalProfile = {
  name: string;
  credential: string;
  institution: string;
  family: VocationalFamily;
  city: VocationalCity;
  role: "Mentor universitario" | "Directiva académica" | "Profesionista invitado";
  linkedin?: string;
  photo?: string;
  badges?: string[];
};

export const vocationalFamilies: { title: VocationalFamily; description: string }[] = [
  {
    title: "Ingenierías y Ciencias",
    description:
      "Tecnología, datos, mecatrónica, física, sistemas, procesos, infraestructura, ciencia aplicada e ingeniería.",
  },
  {
    title: "Medicina y Ciencias de la Salud",
    description:
      "Medicina, odontología, psicología, nutrición, biomédica, salud pública y bienestar.",
  },
  {
    title: "Negocios",
    description:
      "Administración, finanzas, economía, mercadotecnia, negocios internacionales, estrategia y transformación.",
  },
  {
    title: "Escuela de Arquitectura, Arte y Diseño",
    description:
      "Arquitectura, ciudad, diseño, producción creativa, espacios, arte, comunicación visual e industrias creativas.",
  },
  {
    title: "Humanidades",
    description:
      "Derecho, educación, comunicación, sociedad, cultura, relaciones humanas y pensamiento crítico.",
  }
];

export const institutionsByCity = {
  Monterrey: [
    "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
    "Universidad de Monterrey (UDEM)",
    "Universidad Autónoma de Nuevo León (UANL)"
],
  Tampico: [
    "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
    "Instituto de Estudios Superiores de Tamaulipas Anáhuac (IEST Anáhuac)",
    "Universidad del Noreste (UNE)",
    "Universidad Autónoma de Tamaulipas (UAT)"
],
} as const;

const itesm = "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)";
const iest = "Instituto de Estudios Superiores de Tamaulipas Anáhuac (IEST Anáhuac)";
const une = "Universidad del Noreste (UNE)";
const uat = "Universidad Autónoma de Tamaulipas (UAT)";

export const vocationalProfiles: VocationalProfile[] = [
  {
                    name: "Carlos Sánchez Gutiérrez",
                    credential: "Ingeniería en Tecnologías Computacionales (ITC) | Global Data Science Intern at CEMEX",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Monterrey",
                    role: "Mentor universitario",
                    photo: "/mentores/carlos-sanchez-gutierrez.jpg",
                    linkedin: "https://www.linkedin.com/in/carlos-sanchez-gutierrez-tec/",
                  },

  {
                    name: "Carlos Sánchez Gutiérrez",
                    credential: "Ingeniería en Tecnologías Computacionales (ITC) | Global Data Science Intern at CEMEX",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                    photo: "/mentores/carlos-sanchez-gutierrez.jpg",
                    linkedin: "https://www.linkedin.com/in/carlos-sanchez-gutierrez-tec/",
                  },

  {
                    name: "Leonel Francisco Bailón Sifuentes",
                    credential: "Ingeniería en Tecnologías Computacionales (ITC) | Systems Engineer / IT Automation Engineer at PROFUCOM DE MEXICO",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Monterrey",
                    role: "Mentor universitario",
                    photo: "/mentores/leonel-francisco-bailon-sifuentes.jpg",
                    linkedin: "https://www.linkedin.com/in/leonelbailonsifuentes/",
                  },

  {
                    name: "Leonel Francisco Bailón Sifuentes",
                    credential: "Ingeniería en Tecnologías Computacionales (ITC) | Systems Engineer / IT Automation Engineer at PROFUCOM DE MEXICO",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                    photo: "/mentores/leonel-francisco-bailon-sifuentes.jpg",
                    linkedin: "https://www.linkedin.com/in/leonelbailonsifuentes/",
                  },

  {
                    name: "Sofía Sánchez Garza",
                    credential: "Ingeniería Física Industrial (IFI)",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Monterrey",
                    role: "Mentor universitario",
                        linkedin: "https://www.linkedin.com/in/sofiasanchezg/",
                  },

  {
                    name: "Sofía Sánchez Garza",
                    credential: "Ingeniería Física Industrial (IFI)",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                        linkedin: "https://www.linkedin.com/in/sofiasanchezg/",
                  },

  {
                    name: "Elvia Itzamná Rosas Herrera",
                    credential: "Directora de Ingeniería en Tecnologías Computacionales (ITC)",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Monterrey",
                    role: "Directiva académica",
                    photo: "/mentores/elvia-itzamna-rosas-herrera.jpg",
                    linkedin: "https://www.linkedin.com/in/elviarosasherrera/",
                  },

  {
                    name: "Lehi Salvador Rangel Cárdenas",
                    credential: "Ingeniería Industrial y de Sistemas (IIS)",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                        linkedin: "https://www.linkedin.com/in/lehi-salvador/",
                  },

  {
                    name: "Maximiliano Lozano Suárez",
                    credential: "Ingeniería en Mecatrónica (IMT) | Maintenance Intern at IPECO",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                    photo: "/mentores/maximiliano-lozano-suarez.jpg",
                    linkedin: "https://www.linkedin.com/in/maximiliano-lozano-suarez-161743339/",
                    badges: ["Líder del Mañana"],
                  },

  {
                    name: "Mireidi Jaqueline Castelan Mendoza",
                    credential: "Ingeniería en Mecatrónica (IMT)",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                    photo: "/mentores/mireidi-jaqueline-castelan-mendoza.jpg",
                    linkedin: "https://www.linkedin.com/in/mireidicastelan/",
                    badges: ["Líder del Mañana"],
                  },

  {
                    name: "José Andrés Pimentel Cruz",
                    credential: "Ingeniería en Mecatrónica (IMT)",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                    photo: "/mentores/jose-andres-pimentel-cruz.jpg",
                    linkedin: "https://www.linkedin.com/in/jos%C3%A9-andr%C3%A9s-pimentel-cruz-6225a528a/",
                    badges: ["Líder del Mañana"],
                  },

  {
                    name: "Luz Getsemani Martínez García",
                    credential: "Ingeniería en Mecatrónica (IMT) | Vicepresidenta del Consejo de Responsabilidad Social",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                    photo: "/mentores/luz-getsemani-martinez-garcia.jpg",
                    linkedin: "https://www.linkedin.com/in/luzgetsemani/",
                    badges: ["Líder del Mañana"],
                  },

  {
                    name: "Esaú Oviedo González",
                    credential: "Ingeniería en Mecatrónica (IMT) | Vicepresidente de Legalidad del Comité de Participación Estudiantil FETEC",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                    photo: "/mentores/esau-oviedo-gonzalez.jpg",
                    badges: ["Líder del Mañana"],
                  },

  {
                    name: "Jorge Eduardo Ávila Montoya",
                    credential: "Ingeniería en Ciencia de Datos y Matemáticas (IDM)",
                    institution: itesm,
                    family: "Ingenierías y Ciencias",
                    city: "Tampico",
                    role: "Mentor universitario",
                  },

  {
                    name: "Daphne Eunice Ramírez García",
                    credential: "Psicología",
                    institution: iest,
                    family: "Medicina y Ciencias de la Salud",
                    city: "Tampico",
                    role: "Mentor universitario",
                        linkedin: "https://www.linkedin.com/in/daphne-eunice-ram%C3%ADrez-garc%C3%ADa-a5884a384/",
                  },

  {
                    name: "Jimena Luna Carcini",
                    credential: "Medicina | Ambassador of the 2026 International Congress of Surgery",
                    institution: une,
                    family: "Medicina y Ciencias de la Salud",
                    city: "Tampico",
                    role: "Mentor universitario",
                    photo: "/mentores/jimena-luna-carcini.jpg",
                    linkedin: "https://www.linkedin.com/in/jimenacarcini/",
                  },

  {
                    name: "Sarai Abreu Arteaga",
                    credential: "Medicina",
                    institution: uat,
                    family: "Medicina y Ciencias de la Salud",
                    city: "Tampico",
                    role: "Mentor universitario",
                  },

  {
                name: "Jorge Iván Hidalgo Reyes",
                credential: "Director de Ingeniería Electrónica y Semiconductores (IE)",
                institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
                family: "Ingenierías y Ciencias",
                city: "Monterrey",
                role: "Directiva académica",
                photo: "/vocacional/orientadores/jorge-ivan-hidalgo-reyes.jpg",
                linkedin: "https://www.linkedin.com/in/jihidalgormx/",
                badges: [],
              },

  {
                name: "Juan Pablo Méndez Lomelí",
                credential: "Licenciatura en Arquitectura (ARQ) | Practicante de construcción en FEMSA | Ex Embajador Tec | SEARQ Director de Proyectos | Subdirector de Proyectos del Consejo Nacional de Estudiantes de Arquitectura",
                institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
                family: "Escuela de Arquitectura, Arte y Diseño",
                city: "Monterrey",
                role: "Mentor universitario",
                photo: "/vocacional/orientadores/juan-pablo-mendez-lomeli.jpg",
                linkedin: "https://www.linkedin.com/in/juan-pablo-m%C3%A9ndez-lomel%C3%AD/",
                badges: [],
              },

  {
            name: "Sebastian Marines",
            credential: "Ex Software Engineer en Meta | Ex Senior Cloud Engineer en Amazon y Rackspace Technology | EXATEC",
            institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
            family: "Ingenierías y Ciencias",
            city: "Monterrey",
            role: "Profesionista invitado",
            photo: "/vocacional/orientadores/sebastian-marines.jpg",
            linkedin: "https://www.linkedin.com/in/sebastianmarines/",
            badges: [],
          },

  {
            name: "Elsa Yolanda Torres Torres",
            credential: "Profesora del Tec de Monterrey | Ing. Electrónica | Maestría en Electrónica | PhD en Educación | Ex directora y consejera IEEE",
            institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
            family: "Ingenierías y Ciencias",
            city: "Monterrey",
            role: "Directiva académica",
            photo: "/vocacional/orientadores/elsa-yolanda-torres-torres.jpg",
            linkedin: "https://www.linkedin.com/in/elsaytorres/",
            badges: [],
          },

  {
            name: "Sebastián Hernández Peredo Vieyra",
            credential: "Ingeniería en Robótica y Sistemas Digitales (IRS) | Líder y coordinador de proyectos de SEIRS | Software Team Member at VantTec | Piloto de drones en Blue Thunders",
            institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
            family: "Ingenierías y Ciencias",
            city: "Monterrey",
            role: "Mentor universitario",
            photo: "/vocacional/orientadores/sebastian-hernandez-peredo-vieyra.jpg",
            linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-hern%C3%A1ndez-peredo-vieyra/",
            badges: [],
          },

  {
            name: "Valeria Ivett Navejas Cedillo",
            credential: "Licenciatura en Estrategia y Transformación de Negocios (LAET) | EXATEC | Recursos Humanos, Cultura, Comunicación y Responsabilidad Social",
            institution: "OXXO, Región Tamaulipas",
            family: "Negocios",
            city: "Tampico",
            role: "Profesionista invitado",
            photo: "/vocacional/orientadores/valeria-ivett-navejas-cedillo.jpg",
            linkedin: "https://www.linkedin.com/in/valeriaivettnavejascedillo/",
            badges: [],
          },

  {
            name: "Luciano Reveles Moya",
            credential: "Contaduría y Finanzas | Asesoría fiscal",
            institution: "Universidad del Noreste (UNE)",
            family: "Negocios",
            city: "Tampico",
            role: "Mentor universitario",
            photo: "/vocacional/orientadores/luciano-reveles-moya.jpg",
            badges: [],
          },

  {
          name: "Melissa Olivares García",
          credential: "Cost Control & Management Specialist en KIA México | Computer Science (CS), UANL",
          institution: "KIA México | Universidad Autónoma de Nuevo León (UANL)",
          family: "Ingenierías y Ciencias",
          city: "Monterrey",
          role: "Profesionista invitado",
          photo: "/vocacional/orientadores/melissa-olivares-garcia.jpg",
          linkedin: "https://www.linkedin.com/in/melissa-olivares-garcia/",
          badges: [],
        },

  {
          name: "Fernanda Alcubilla",
          credential: "Subgerente de Analítica Avanzada en Prevención de Fraudes en Hey Banco | Ingeniería en Ciencia de Datos y Matemáticas (IDM), EXATEC",
          institution: "Hey Banco | Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
          family: "Ingenierías y Ciencias",
          city: "Monterrey",
          role: "Profesionista invitado",
          photo: "/vocacional/orientadores/fernanda-alcubilla.jpg",
          linkedin: "https://www.linkedin.com/in/alcubilla/",
          badges: [],
        },

  {
          name: "María Fernanda Montoya López",
          credential: "Ingeniería en Ciencia de Datos y Matemáticas (IDM) | Data & Analytics Intern en IBM y CEMEX",
          institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
          family: "Ingenierías y Ciencias",
          city: "Monterrey",
          role: "Mentor universitario",
          photo: "/vocacional/orientadores/maria-fernanda-montoya-lopez.jpg",
          linkedin: "https://www.linkedin.com/in/mariafernandamontoyal/",
          badges: [],
        },

  {
          name: "Abel Salas Leal",
          credential: "Profesor de Mecatrónica y Energías Renovables | Ing. en Mecatrónica, Robótica y Automatización | MTech en Ciencias Computacionales",
          institution: "Universidad Tecnológica de Altamira",
          family: "Ingenierías y Ciencias",
          city: "Tampico",
          role: "Directiva académica",
          photo: "/vocacional/orientadores/abel-salas-leal.jpg",
          linkedin: "https://www.linkedin.com/in/abelsalas/",
          badges: [],
        },

  {
        name: "Santiago Jaramillo Nava",
        credential: "Ingeniería en Transformación Digital de Negocios (ITD) | Project Analyst Intern en Spin by FEMSA | Supply Chain Intern en Clarios",
        institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
        family: "Ingenierías y Ciencias",
        city: "Monterrey",
        role: "Mentor universitario",
        photo: "/vocacional/orientadores/santiago-jaramillo-nava.jpg",
        linkedin: "https://www.linkedin.com/in/santiago-jaramillo-nava/",
        badges: [],
      },

  {
    name: "Martha María Barba",
    credential: "Directora de Programa LED (Derecho) | Tecnológico de Monterrey",
    institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
    family: "Humanidades",
    city: "Monterrey",
    role: "Directiva académica",
    photo: "/vocacional/orientadores/martha-maria-barba.jpg",
    linkedin: "https://www.linkedin.com/in/martha-maria-barba-09450649/",
    badges: [],
  },

  {
    name: "Darianna Lucía Téllez Tello",
    credential: "Ingeniería Industrial y de Sistemas | Líder de Hack4Her | Presidenta de Women in Technology | Programa de Liderazgo Eugenio Garza Sada",
    institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
    family: "Ingenierías y Ciencias",
    city: "Monterrey",
    role: "Profesionista invitado",
    photo: "/vocacional/orientadores/darianna-lucia-tellez-tello.jpg",
    linkedin: "https://www.linkedin.com/in/dariannatellez/",
    badges: [],
  },

  {
    name: "Ingrid Ayala",
    credential: "Licenciada en Derecho | Derecho corporativo en Chubb | Derecho laboral en Chevez, Ruiz, Zamarripa y Cía.",
    institution: "Chubb | Chevez, Ruiz, Zamarripa y Cía.",
    family: "Humanidades",
    city: "Monterrey",
    role: "Profesionista invitado",
    photo: "/vocacional/orientadores/ingrid-ayala.jpg",
    linkedin: "https://www.linkedin.com/in/ingrid-ayala-5a2959196/",
    badges: [],
  },

  {
    name: "Violeta del Carmen Cerda Hernández",
    credential: "Egresada de la Universidad de Monterrey (UDEM) | Internal Control Intern en CEMEX",
    institution: "Universidad de Monterrey (UDEM) | CEMEX",
    family: "Negocios",
    city: "Monterrey",
    role: "Profesionista invitado",
    photo: "/vocacional/orientadores/violeta-del-carmen-cerda-hernandez.jpg",
    linkedin: "https://www.linkedin.com/in/violeta-del-carmen-cerda-hernandez-/",
    badges: [],
  },

  {
    name: "Francisco Javier Macías Segura",
    credential: "Ingeniero biotecnólogo | Ejecutivo comercial en Johnson & Johnson | Cofundador de CRICERE MX",
    institution: "Johnson & Johnson | CRICERE MX",
    family: "Ingenierías y Ciencias",
    city: "Monterrey",
    role: "Profesionista invitado",
    photo: "/vocacional/orientadores/francisco-javier-macias-segura.jpg",
    linkedin: "https://www.linkedin.com/in/franciscojms/",
    badges: [],
  },

  {
    name: "Darianna Alanís Caballero",
    credential: "Ingeniera biotecnóloga | Investigadora de Evaluación de Prototipos | R&D Market Scanning Analyst en Grupo AlEn | CRICERE MX",
    institution: "Grupo AlEn | CRICERE MX",
    family: "Ingenierías y Ciencias",
    city: "Monterrey",
    role: "Profesionista invitado",
    photo: "/vocacional/orientadores/darianna-alanis-caballero.jpg",
    linkedin: "https://www.linkedin.com/in/darianna-alan%C3%ADs-caballero-443603255/",
    badges: [],
  },

  {
    name: "Juan Carlos Reyes Noriega",
    credential: "Ingeniero biotecnólogo | Ex Director de COPARMEX Nuevo León | Program Manager en el Tec de Monterrey | CRICERE MX",
    institution: "COPARMEX Nuevo León | Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) | CRICERE MX",
    family: "Ingenierías y Ciencias",
    city: "Monterrey",
    role: "Profesionista invitado",
    photo: "/vocacional/orientadores/juan-carlos-reyes-noriega.jpg",
    linkedin: "https://www.linkedin.com/in/juancarlos-reyesnoriega/",
    badges: [],
  },

  {
    name: "José Hipólito García Ramos",
    credential: "Ingeniero biotecnólogo | Junior Product Development en Qualtia | CRICERE MX",
    institution: "Qualtia | CRICERE MX",
    family: "Ingenierías y Ciencias",
    city: "Monterrey",
    role: "Profesionista invitado",
    photo: "/vocacional/orientadores/jose-hipolito-garcia-ramos.jpg",
    linkedin: "https://www.linkedin.com/in/jhgr03/",
    badges: [],
  }
];

export const professionalInviteeFamilies: VocationalFamily[] = [
  "Ingenierías y Ciencias",
  "Medicina y Ciencias de la Salud",
  "Negocios",
  "Escuela de Arquitectura, Arte y Diseño",
  "Humanidades"
];
