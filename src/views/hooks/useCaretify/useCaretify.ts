import { useCallback, useEffect, useMemo } from 'react'
import { throttle } from '../../../lib/wrapperify'
import useForceUpdate from '../useForceUpdate'

const useCaretify = () => {
  const DOMStrings = useMemo(
    () => ({
      caret: 'caret',
      caretStarting: 'caret-animation-starting',
      caretFinished: 'caret-animation-finished'
    }),
    []
  )

  const forceUpdate = useForceUpdate()

  const caretElements = document.getElementsByClassName(DOMStrings.caret) ?? []

  const caretifyTimeouts = useMemo(
    () => ({
      throttling: 150,
      typing: 70
    }),
    []
  )

  const caretElementsContentMap = (() => {
    const contentElementsMap = new Map<Element, string>()
    for (let index = 0; index < caretElements.length; index++) {
      const caretElement = caretElements[index]
      contentElementsMap.set(caretElement, caretElement.textContent ?? '')
      caretElement.innerHTML = '&nbsp;'
    }
    return contentElementsMap
  })()

  const typeCaretAnimation = useCallback(
    (caretElement: Element) => {
      caretElement.classList.toggle(DOMStrings.caretStarting, true)
      const caretElementContent = caretElementsContentMap.get(caretElement) ?? ''
      let index = 0
      const intervalId = setInterval(() => {
        caretElement.textContent = `${caretElement.textContent ?? ''}${caretElementContent[index]}`
        index++
        if (index === caretElementContent.length) clearCaretAnimation(caretElement, intervalId)
      }, caretifyTimeouts.typing) as unknown as number
    },
    [caretElementsContentMap]
  )

  const clearCaretAnimation = useCallback((caretElement: Element, intervalId: number) => {
    clearInterval(intervalId)
    setTimeout(() => {
      caretElement.classList.toggle(DOMStrings.caretStarting, false)
      caretElement.classList.toggle(DOMStrings.caretFinished, true)
    }, 1000)
  }, [])

  const caretElementIsVisible = useCallback((caretElement: Element) => {
    const { top } = caretElement.getBoundingClientRect()
    const elementPageOffsetY = top + window.pageYOffset
    const pageOffsetBottom = window.pageYOffset + window.innerHeight
    return elementPageOffsetY < pageOffsetBottom && elementPageOffsetY > window.pageYOffset
  }, [])

  const caretElementWasAnimated = useCallback((caretElement: Element) => {
    return caretElement.matches(`${DOMStrings.caretStarting},${DOMStrings.caretFinished}`)
  }, [])

  const attachCaretScrollEvent = () => {
    const handleScrollSectionThrottled = throttle(() => {
      window.requestAnimationFrame(() => {
        for (let index = 0; index < caretElements.length; index++) {
          const caretElement = caretElements[index]
          if (!caretElementWasAnimated(caretElement) && caretElementIsVisible(caretElement)) {
            typeCaretAnimation(caretElement)
          }
        }
      })
    }, caretifyTimeouts.throttling)

    window.onscroll = handleScrollSectionThrottled
    window.onload = handleScrollSectionThrottled

    return () => {
      window.onscroll = null
      window.onload = null
    }
  }

  useEffect(attachCaretScrollEvent, [caretElements])

  useEffect(() => {
    forceUpdate()
  }, [])
}

export default useCaretify
