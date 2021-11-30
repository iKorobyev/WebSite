import React, { memo } from "react"
import { PageMeta } from '~seo'
import { Button } from '~ui'
import { useToggle } from '~hooks'
import { SubscribeModal } from '~ui'

const HomePage = () => {
  const [modalOpen, setModalOpen] = useToggle()


  return (
    <section className='bg-white pt-20'>
      <PageMeta title={'Home'} />
    </section>
  )
}

export default memo(HomePage)
