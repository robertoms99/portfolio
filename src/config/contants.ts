import {
  CSSIcon,
  DevelopmentIcon,
  GithubIcon,
  GithubJobsImage,
  GitIcon,
  HTMLIcon,
  IPProject,
  JSIcon,
  LinkedinIcon,
  PerformanceIcon,
  PortfolioImage,
  ReactJSIcon,
  ResponsiveIcon,
  SASSIcon,
  TwitterIcon
} from '../views/components/assets'

const SOCIALS_ITEMS = [
  {
    id: 1,
    link: 'https://github.com/robertoms99',
    title: 'github',
    icon: GithubIcon
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/robertoms99',
    title: 'linkedin',
    icon: LinkedinIcon
  },
  {
    id: 3,
    link: 'https://twitter.com/Roberto19799892',
    title: 'twitter',
    icon: TwitterIcon
  }
]

const TECHNOLOGIES_LIST = [
  {
    id: 1,
    icon: HTMLIcon,
    label: 'Html'
  },
  {
    id: 2,
    icon: CSSIcon,
    label: 'Css'
  },
  {
    id: 3,
    icon: JSIcon,
    label: 'JavaScript'
  },
  {
    id: 4,
    icon: SASSIcon,
    label: 'Sass'
  },
  {
    id: 5,
    icon: ReactJSIcon,
    label: 'Reactjs'
  },
  {
    id: 6,
    icon: GitIcon,
    label: 'Git'
  }
]

const FEATURES_LIST = [
  {
    id: 1,
    title: 'desarrollo',
    description:
      'Creación de aplicaciones escalables y mantenibles para resolver problemas. Me gustan los retos.',
    icon: DevelopmentIcon
  },
  {
    id: 2,
    title: 'adaptable',
    description:
      "Capacidad para definir estrategias para obtener sitios web adaptables a diferentes tipos de dispositivos. 'mobile first' siempre.",
    icon: ResponsiveIcon
  },
  {
    id: 3,
    title: 'rendimiento',
    description:
      'Los sitios web de alto rendimiento para los usuarios son un punto a favor, yo me encargo de eso.',
    icon: PerformanceIcon
  }
]

const PROJECTS_LIST = [
  {
    id: 1,
    title: 'IP-address-tracker',
    image: IPProject,
    description: "Esta es una solución al challenge 'IP-address-tracker' en Frontend Mentor.",
    links: {
      github: 'https://github.com/robertoms99/IP-address-tracker',
      web: 'https://ip-address-tracker-challenge.netlify.app/'
    }
  },
  {
    id: 2,
    title: 'github jobs',
    image: GithubJobsImage,
    description: "Este es la solucion para el challenge 'github jobs' en https://devchallenges.io/",
    links: {
      github: 'https://github.com/robertoms99/github-jobs-challenge',
      web: 'https://job-searcher-challenge.netlify.app/'
    }
  },
  {
    id: 3,
    title: 'My portfolio',
    image: PortfolioImage,
    description: 'Este es mi portafolio personal construido con ReactJs',
    links: {
      github: 'https://github.com/robertoms99/portfolio'
    }
  }
]

const STORAGE_THEME_VALUES = {
  dark: 'dark',
  light: 'light'
}

const ACTIONS_TYPES = {
  TOGGLE_DARK: 'TOGGLE_DARK'
}

const INITIAL_STATE = {
  theme: window.localStorage.getItem('theme') ?? STORAGE_THEME_VALUES.light
}

export {
  SOCIALS_ITEMS,
  TECHNOLOGIES_LIST,
  FEATURES_LIST,
  INITIAL_STATE,
  STORAGE_THEME_VALUES,
  ACTIONS_TYPES,
  PROJECTS_LIST
}
