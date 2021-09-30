import { PROJECTS_LIST } from "../../../../config/contants"
import { useCarouselify } from "../../../hooks"
import Carousel from "../../ui/Carousel/Carousel"
import ProjectItem from "./components/ProjectItem"

const ProjectsSection = ()=> {
    const {carouselifyRef}= useCarouselify()

    return (
        <section className="[ section ] [ projects ]" id="projects">
          <h4 className="[ heading heading--accent ] [ caret ]">MY PROJECTS</h4>
          <h1 className="heading heading--primary">LASTEST WORKS</h1>
          <Carousel className="projects__carousel" ref={carouselifyRef}>
              {PROJECTS_LIST.map(PROJECT=>(
                <ProjectItem key={PROJECT.id} project={PROJECT}/>
              ))}
          </Carousel>
        </section>
    )
}

export default ProjectsSection