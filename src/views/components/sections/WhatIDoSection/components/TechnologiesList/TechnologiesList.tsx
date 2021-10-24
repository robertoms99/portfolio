import { TECHNOLOGIES_LIST } from '../../../../../../config/contants'
import { Icon } from '../../../../ui'

const TechnologiesList = () => {
  return (
        <ul className="[ list ] [ technologies ]">
            {TECHNOLOGIES_LIST.map(TECHNOLOGY => (
                <li key={TECHNOLOGY.id} className="[ item ] [ list__item ] [ technologies__item ]">
                    <Icon className="technologies__icon" SvgElement={TECHNOLOGY.icon}/>
                    <span className="technologies__label">{TECHNOLOGY.label}</span>
                </li>
            ))}
        </ul>
  )
}

export default TechnologiesList
