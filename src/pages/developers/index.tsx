import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import {Container} from "~ui";
import {PageMeta} from "~seo";
import {Link} from "gatsby";
import axios from "axios";

interface DevelopersPageProps {

}

export interface IDeveloper {
  id: string
  email: string
  firstName: string
  secondName: string
  password: string
  img?: string
  post?: string
  description?: string
}

const DevelopersPage: FC<DevelopersPageProps> = ({}) => {
  const [developers, setDevelopers] = useState<IDeveloper[]>([])
  const [token, setToken] = useState<null | string>('')

  const fetchDevelopers = useCallback(async () => {
    const response = await axios.get('http://localhost:3000/developers')
    const { data } = response
    setDevelopers(data)
  }, [])

  useEffect(() => {
    localStorage.getItem('token') && setToken(localStorage.getItem('token'))
  }, [token])

  useEffect(() => {
    fetchDevelopers();
  }, [fetchDevelopers])

  return token && (
    <section className="bg-bg bg-cover min-h-screen">
      <PageMeta title={'Разработчики'} />
      <Container>
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-[#5A6593] min-w-[300px] flex flex-col gap-y-20 p-20 text-40 text-center text-[#000001] hover:text-[#2D333F]">
            {developers.map(({ firstName, secondName, id }) => {
              return <Link key={id} className="bg-[#FFD300] p-10 text-16" to={`./${id}`}>{`${firstName} ${secondName}`}</Link>
            })}
          </div>
        </div>
      </Container>
    </section>
  ) || <section className="bg-bg bg-cover min-h-screen">
    <PageMeta title={'Error'} />
    <Container>
      <div className="min-h-screen flex justify-center items-center">
        Нельзя сюда не авторизованным!
      </div>
    </Container>
  </section>;
};

export default memo(DevelopersPage);