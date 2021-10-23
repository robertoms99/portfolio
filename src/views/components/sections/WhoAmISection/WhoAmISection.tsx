import { useEffect, useState } from 'react'
import { MeImage, MyCV } from '../../assets'
import { Button, Link, Media } from '../../ui'
import cn from 'classnames'

const WhoAmISection = () => {
  const [show, setShow] = useState(false)

  useEffect(() => setShow(true), [])

  return (
    <section className="[ section ] [ who-am ]">
      <article className="[  who-am-banner who-am-banner--left ] [ col-left col-left--smallest ]">
        <div className="me-wrapper">
          <Media className={cn('me', show ? 'show' : '')} object={MeImage} />
        </div>
      </article>
      <article className="[ col-right ] [ who-am-banner who-am-banner--right ]">
        <h4 className="[ heading heading--accent ] [ caret ]">sobre mi</h4>
        <h1 className="heading heading--primary">Quien soy</h1>
        <p className="[ paragraph ] [ about-description ] [ block-decoration ] [ who-am-description ]">
          Soy Roberto Molina, software developer colombiano entusiasmado por aprender más todos los
          días y que le gusta trabajar en equipo. Mi gusto por el desarrollo comenzó en{' '}
          <span className="accent"> 2020 </span> cuando comencé a ver hermosas páginas web. Desde
          entonces me he sumergido en un rápido avance para crecer como profesional y aprovechar al
          máximo mi tiempo.
          <br />
        </p>
        <Link href={MyCV} download="Roberto Molina Curriculum" target="_blank">
          <Button.Primary className="who-am-button">ver mi cv</Button.Primary>
        </Link>
      </article>
    </section>
  )
}

export default WhoAmISection
