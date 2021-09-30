import React, { forwardRef } from "react"
import cn from 'classnames'

const Carousel= ({children,className=''}:any,ref:any)=>{
    const items = ('length' in children) ? React.Children.map(children,(child)=>(
        <div className="carouselify__item">
            {child}
        </div>
    )) : []

    return (
        <div className={cn('carouselify',className)} ref={ref}>
            <div className="carouselify__wrapper">
                <div className="carouselify__container">
                    <div className="carouselify__controls">
                        <button className="carouselify__control carouselify__control--prev"></button>
                        <button className="carouselify__control carouselify__control--next"></button>
                    </div>
                    {items}
                </div>
            </div>
      </div>
    )
}

export default forwardRef(Carousel)