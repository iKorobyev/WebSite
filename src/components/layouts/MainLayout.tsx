import React, { FC, memo } from 'react'

interface MainLayoutProps {

}

const MainLayout: FC<MainLayoutProps> = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-40">
        <h1 className="text-60">Hello</h1>
        <div className="text-[#1c1c1c]">It is Gatsby React Boilerplate</div>
      </div>
    </div>
  )
}

export default memo(MainLayout)