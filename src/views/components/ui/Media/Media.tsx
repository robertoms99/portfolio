import cn from 'classnames'
import IMediaComponent from './Media.interface'

const Media = ({ className = '', objectClassName = '', object, ...restProps }: IMediaComponent) => {
  return (
    <figure className={cn('media', className)}>
      <img src={object} alt="me" className={cn('media__image', objectClassName)} {...restProps} />
    </figure>
  )
}

export default Media
