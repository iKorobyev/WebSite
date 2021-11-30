import React, { memo, useState } from 'react'
import { SubscribeFormModal, Modal } from '~ux'
import { Cross } from '~svg'


interface MainModalProps {
  isOpen: boolean
  onCloseModal: () => void
  className?: string
}


const SubscribeModal: React.FC<MainModalProps> = props => {
  const { isOpen, onCloseModal, className, children } = props

  return (
    <>
      {className ? <div className={className}>{children}</div> : children}
      <Modal onCloseModal={onCloseModal} isOpen={isOpen}>
        <div className='flex'>
          <div className='bg-modal w-50% bg-no-repeat bg-cover'></div>
          <div className='w-50% px-30 relative text-center bg-black-1 text-white	'>
            <div onClick={onCloseModal}><Cross /></div>
            <div className='text-40 pt-60'>NEWSLETTER</div>
            <div className='text-14 pt-25'>Sign up for the pARTICULES™ newsletter to receive exclusive content,
              pre-access to releases and limited
              material
            </div>
            <div className='text-10 pt-64'>*By signing up to newsletter you agree to Terms and Conditions</div>
            <div className='pt-20'>
              <SubscribeFormModal />
            </div>

          </div>
        </div>
      </Modal>
    </>
  )
}

export default memo(SubscribeModal)
