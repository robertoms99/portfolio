import cn from 'classnames'
import {Button} from '../../../../ui'

const Banner = () =>{
    return (
        <div className="banner">
            <h4 className="[ heading heading--accent ] [ profession ] [ caret ]">software developer</h4>
            <h1 className="heading heading--primary name">Roberto Molina/&gt;</h1>
            <Button.Primary className="cta">view my projects</Button.Primary>
        </div>
    )
}

export default Banner