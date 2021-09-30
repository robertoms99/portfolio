
const DOM_STRING = {
  carouselify: 'carouselify',
  controls: 'carouselify__control',
  items: 'carouselify__item',
  prevControl: 'carouselify__control--prev',
  nextControl: 'carouselify__control--next',
  indicators: 'carouselify__indicators',
  dot: 'carouselify__dot',
  dotActive: 'carouselify__dot--active'
}

const CUSTOM_PROPERTIES = {
  itemsToShow: '--items-to-display',
  translateDuration: '--translate-duration',
  slide: '--slide'
}

const DEVICES_BREAKPOINTS = new Map([
  ['XSM', 22.5],
  ['SM', 32],
  ['MD', 48],
  ['LG', 62],
  ['XLG', 75]
])

const INITIAL_CONFIGURATION_CAROUSELIFY = {
  autoPlay: false,
  itemsToShow: 1,
  throttling: 300,
  transitionThrottling: 3500,
  responsive: []
}

const bindElementWithConfiguration = new Map()

const initCarouselify = (element: Element, configuration: CarouselifyConfigInterface) => {
  if (isValidCarouselifyElement(element)) {
    saveConfiguration(element, configuration)
    applyConfiguration(element)
    attachControlsHandler(element)
  } else throw new Error('Element is not a valid carouselify element')
}

const saveConfiguration = (element: Element, configuration: CarouselifyConfigInterface) => {
  bindElementWithConfiguration.set(element, Object.assign(INITIAL_CONFIGURATION_CAROUSELIFY, configuration))
}

const attachMatchMediaHandler = (element: Element, responsiveConfigurationList: CarouselifyResponsiveConfigInterface[], initialConfiguration: CarouselifyConfigInterface) => {
  /* responsiveConfigurationList.forEach((responsiveConfiguration: CarouselifyResponsiveConfigInterface) => {
     const mqList = window.matchMedia(`(max-width: ${DEVICES_BREAKPOINTS.get(responsiveConfiguration.device)}em)`)
     mqList.addEventListener('change', () => {
       if (mqList.matches) {
         bindElementWithConfiguration.set(element, responsiveConfiguration)
         setConfigurationInlineStyles(element, responsiveConfiguration)
       }
     })
   })*/
  console.log(responsiveConfigurationList)

  const testMqList = () => {
    switch (true) {
      case mqList1.matches:
        bindElementWithConfiguration.set(element, { itemsToShow: 1 })
        setConfigurationInlineStyles(element, { itemsToShow: 1 })
        break
      case mqList2.matches:
        bindElementWithConfiguration.set(element, { itemsToShow: 2 })
        setConfigurationInlineStyles(element, { itemsToShow: 2 })
        break
      case mqList3.matches:
        bindElementWithConfiguration.set(element, initialConfiguration)
        setConfigurationInlineStyles(element, initialConfiguration)
    }
  }

  const mqList1 = window.matchMedia(`(max-width: ${(DEVICES_BREAKPOINTS.get('MD') ?? 0) - 1}em)`)
  const mqList2 = window.matchMedia(`(max-width: ${(DEVICES_BREAKPOINTS.get('LG') ?? 0) - 1}em) and (min-width: ${DEVICES_BREAKPOINTS.get('MD')}em)`)
  const mqList3 = window.matchMedia(`(min-width: ${DEVICES_BREAKPOINTS.get('LG')}em)`)
  mqList1.addEventListener('change', testMqList)
  mqList2.addEventListener('change', testMqList)
  mqList3.addEventListener('change', testMqList)

  testMqList()
}

const applyConfiguration = (element: Element) => {
  const configurationLoaded: CarouselifyConfigInterface = bindElementWithConfiguration.get(element) ?? INITIAL_CONFIGURATION_CAROUSELIFY
  const initialConfiguration = { ...configurationLoaded }
  setConfigurationInlineStyles(element, initialConfiguration)
  if ((configurationLoaded.responsive?.length ?? 0) > 0) {
    attachMatchMediaHandler(element, configurationLoaded.responsive ?? [], initialConfiguration)
  }
}

