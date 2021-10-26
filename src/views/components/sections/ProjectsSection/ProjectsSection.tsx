import { PROJECTS_LIST } from '../../../../config/contants'
import { useCarouselify } from '../../../hooks'
import { CaretSubtitle, Heading } from '../../ui'
import Carousel from '../../ui/Carousel/Carousel'
import ProjectItem from './components/ProjectItem'

const ProjectsSection = () => {
  const { carouselifyRef } = useCarouselify()

  return (
    <section className="[ section ] [ projects ]" id="projects">
      <div className="projects-wrapper">
        <CaretSubtitle text="mis proyectos" />
        <Heading.Primary text="ultimos trabajos" />
        <Carousel className="projects__carousel" ref={carouselifyRef}>
          {PROJECTS_LIST.map((PROJECT) => (
            <ProjectItem key={PROJECT.id} project={PROJECT} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default ProjectsSection
