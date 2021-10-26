import { Button, CaretSubtitle, Heading, Link } from '../../../../ui'

const Banner = () => {
  return (
    <div className="banner">
      <CaretSubtitle className="[ profession ]" text="software developer" />
      <Heading.Primary className="name" text="Roberto Molina/&gt;" />
      <Link href="#projects">
        <Button.Primary className="cta">ver proyectos</Button.Primary>
      </Link>
    </div>
  )
}

export default Banner
