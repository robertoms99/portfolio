import { useEffect, useRef } from "react"
import { initCarouselify } from "../../../lib/carouselify"

const useCarouselify = ()=>{
    const carouselifyRef = useRef(null)

    useEffect(()=>{
        initCarouselify((carouselifyRef.current as unknown as Element), {
            itemsToShow: 3,
            throttling: 500,
            autoPlay: false,
            responsive: [
              {
                device: 'SM',
                itemsToShow: 1
              },
              {
                device: 'MD',
                itemsToShow: 2
              }
            ]
          })
    },[])

    return {
        carouselifyRef
    }
}

export default useCarouselify