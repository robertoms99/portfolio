import { useDispatch } from 'react-redux'
import { Icon, Link } from '../../ui/'
import { Banner, Socials } from './components'
import { BulbIcon } from '../../assets'
import { toggleThemeAction } from '../../../../actions'

const About = () => {
  const dispatch = useDispatch()

  return (
    <section className="[ section ] [ about ]">
      <Link className="theme" onClick={() => dispatch(toggleThemeAction())}>
        <Icon SvgElement={BulbIcon} />
      </Link>
      <Banner />
      <Socials />
    </section>
  )
}

export default About
