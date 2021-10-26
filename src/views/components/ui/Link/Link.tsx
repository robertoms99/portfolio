import cn from 'classnames'
import ILinkComponent from './Link.interface'

const Link = ({ children, className = '', ...restProps }: ILinkComponent) => {
  return (
    <a className={cn('link', className)} {...restProps}>
      {children}
    </a>
  )
}

export default Link
