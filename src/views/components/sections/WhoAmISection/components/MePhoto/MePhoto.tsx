import cn from 'classnames'
import { Media } from '../../../../ui'
import { MeImage } from '../../../../assets'

const MePhoto = () => {
  return (
    <div className="me-wrapper">
      <Media className={cn('me', 'show')} object={MeImage} alt="my photo" />
    </div>
  )
}

export default MePhoto
