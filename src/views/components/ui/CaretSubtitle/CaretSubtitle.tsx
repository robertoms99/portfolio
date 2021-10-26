import cn from 'classnames'
import ICaretSubtitle from './CaretSubtitle.interface'

const CaretSubtitle = ({ text = '', className }: ICaretSubtitle) => {
  return <h4 className={cn('[ heading heading--accent ] [ caret ]', className)}>{text}</h4>
}

export default CaretSubtitle
