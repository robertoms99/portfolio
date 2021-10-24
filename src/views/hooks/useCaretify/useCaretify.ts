import { useEffect } from 'react'
import { initializerCaretAnimations } from '../../../lib/caretify'

const useCaretify = () => {
  useEffect(initializerCaretAnimations, [])
}

export default useCaretify
