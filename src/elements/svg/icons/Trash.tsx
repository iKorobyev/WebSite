import React, { memo } from 'react'
import { IconProps } from '~svg'
import cls from 'classnames'

const TrashIcon: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
         d="M10.1948 2.75L10 2.75C10 1.50736 8.99264 0.5 7.75 0.5H6.25C5.00736 0.5 4 1.50736 4 2.75L3.50746 2.75L3.25 2.75L3.24911 2.75L1 2.75C0.585786 2.75 0.25 3.08579 0.25 3.5C0.25 3.91421 0.585786 4.25 1 4.25L1.75 4.25L1.75 13.25C1.75 14.4926 2.75736 15.5 4 15.5H10C11.2426 15.5 12.25 14.4926 12.25 13.25L12.25 4.25L13 4.25C13.4142 4.25 13.75 3.91421 13.75 3.5C13.75 3.08579 13.4142 2.75 13 2.75H10.7514L10.75 2.75L10.1948 2.75ZM10.75 4.25H9.25L8.5 4.25L5.5 4.25L4.75 4.25L3.25 4.25L3.25 5.75L3.25 13.25C3.25 13.6642 3.58579 14 4 14H10C10.4142 14 10.75 13.6642 10.75 13.25L10.75 5.75V4.25ZM5.5 2.75H6.25H7H7.75H8.5C8.5 2.33579 8.16421 2 7.75 2L6.25 2C5.83579 2 5.5 2.33579 5.5 2.75ZM5.5 5.75C5.91421 5.75 6.25 6.08579 6.25 6.5V11.75C6.25 12.1642 5.91421 12.5 5.5 12.5C5.08579 12.5 4.75 12.1642 4.75 11.75V6.5C4.75 6.08579 5.08579 5.75 5.5 5.75ZM9.25 6.5C9.25 6.08579 8.91421 5.75 8.5 5.75C8.08579 5.75 7.75 6.08579 7.75 6.5V11.75C7.75 12.1642 8.08579 12.5 8.5 12.5C8.91421 12.5 9.25 12.1642 9.25 11.75V6.5Z"
        fill=""/>
    </svg>    
  )
}

export default memo(TrashIcon)
