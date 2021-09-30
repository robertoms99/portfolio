interface CarouselifyConfigMixin {
  autoPlay?: boolean
  itemsToShow?: number
  throttling?: number
  transitionThrottling?: number
}

interface CarouselifyResponsiveConfigInterface extends CarouselifyConfigInterface {
  device: 'XSM' | 'SM' | 'MD' | 'LG' | 'XLG'
}

interface CarouselifyConfigInterface extends CarouselifyConfigMixin {
  responsive?: CarouselifyResponsiveConfigInterface[]
}
