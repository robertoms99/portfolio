import { PROJECTS_LIST } from '../../../../config/contants'
import { useCarouselify } from '../../../hooks'
import { CaretSubtitle, Heading } from '../../ui'
import Carousel from '../../ui/Carousel/Carousel'
import ProjectItem from './components/ProjectItem'

const ProjectsSection = () => {
  return (
    <section className="[ section ] [ projects ]" id="projects">
      <div className="projects-wrapper">
        <CaretSubtitle text="mis proyectos" />
        <Heading.Primary text="ultimos trabajos" />
        <div className="projects-list">
          {PROJECTS_LIST.map((PROJECT) => (
            <ProjectItem key={PROJECT.id} project={PROJECT} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
