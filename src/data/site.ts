export const site = {
  name: 'Danny Stefano',
  role: 'Desarrollador de aplicaciones web',
  tagline: 'Construyo productos digitales claros, rápidos y listos para producción.',
  email: 'trejodanny187@gmail.com',
  about: {
    lead: 'Soy desarrollador de aplicaciones web. Me gusta construir productos completos, desde la idea hasta que alguien puede usarlos. También tengo conocimientos en ciberseguridad, que voy aprendiendo por mi cuenta.',
    points: [
      {
        title: 'Qué construyo',
        text: 'Apps web de punta a punta: reservas online, paneles de negocio, marketplaces, autenticación, APIs, bases de datos y flujos que la gente usa cada día.',
      },
      {
        title: 'Cómo trabajo',
        text: 'Empiezo por el problema, diseño el flujo y construyo la app por capas: interfaz clara, lógica sólida y datos bien organizados. Itero hasta que sea usable de verdad.',
      },
      {
        title: 'Qué busco',
        text: 'Colaborar en productos con un objetivo definido, aportando al desarrollo de aplicaciones útiles y mantenibles.',
      },
    ],
  },
  phone: '+34 670 701 033',
  links: {
    github: 'https://github.com/dannytrejo17',
    linkedin: 'https://www.linkedin.com/in/danny-yauri-trejo-a7229136b/',
    whatsapp: 'https://wa.me/34670701033?text=Hola%20Danny%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.',
  },
  stack: [
    {
      name: 'React',
      icon: 'https://cdn.simpleicons.org/react/61DAFB',
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.simpleicons.org/mysql/4479A1',
    },
    {
      name: 'Java',
      icon: 'https://cdn.simpleicons.org/openjdk/ED8B00',
    },
    {
      name: 'Spring Boot',
      icon: 'https://cdn.simpleicons.org/springboot/6DB33F',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    },
    {
      name: 'Postman',
      icon: 'https://cdn.simpleicons.org/postman/FF6C37',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.simpleicons.org/github/FFFFFF',
    },
  ],
  projects: [
    {
      title: 'Turnexa',
      year: '2026',
      summary:
        'Software de reservas para negocios locales: citas online, equipo, horarios y panel de control en un solo sitio.',
      stack: ['Java', 'Spring Boot', 'React', 'Next.js', 'Reservas', 'Panel'],
      live: 'https://turnexa.vercel.app/',
      repo: '#',
      highlight: 'Reservas online + panel de negocio',
      image: '/projects/turnexa.png',
    },
    {
      title: 'MiniMarket',
      year: '2026',
      summary:
        'Marketplace de segunda mano: publica productos, explora anuncios y gestiona tu carrito desde un enlace propio.',
      stack: ['Next.js', 'React', 'Node.js', 'Express', 'Marketplace'],
      live: 'https://minimarket-next.vercel.app/',
      repo: '#',
      highlight: 'Compra y venta de segunda mano',
      image: '/projects/minimarket.png?v=2',
    },
    {
      title: 'Tradelia',
      year: '2025',
      summary:
        'Marketplace local para comprar y vender cerca: filtra por provincia y ciudad y explora las publicaciones de tu zona.',
      stack: ['Java', 'Spring Boot', 'React', 'Marketplace'],
      live: 'https://tradelia-frontend.vercel.app/',
      repo: '#',
      highlight: 'Compra y venta cerca de ti',
      image: '/projects/tradelia.png?v=2',
    },
  ],
} as const
