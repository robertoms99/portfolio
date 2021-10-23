import { FEATURES_LIST } from '../../../../config/contants'
import { Feature } from './components'
import TechnologiesList from './components/TechnologiesList'

const WhatIDoSection = () => {
  return (
    <section className="[ what-do ]">
      <div className="what-do-wrapper">
        <article className="[ what-do-banner what-do-banner--left ] [ col-left ]">
          <h4 className="[ heading heading--accent ] [ caret ]">mis skills</h4>
          <h1 className="heading heading--primary">Lo que hago</h1>
          <p className="[ paragraph ] [ what-do-description ] [ block-decoration ]">
            Desarrollo de interfaces rápidas y accesibles con capacidad de adaptacion. Me gusta usar
            técnicas como <span className="accent"> mobile first </span> para lograrlo. Aparte de
            eso, en mi flujo de trabajo habitual existen metodologías útiles como{' '}
            <span className="accent"> git-flow </span> para una gran estructuración. <br />
            Actualmente trabajo con las siguientes tecnologías:
          </p>
          <TechnologiesList />
        </article>
        <article className="[ what-do-banner what-do-banner--right ] [ col-right ]">
          <figure className="card-wrapper card-wrapper--what-do">
            {FEATURES_LIST.map((FEATURE, index) => (
              <Feature feature={FEATURE} index={index} key={FEATURE.id} />
            ))}
          </figure>
        </article>
      </div>
    </section>
  )
}

export default WhatIDoSection
