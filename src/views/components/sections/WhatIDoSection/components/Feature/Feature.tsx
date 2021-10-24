import { Icon } from '../../../../ui'

const Feature = ({ feature, index = 0 }: any) => {
  return (
    <div className={`card card--what-do card--what-do--${(index as number) + 1}`}>
      <div className="feature">
        <div className="feature__icon-wrapper">
          <Icon className="feature__icon" SvgElement={feature.icon} />
        </div>
        <h3 className="[ heading heading--tertiary ] [ feature__title ]">{feature.title}</h3>
        <p className="feature__description">{feature.description}</p>
      </div>
    </div>
  )
}

export default Feature
