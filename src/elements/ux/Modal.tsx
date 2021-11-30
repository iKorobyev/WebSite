import React, { memo, useEffect, useRef, useState, Fragment } from 'react'
import { Popover as PopoverElement, Transition, Dialog } from '@headlessui/react'
import { usePopper, PopperProps } from 'react-popper'
import { useClickAway, useFirstMountState } from '~hooks'
import { Children } from '~types'
import cls from 'classnames'


export interface ModalProps {
  className?: string
  isOpen: boolean
  onCloseModal: () => void
}

const Modal: React.FC<ModalProps> = props => {
  const { isOpen, onCloseModal, className, children } = props

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={onCloseModal} className={'fixed inset-0 z-30'}>
          <Dialog.Overlay onClick={() => !isOpen} className='fixed inset-0 bg-[#191919] opacity-60 ' />
          <Transition.Child
            as={'div'}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className={cls(
              `absolute-center shadow-MODAL z-30 bg-[#5A6593] overflow-hidden border-[5px] border-[#FFD300]`,
              className
            )}
            tabIndex={1}
          >
            {children}
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default memo(Modal)
