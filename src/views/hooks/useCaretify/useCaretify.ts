import { useCallback, useEffect, useState } from 'react'
import { throttle } from '../../../lib/wrapperify'

const DOM_STRINGS = {
  caret: 'caret',
  caretStarting: 'caret-animation-starting',
  caretFinished: 'caret-animation-finished'
}

const CARETIFY_TIMEOUTS = {
  throttling: 150,
  typing: 70
}

const useCaretify = () => {
  const [caretElements, setCaretElements] = useState<HTMLCollectionOf<Element> | null>(null)

  const [caretElementsContentMap, setCaretElementsContentMap] = useState<Map<Element, string>>(
    new Map()
  )

  const clearCaretAnimation = useCallback((caretElement: Element, intervalId: number) => {
    clearInterval(intervalId)
    setTimeout(() => {
      caretElement.classList.toggle(DOM_STRINGS.caretStarting, false)
      caretElement.classList.toggle(DOM_STRINGS.caretFinished, true)
    }, 1000)
  }, [])

  const typeCaretAnimation = (caretElement: Element) => {
    caretElement.classList.toggle(DOM_STRINGS.caretStarting, true)
    const caretElementContent = caretElementsContentMap.get(caretElement) ?? ''
    let index = 0
    if (caretElementContent.length === 0) return
    const intervalId = setInterval(() => {
      caretElement.textContent = `${caretElement.textContent ?? ''}${caretElementContent[index]}`
      index++
      if (index === caretElementContent.length) clearCaretAnimation(caretElement, intervalId)
    }, CARETIFY_TIMEOUTS.typing) as unknown as number
  }

  const caretElementWasAnimated = useCallback((caretElement: Element) => {
    return caretElement.matches(`.${DOM_STRINGS.caretStarting},.${DOM_STRINGS.caretFinished}`)
  }, [])

  const handleScrollSectionThrottled = useCallback(
    throttle(() => {
      if (caretElements === null || caretElementsContentMap.size === 0) return
      window.requestAnimationFrame(() => {
        for (let index = 0; index < caretElements.length; index++) {
          const caretElement = caretElements[index]
          if (!caretElementWasAnimated(caretElement) && caretElementIsVisible(caretElement)) {
            typeCaretAnimation(caretElement)
          }
        }
      })
    }, CARETIFY_TIMEOUTS.throttling),
    [caretElements, caretElementsContentMap]
  )

  const caretElementIsVisible = useCallback((caretElement: Element) => {
    const { top } = caretElement.getBoundingClientRect()
    const elementPageOffsetY = top + window.pageYOffset
    const pageOffsetBottom = window.pageYOffset + window.innerHeight
    return elementPageOffsetY < pageOffsetBottom && elementPageOffsetY > window.pageYOffset
  }, [])

  const componentDidMount = () => {
    setCaretElements(document.getElementsByClassName(DOM_STRINGS.caret))
  }

  const componentDidUpdate = () => {
    if (caretElements === null) return
    const contentElementsMap = new Map<Element, string>()
    for (let index = 0; index < caretElements.length; index++) {
      const caretElement = caretElements[index]
      contentElementsMap.set(caretElement, caretElement.textContent ?? '')
      caretElement.innerHTML = '&nbsp;'
    }

    setCaretElementsContentMap(contentElementsMap)
  }

  useEffect(componentDidMount, [])

  useEffect(componentDidUpdate, [caretElements])

  useEffect(() => {
    if (caretElementsContentMap.size === 0) return

    window.onload = handleScrollSectionThrottled
    window.onscroll = handleScrollSectionThrottled

    return () => {
      window.onscroll = null
      window.onload = null
    }
  }, [caretElementsContentMap])
}

export default useCaretify
