import { useCallback, useState } from 'react'

const useForceUpdate = () => {
  const [, setCountUpdate] = useState(0)

  const forceUpdate = useCallback(() => {
    setCountUpdate((prevCountUpdate) => prevCountUpdate + 1)
  }, [])

  return forceUpdate
}

export default useForceUpdate
