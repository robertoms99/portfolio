import { ExternalIcon, GithubIcon } from '../../../../assets'
import { Icon, Link, Media } from '../../../../ui'

const ProjectItem = ({ project }: any) => {
  return (
    <div className="project">
      <div className="project__wrapper">
        <Media object={project.image} className="project__media" alt="project_media" />
        <div className="project__content">
          <div className="project__heading">
            <span className="[ accent ] [ project__title ]">{project.title}</span>
            <div className="project__options">
              {project.links.web !== undefined && (
                <Link
                  className="project__link"
                  title="ir al sitio"
                  href={project.links.web}
                  target="_blank"
                >
                  <Icon className="project__icon" SvgElement={ExternalIcon} />
                </Link>
              )}
              <Link
                className="project__link"
                title="ver codigo"
                href={project.links.github}
                target="_blank"
              >
                <Icon className="project__icon" SvgElement={GithubIcon} />
              </Link>
            </div>
          </div>
          <p className="[ project__description ] [ paragraph ]">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
