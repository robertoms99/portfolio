import cn from 'classnames'
import IHeadingComponent from './Heading.interface'

const Heading = ({ className = '', text }: IHeadingComponent) => {
  return <h1 className={cn(className, 'heading')}>{text}</h1>
}

export default {
  Primary: ({ className = '', ...restProps }: IHeadingComponent) => (
    <Heading className={cn(className, 'heading--primary')} {...restProps} />
  ),
  Tertiary: ({ className = '', ...restProps }: IHeadingComponent) => (
    <Heading className={cn(className, 'heading--tertiary')} {...restProps} />
  )
}
