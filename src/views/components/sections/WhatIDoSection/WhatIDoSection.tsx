import { FEATURES_LIST } from "../../../../config/contants"
import { Feature } from "./components"
import TechnologiesList from "./components/TechnologiesList"

const WhatIDoSection = ()=> {
    return (
        <section className="[ what-do ]">
            <article className="[ what-do-banner what-do-banner--left ] [ col-left ]">
                <h4 className="[ heading heading--accent ] [ caret ]">my skills</h4>
                <h1 className="heading heading--primary">What i do</h1>
                <p className="[ paragraph ] [ what-do-description ] [ block-decoration ]">
                    Development of accessible, fast interfaces with the ability to be responsive.
                    I like to use techniques like <span className="accent"> mobile first</span> to achieve it. Besides that,
                    in my usual workflow there are useful methodologies like <span className="accent">git-flow</span> for a great structuring. <br />
                    Currently, I work with the following technologies:
                </p>
                <TechnologiesList />
        </article>
        <article className="[ what-do-banner what-do-banner--right ] [ col-right ]">
          <figure className="card-wrapper card-wrapper--what-do">
              {FEATURES_LIST.map((FEATURE,index)=>(
                  <Feature feature={FEATURE} index={index} key={FEATURE.id}/>
              ))}
          </figure>
        </article>
      </section>
    )
}

export default WhatIDoSection