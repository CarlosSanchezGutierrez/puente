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
  },
];

export const institutionsByCity = {
  Monterrey: [
    "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
    "Universidad de Monterrey (UDEM)",
    "Universidad Autónoma de Nuevo León (UANL)",
  ],
  Tampico: [
    "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
    "Instituto de Estudios Superiores de Tamaulipas Anáhuac (IEST Anáhuac)",
    "Universidad del Noreste (UNE)",
    "Universidad Autónoma de Tamaulipas (UAT)",
  ],
} as const;

const itesm = "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)";
const iest = "Instituto de Estudios Superiores de Tamaulipas Anáhuac (IEST Anáhuac)";
const une = "Universidad del Noreste (UNE)";
const uat = "Universidad Autónoma de Tamaulipas (UAT)";

export const vocationalProfiles: VocationalProfile[
  {
    name: "Jorge Iván Hidalgo Reyes",
    city: "Monterrey",
    role: "Directiva académica",
    credential: "Director de Ingeniería Electrónica y Semiconductores",
    institution: "Tecnológico de Monterrey",
    photo: "/vocacional/orientadores/jorge-ivan-hidalgo-reyes.jpg",
    linkedin: "https://www.linkedin.com/in/jihidalgormx/",
    badges: ["Ingenierías y Ciencias", "Electrónica y Semiconductores"],
  },

  {
    name: "Juan Pablo Méndez Lomelí",
    city: "Monterrey",
    role: "Mentor universitario",
    credential: "Licenciatura en Arquitectura",
    institution: "Tecnológico de Monterrey",
    photo: "/vocacional/orientadores/juan-pablo-mendez-lomeli.jpg",
    linkedin: "https://www.linkedin.com/in/juan-pablo-m%C3%A9ndez-lomel%C3%AD/",
    badges: ["Arquitectura, Arte y Diseño", "Arquitectura"],
  },
] = [
  {
    name: "Carlos Sánchez Gutiérrez",
    credential: "Ingeniería en Tecnologías Computacionales (ITC)",
    institution: itesm,
    family: "Ingenierías y Ciencias",
    city: "Monterrey",
    role: "Mentor universitario",
    photo: "/mentores/carlos-sanchez-gutierrez.jpg",
    linkedin: "https://www.linkedin.com/in/carlos-sanchez-gutierrez-tec/",
  },
  {
    name: "Carlos Sánchez Gutiérrez",
    credential: "Ingeniería en Tecnologías Computacionales (ITC)",
    institution: itesm,
    family: "Ingenierías y Ciencias",
    city: "Tampico",
    role: "Mentor universitario",
    photo: "/mentores/carlos-sanchez-gutierrez.jpg",
    linkedin: "https://www.linkedin.com/in/carlos-sanchez-gutierrez-tec/",
  },
  {
    name: "Leonel Francisco Bailón Sifuentes",
    credential: "Ingeniería en Tecnologías Computacionales (ITC)",
    institution: itesm,
    family: "Ingenierías y Ciencias",
    city: "Monterrey",
    role: "Mentor universitario",
    photo: "/mentores/leonel-francisco-bailon-sifuentes.jpg",
    linkedin: "https://www.linkedin.com/in/leonelbailonsifuentes/",
  },
  {
    name: "Leonel Francisco Bailón Sifuentes",
    credential: "Ingeniería en Tecnologías Computacionales (ITC)",
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
    credential: "Ingeniería en Mecatrónica (IMT)",
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
    credential: "Ingeniería en Mecatrónica (IMT)",
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
    credential: "Ingeniería en Mecatrónica (IMT)",
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
    credential: "Medicina",
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
];

export const professionalInviteeFamilies: VocationalFamily[] = [
  "Ingenierías y Ciencias",
  "Medicina y Ciencias de la Salud",
  "Negocios",
  "Escuela de Arquitectura, Arte y Diseño",
  "Humanidades",
];
