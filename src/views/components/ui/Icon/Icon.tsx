import cn from 'classnames'

const Icon = ({ SvgElement, className = '' }: any) => {
  return (
        <SvgElement className={cn(className, '[ icon ]')} />
  )
}

export default Icon