const setConfigurationInlineStyles = (element: Element, config: CarouselifyConfigInterface) => {
  setInlineStyles(element, CUSTOM_PROPERTIES.itemsToShow, (config.itemsToShow ?? 1) + '')
  setInlineStyles(element, CUSTOM_PROPERTIES.slide, '0')
  setInlineStyles(element, CUSTOM_PROPERTIES.translateDuration, (config.throttling ?? 300) + '')
  // renderDotsIndicators(element)
}

/* const renderDotsIndicators = (element: Element) => {
  let indicatorElement = element.querySelector(`.${DOM_STRING.indicators}`)
  if (indicatorElement === null) {
    indicatorElement = document.createElement('div')
    indicatorElement.className = DOM_STRING.indicators
    element.insertAdjacentElement('beforeend', indicatorElement)
  }
  indicatorElement.innerHTML = ''
  const slidesToShow = getCarouselSlidesToShow(element)
  nth(slidesToShow, (index: number) => {
    const dotElement = document.createElement('span')
    dotElement.className = DOM_STRING.dot + ' ' + (index === 0 ? DOM_STRING.dotActive : '')
    indicatorElement?.insertAdjacentElement('beforeend', dotElement)
  })
} */

const getCarouselElementItemsLength = (element: Element): number => {
  const carouselifyItemsElements = element.getElementsByClassName(DOM_STRING.items)
  return carouselifyItemsElements.length
}

const getCarouselSlidesToShow = (element: Element): number => {
  const configurationLoaded: CarouselifyConfigInterface = bindElementWithConfiguration.get(element) ?? INITIAL_CONFIGURATION_CAROUSELIFY
  const itemsToShow = configurationLoaded.itemsToShow ?? 1
  return Math.ceil(getCarouselElementItemsLength(element) / itemsToShow) - 1
}

const attachControlsHandler = (element: Element) => {
  const controlsButtons = element.getElementsByClassName(DOM_STRING.controls)
  const dotsIndicatorsElements = element.getElementsByClassName(DOM_STRING.dot)
  const configurationLoaded: CarouselifyConfigInterface = bindElementWithConfiguration.get(element) ?? INITIAL_CONFIGURATION_CAROUSELIFY
  const isAutoPlay = configurationLoaded.autoPlay ?? false
  const trottlingTransition = configurationLoaded.transitionThrottling
  let currentIndex = 0
  // let oldIndex = currentIndex

  for (const controlButton of (controlsButtons as any)) {
    controlButton.addEventListener('click', (e: Event) => {
      const originalTarget = e.currentTarget as Element
      handleControlSlide(element, originalTarget.matches(`.${DOM_STRING.prevControl}`) ? -1 : 1)
    })
  }

  for (let index = 0; index < dotsIndicatorsElements.length; index++) {
    const dotElement = dotsIndicatorsElements[index]
    dotElement.addEventListener('click', () => handleControlSlide(element, index - currentIndex)
    )
  }

  const handleControlSlide = (element: Element, order: number) => {
    const slidesToShow = getCarouselSlidesToShow(element)
    let value = currentIndex + order
    value = value > slidesToShow ? 0 : value
    //  oldIndex = currentIndex
    currentIndex = Math.max(0, Math.min((slidesToShow), value))
    setInlineStyles(element, CUSTOM_PROPERTIES.slide, currentIndex + '')
    //  setDotIndicator(currentIndex)
  }

  /* const setDotIndicator = (slide: number) => {
     const lastDotActive = dotsIndicatorsElements[oldIndex]
     if (lastDotActive !== null) lastDotActive.classList.toggle(DOM_STRING.dotActive, false)
     dotsIndicatorsElements[slide].classList.toggle(DOM_STRING.dotActive, true)
   } */

  if (isAutoPlay) setInterval(handleControlSlide, trottlingTransition, element, 1)

}

const setInlineStyles = (element: Element, property: string, value: string) => {
  const carouselifyElementInlineStyles = (element as HTMLElement).style
  carouselifyElementInlineStyles.setProperty(property, value)
}

const isValidCarouselifyElement = (element: Element) => element !== null && document.contains(element) && element.matches(`.${DOM_STRING.carouselify}`)


export { initCarouselify }

