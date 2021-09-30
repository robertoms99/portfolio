import { useEffect, useState } from "react"
import { MeImage } from "../../assets"
import { Button,Media } from "../../ui"

const WhoAmISection = ()=> {
    const [show,setShow] = useState(false)

    useEffect(()=> setShow(true),[])

    return (
        <section className="[ section ] [ who-am ]">
            <article className="[  who-am-banner who-am-banner--left ] [ col-left col-left--smallest ]">
                <div className="me-wrapper">
                   <Media className={`me ${show ? 'show': ''}`} object={MeImage}/>
                </div>
            </article>
                <article className="[ col-right ] [ who-am-banner who-am-banner--right ]">
                <h4 className="[ heading heading--accent ] [ caret ]">about me</h4>
                <h1 className="heading heading--primary">Who I am</h1>
                <p className="[ paragraph ] [ about-description ] [ block-decoration ] [ who-am-description ]">
                    I am Roberto Molina, a software developer from Colombia, enthusiastic about learning more every day and that
                    He like to work in team. My taste for development started in <span className="accent">2020</span> when I started seeing beautiful web pages.
                    Since then I have immersed myself in a rapid advance to improve and make the most of my time.<br />
                </p>
                <Button.Primary className="who-am-button">view resume</Button.Primary>
            </article>
        </section>
    )
}

export default WhoAmISection