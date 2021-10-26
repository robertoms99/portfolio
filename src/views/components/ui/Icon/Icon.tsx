import cn from 'classnames'
import IIconComponent from './Icon.interface'

const Icon = ({ SvgElement, className = '' }: IIconComponent) => {
  return <SvgElement className={cn(className, '[ icon ]')} />
}

export default Icon
