import cn from 'classnames'
import IButtonComponent from './Button.interface'

const Button = ({ children, className = '', ...restProps }: IButtonComponent) => {
  return (
    <button className={cn('button', className)} {...restProps}>
      {children}
    </button>
  )
}

export default {
  Primary: ({ className = '', ...restProps }: IButtonComponent) => (
    <Button className={cn('button--primary', className)} {...restProps} />
  )
}
