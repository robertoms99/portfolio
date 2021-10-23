import { toggleThemeAction } from '../../../../dispatchers'
import { BulbIcon } from '../../assets'
import { Icon, Link } from '../../ui/'
import { useDispatch } from 'react-redux'
import { Banner, Socials } from './components'

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
