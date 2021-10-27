import { MyCV } from '../../assets'
import { Button, CaretSubtitle, Heading, Link, Media } from '../../ui'
import { MePhoto } from './components'

const WhoAmISection = () => {
  return (
    <section className="[ section ] [ who-am ]">
      <div className="who-am-wrapper">
        <article className="[  who-am-banner who-am-banner--left ] [ col-left col-left--smallest ]">
          <MePhoto />
        </article>
        <article className="[ col-right ] [ who-am-banner who-am-banner--right ]">
          <CaretSubtitle text="sobre mi" />
          <Heading.Primary text="Quien soy" />
          <p className="[ paragraph ] [ about-description ] [ block-decoration ] [ who-am-description ]">
            Soy Roberto Molina, un software developer autodidacta y apasionado por aprender más
            todos los días sobre nuevas tecnologias. Mi gusto por el desarrollo comenzó en
            <span className="accent"> 2019 </span> cuando comencé a ver hermosas páginas web. Desde
            entonces me he sumergido en un rápido avance para crecer como profesional y aprovechar
            al máximo mi tiempo.
            <br />
          </p>
          <Link href={MyCV} download="Roberto Molina Curriculum" target="_blank">
            <Button.Primary className="who-am-button">ver curriculum</Button.Primary>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default WhoAmISection
