import React, { memo } from 'react'
import { IconProps } from '~svg'

const Cross: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg className='absolute top-30 right-47 cursor-pointer' width='14' height='14' viewBox='0 0 14 14' fill='none'
         xmlns='http://www.w3.org/2000/svg'>
      <path d='M1 13L13 1M1 1L13 13' stroke='#7A7D84' strokeWidth='2' strokeLinecap='round'
            strokeLinejoin='round' />
    </svg>
  )
}

export default memo(Cross)
