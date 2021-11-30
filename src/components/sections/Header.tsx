import { Link } from 'gatsby'
import React, { memo } from 'react'
import { useSiteMetadata } from '~hooks'
import { Button } from '~ui'
import * as Icon from '~svg'
import { useLocation } from '@reach/router'


export interface HeaderProps {
}

const Header: React.FC<HeaderProps> = props => {
  const {} = props

  const location = useLocation()

  const { navigation } = useSiteMetadata()

  if (location.pathname === '/') return null

  return (
    <header className='bg-neutral-14 fixed w-full py-40'>
      <div className='container'>
        <nav className='max-w-7xl mx-auto px-130' aria-label='Top'>
          <div className='flex gap-x-7% items-center justify-center'>
            {navigation.map(link => {
              if (link.path === '/') return <Link
                key={link.label}
                to={link.path}
                className='mx-13%'
              >
                <Icon.Logo />
              </Link>

              return <Link
                key={link.label}
                to={link.path}
                className='min-w-fit text-white hover:text-green-200'
              >
                {link.label}
              </Link>
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default memo(Header)
