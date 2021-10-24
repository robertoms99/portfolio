import cn from 'classnames'

const Link = ({ children, className = '', ...restProps }: any) => {
  return <a className={cn('link', className)} {...restProps}>{children}</a>
}

export default Link
