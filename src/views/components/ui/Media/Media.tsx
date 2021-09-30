import cn from 'classnames'

const Media = ({className='',objectClassName='', object, ...restProps}:any)=>{
    return (
        <figure className={cn('media',className)}>
            <img src={object} alt="me" className={cn('media__image',objectClassName)} { ...restProps}/>
        </figure>
    )
}

export default Media