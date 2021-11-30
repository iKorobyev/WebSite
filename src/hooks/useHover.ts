import { useState, useEffect, useRef } from 'react'

const useHover = () => {
  const [value, setValue] = useState<boolean>(false)
  const ref = useRef<any>(null)
  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)
  useEffect(() => {
    const object = ref.current
    if (object) {
      object.addEventListener('mouseover', handleMouseOver)
      object.addEventListener('mouseout', handleMouseOut)
      return () => {
        object.removeEventListener('mouseover', handleMouseOver)
        object.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [ref.current])
  return [ref, value]
}

export default useHover
