import { CSSIcon, DevelopmentIcon, GithubIcon,GitIcon,HTMLIcon,IPProject,JSIcon,LinkedinIcon,PerformanceIcon,ReactJSIcon,ResponsiveIcon,SASSIcon,TwitterIcon } from "../views/components/assets";

const SOCIALS_ITEMS = [
    {
        id:1,
        link: 'https://github.com/robertoms99',
        title: 'github',
        icon: GithubIcon
    },
    {
        id:2,
        link: 'https://www.linkedin.com/in/robertoms99',
        title: 'linkedin',
        icon: LinkedinIcon
    },
    {
        id:3,
        link: 'https://twitter.com/Roberto19799892',
        title: 'twitter',
        icon: TwitterIcon
    }
]

const TECHNOLOGIES_LIST= [
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
        id:1,
        title: 'development',
        description: 'Creation of scalable and maintainable applications to solve problems. I like challenges.',
        icon: DevelopmentIcon
    },
    {
        id:2,
        title: 'responsive',
        description: 'Ability to define strategies to obtain adaptive websites to different types of devices. Mobile first always.',
        icon: ResponsiveIcon
    },
    {
        id:3,
        title: 'performance',
        description: 'High performance websites for users are a plus point, I take care of that.',
        icon: PerformanceIcon
    }
]

const PROJECTS_LIST = [
    {
        id: 1,
        title: 'IP-address-tracker',
        image: IPProject,
        description: 'This is a solution to the IP address tracker challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
        links:{
            github: 'https://github.com/robertoms99/IP-address-tracker',
            web: 'https://ip-address-tracker-challenge.netlify.app/'
        }
    },
    {
        id: 2,
        title: 'github-jobs-challenge',
        image: IPProject,
        description: 'This is a challenge to github job challenge (https://devchallenges.io/)',
        links:{
            github: 'https://github.com/robertoms99/github-jobs-challenge'
        }
    },
    {
        id: 3,
        title: 'My portfolio',
        image: IPProject,
        description: 'This is my personal portfolio made with ReactJS',
        links:{
            github: 'https://github.com/robertoms99/portfolio'
        }
    },
    {
        id: 4,
        image: IPProject,
        title: 'github-jobs-challenge',
        description: 'This is a challenge to github job challenge (https://devchallenges.io/)',
        links:{
            github: 'https://github.com/robertoms99/github-jobs-challenge'
        }
    }
]

const STORAGE_THEME_VALUES = {
    dark: 'dark',
    light: 'light'
}

const ACTIONS_TYPES = {
    TOGGLE_DARK:'TOGGLE_DARK'
}

const INITIAL_STATE= {
    theme: window.localStorage.getItem('theme') ?? STORAGE_THEME_VALUES.light
}

export {SOCIALS_ITEMS,TECHNOLOGIES_LIST,FEATURES_LIST,INITIAL_STATE,STORAGE_THEME_VALUES,ACTIONS_TYPES,PROJECTS_LIST }