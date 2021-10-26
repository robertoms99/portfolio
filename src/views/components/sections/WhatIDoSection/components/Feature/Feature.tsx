import { Heading, Icon } from '../../../../ui'
import IFeatureComponent from './Feature.interface'

const Feature = ({ feature, index = 0 }: IFeatureComponent) => {
  return (
    <div className={`card card--what-do card--what-do--${(index as number) + 1}`}>
      <div className="feature">
        <div className="feature__icon-wrapper">
          <Icon className="feature__icon" SvgElement={feature.icon} />
        </div>
        <Heading.Tertiary className="[ feature__title ]" text={feature.title} />
        <p className="feature__description">{feature.description}</p>
      </div>
    </div>
  )
}

export default Feature
