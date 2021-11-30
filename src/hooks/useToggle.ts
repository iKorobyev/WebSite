import { useCallback, useState } from 'react'

const useToggle = (initialState = false): [boolean, () => void] => {
  const [toggled, setToggled] = useState<boolean>(initialState)

  const handleToggled = useCallback(() => {
    setToggled(prev => !prev)
  }, [])

  return [toggled, handleToggled]
}

export default useToggle
