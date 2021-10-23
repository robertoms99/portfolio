import { SOCIALS_ITEMS } from '../../../../../../config/contants'
import { Icon, Link } from '../../../../ui'

const Socials = () => {
  return (
    <div className="socials">
      {SOCIALS_ITEMS.map((SOCIAL) => (
        <Link
          className="socials__item"
          href={SOCIAL.link}
          target="_blank"
          title={SOCIAL.title}
          key={SOCIAL.id}>
          <Icon className="socials__icon" SvgElement={SOCIAL.icon} />
        </Link>
      ))}
    </div>
  )
}

export default Socials
