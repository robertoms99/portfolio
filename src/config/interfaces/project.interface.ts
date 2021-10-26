interface IProject {
  id: number
  title: string
  image: string
  description: string
  links: {
    github?: string
    web?: string
  }
}

export default IProject
