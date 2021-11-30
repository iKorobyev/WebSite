import React, { memo } from "react"
import { PageMeta } from '~seo'

const HomePage = () => {

  return (
    <section className='bg-white pt-20'>
      <PageMeta title={'Home'} />

    </section>
  )
}

export default memo(HomePage)
