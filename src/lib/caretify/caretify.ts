import { throttle } from "../wrapperify"

const caretElementContentMap = new Map()
let caretElements: HTMLCollection
const THROTTLING_LIMIT = 150
const THROTTLING_TYPING = 70
const DOM_STRING = {
  caret: 'caret',
  caretStarting: 'caret-animation-starting',
  caretFinished: 'caret-animation-finished'
}

const initializerCaretAnimations = () => {
  caretElements = document.getElementsByClassName(DOM_STRING.caret) ?? []
  mappingContentCaretElements(caretElements)
  attachCaretScrollEvent()
}

const mappingContentCaretElements = (caretElements: HTMLCollection) => {
  for (const caretElement of (caretElements as any)) {
    caretElementContentMap.set(caretElement, caretElement.textContent)
    caretElement.innerHTML = '&nbsp;'
  }
}

const attachCaretScrollEvent = () => {
  const handleScrollTopSectionWrapper = throttle(handleScrollTopSection, THROTTLING_LIMIT)
  window.onscroll = handleScrollTopSectionWrapper
  window.onload = handleScrollTopSectionWrapper
}

const clearCaretAnimation = (caretElement: Element, intervalId: number) => {
  clearInterval(intervalId);
  setTimeout(() => {
    caretElement.classList.toggle(DOM_STRING.caretStarting, false)
    caretElement.classList.toggle(DOM_STRING.caretFinished, true)
  }, 1000)
}

const handleScrollTopSection = () => {

  const isVisible = (caretElement: Element): boolean => {
    const { top } = caretElement.getBoundingClientRect()
    const elementPageOffsetY = top + window.pageYOffset
    const pageOffsetBottom = window.pageYOffset + window.innerHeight
    return (elementPageOffsetY < pageOffsetBottom) && (elementPageOffsetY > window.pageYOffset)
  }

  window.requestAnimationFrame(() => {
    for (const caretElement of (caretElements as any)) if (!(caretElement.matches(`.${DOM_STRING.caretStarting}, .${DOM_STRING.caretFinished}`)) && isVisible(caretElement)) typeCaretAnimation(caretElement)
  })
}

const typeCaretAnimation = (caretElement: Element) => {
  caretElement.classList.toggle(DOM_STRING.caretStarting, true)
  const caretElementContent = caretElementContentMap.get(caretElement) ?? ''
  let index = 0
  const duration = THROTTLING_TYPING

  const intervalId = setInterval(
    () => {
      caretElement.textContent = caretElement.textContent + (caretElementContent[index] ?? '');
      index++
      if (index === (caretElementContent.length)) {
        clearCaretAnimation(caretElement, intervalId)
      }
    },
    duration
  ) as unknown as number
}

export { initializerCaretAnimations }

