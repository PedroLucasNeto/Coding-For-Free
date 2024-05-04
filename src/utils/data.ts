export const collaborators = [
  {
    name: "Pedro Lucas",
    role: "Founder",
    picture: "/assets/images/contributors_pictures/pedro_lucas.jpg",
    contactLinks: {
      linkedin: "https://www.linkedin.com/in/pedrolucasneto/",
      github: "https://github.com/PedroLucasNeto",
      email: "mailto:pedrolukas_neto@hotmail.com",
    },
  },
  {
    name: "Harlon Garcia",
    role: "Co-founder",
    picture: "/assets/images/contributors_pictures/harlon_garcia.jpeg",
    contactLinks: {
      linkedin: "https://www.linkedin.com/in/harlongarcia/",
      github: "https://github.com/HarlonGarcia",
      email: "mailto:harloongarcia@gmail.com",
    },
  },
  {
    name: "Breno Duarte",
    role: "Collaborator",
    picture: "/assets/images/contributors_pictures/brenadas.jpeg",
    contactLinks: {
      linkedin: "https://www.linkedin.com/in/breno-freitas-duarte/",
      github: "https://github.com/brenooduarte",
      email: "mailto:brenoduarte655@hotmail.com",
    },
  },
];

//ATTENTION: The order must be the same as the order of the collaborators and repeat as they have more websites;
// If there's more than one website for a collaborator put them in the end of the list
export const sites = [
  {
    name: "CGRH",
    description:"",
    image: "/assets/images/cgrh/cgrh_banner.png",
    githubLink: "https://github.com/PedroLucasNeto/cgrh",
    siteLink: "https://cgrh.com.br/",
    developedBy: "Pedro Lucas",
    stack: ["React Js", "Tailwindcss", "TailwindComponentes"],
  },
  {
    name: "Dr Thiago Freitas",
    description:"",
    image: "/assets/images/dr_thiago_freitas/dr_thiago_freitas_banner.jpeg",
    githubLink: "https://github.com/brenooduarte/consultorio-dr-thiago-freitas",
    siteLink: "https://thiagofreitasodonto.netlify.app/",
    developedBy: "Breno Duarte",
    stack: ["React Js", "JavaScript", "HTML", "Scss"],
  },
  {
    name: "Forzam Detail",
    description:"",
    image: "/assets/images/forzam_detail/forzam_banner.png",
    githubLink: "https://github.com/PedroLucasNeto/Forzam-Detail",
    siteLink: "https://forzamdetail.netlify.app/",
    developedBy: "Pedro Lucas",
    stack: ["React Js", "Typescript", "Scss", "Swiper", "Framer Motion"],
  },

  {
    name: "Natufit Especiarias",
    description:"",
    image: "/assets/images/natufit_especiarias/natufit_banner.png",
    githubLink: "https://github.com/PedroLucasNeto/Natufit",
    siteLink: "https://natufit.netlify.app/",
    developedBy: "Pedro Lucas",
    stack: ["React Js", "Typescript", "Scss", "Swiper", "Framer Motion"],
  },
];

export const processes = [
  {
    title: "Selection",
    topics: [
      "First we find someone who needs a website.",
      "We prioritize people close to us that have small businesses or are free agents.",
    ],
    image: "/assets/images/Selection.png",
  },
  {
    title: "Goal identification",
    topics: [
      "We talk to our clients to make sure we can attend their needs.",
      "Clear and consistent communication is maintained throughout this process to ensure that everyone is on the same page",
    ],
    image: "/assets/images/Goal.png",
  },

  {
    title: "Mapping and Sketching",
    topics: [
      "After identifying the client's needs, we start mapping the pages and sections the site is going to have.",
      "From there on we design a prototype using Figma to guide us through the process.",
    ],
    image: "/assets/images/Mapping.png",
  },
  {
    title: "Creation",
    topics: [
      "Now that we have a bigger picture of the project in mind, we start developing the website.",
      "By creating all the client's needs that were accorded in the previous steps.",
    ],
    image: "/assets/images/Creation.png",
  },
  {
    title: "Approving and Testing",
    topics: [
      "After the client's approval of the website, we make sure it's working well and is ready to launch.",
      "If it isn't, we fix it!",
    ],
    image: "/assets/images/Approving.png",
  },
  {
    title: "Launch",
    topics: [
      "Once everything's working beautifully, it's time to deploy our website.",
      "After that, our handiwork is complete, and the client now has their own online presence!",
    ],
    image: "/assets/images/Launch.png",
  },
];
