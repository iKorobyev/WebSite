import React, { memo } from 'react'
import { PageMeta } from '~seo'

const IndexPage = () => {


  return (
    <section className="!bg-[#121212] ">
      <PageMeta title={'Main'} />
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-40 text-center">
          <h1 className="text-60">Hello</h1>
          <div className="">It is <br/> Gatsby React Boilerplate</div>
        </div>
      </div>
    </section>
  )
}

export default memo(IndexPage)
