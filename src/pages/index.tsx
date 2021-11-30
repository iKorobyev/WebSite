import React, {FC, memo, useEffect, useState} from 'react'
import { PageMeta } from '~seo'
import { Container } from "~ui";
import {Link, navigate} from "gatsby";

interface IndexPageProps {

}

const IndexPage: FC<IndexPageProps> = () => {
  const [isDisable, setIsDisable] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsDisable(false)
  })

  return (
    <section className="bg-bg bg-cover min-h-screen">
      <PageMeta title={'Главная'} />
      <Container>
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-[#5A6593] min-w-[300px] flex flex-col gap-y-20 p-20 text-40 text-center text-[#000001] hover:text-[#2D333F]">
            <Link className="bg-[#FFD300] p-10 text-16" to="/project">Проект</Link>
            <Link className="bg-[#FFD300] p-10 text-16" to="/game-dev">Геймдев</Link>
            <button className="bg-[#FFD300] p-10 text-16 disabled:bg-[#121212] disabled:text-white" onClick={() => navigate('/developers')} disabled={isDisable}>
              Разработчики
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default memo(IndexPage)
