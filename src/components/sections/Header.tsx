import { Link } from 'gatsby'
import React, {memo, useCallback, useState} from 'react'
import { useSiteMetadata } from '~hooks'
import {Container, LoginModal, RegisterModal} from "~ui";
import {Modal} from "~ux";


export interface HeaderProps {
}

const Header: React.FC<HeaderProps> = props => {
  const {} = props

  const { navigation } = useSiteMetadata()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false)
  const token = localStorage.getItem('token')

  return (
    <header className='bg-[#FFD300] fixed w-full py-20'>
      <Container>
        <nav className='max-w-full mx-auto px-30' aria-label='Top'>
          <div className='flex items-center justify-between'>
            {navigation.map(link => {
              return <Link
                to={link.path}
                key={link.label}
                className='min-w-fit text-17 text-[#000001] hover:text-[#2D333F]'
              >
                {link.label}
              </Link>
            })}
            <div className="flex gap-x-15">
              {!token && <>
                <div className="min-w-fit text-17 text-[#000001] cursor-pointer hover:text-[#2D333F]" onClick={() => setIsOpenRegisterModal(true)}>
                  Зарегистрироваться
                </div>
                <div className="min-w-fit text-17 text-[#000001] cursor-pointer hover:text-[#2D333F]" onClick={() => setIsOpen(true)}>
                  Авторизироваться
                </div>
              </> || <div className="min-w-fit text-17 text-[#000001] cursor-pointer hover:text-[#2D333F]" onClick={() => {
                localStorage.removeItem('token')
                window.location.reload()
              }}>
                Выйти
              </div>}
            </div>
          </div>
        </nav>
      </Container>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <RegisterModal isOpenRegisterModal={isOpenRegisterModal} setIsOpenRegisterModal={setIsOpenRegisterModal} />
    </header>
  )
}

export default memo(Header)
