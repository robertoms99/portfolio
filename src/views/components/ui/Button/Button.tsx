import cn from 'classnames'

const Button = ({ children, className = '', ...restProps }: any) => {
  return (
    <button className={cn('button', className)} {...restProps}>
      {children}
    </button>
  )
}

/* eslint-disable import/no-anonymous-default-export */
export default {
  Primary: ({ className = '', ...restProps }) => (
    <Button className={cn('button--primary', className)} {...restProps} />
  )
}
