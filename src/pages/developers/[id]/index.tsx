import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import {Container} from "~ui";
import {PageMeta} from "~seo";
import {Link} from "gatsby";
import {useLocation} from '@reach/router';
import axios from "axios";
import {IDeveloper} from "../index";

interface DeveloperPage {

}

const DeveloperPage: FC<DeveloperPage> = ({}) => {
  const location = useLocation()
  const developerId = location.pathname.split('/').reverse()[0]
  const [developer, setDeveloper] = useState<IDeveloper>({
    id: 'test1',
    email: '123@mail.ru',
    firstName: 'test',
    secondName: 'test2',
    password: '123123'
  })

  const fetchCurrentDeveloper = useCallback(async () => {
    const response = await axios.get(`http://localhost:3000/developers/${developerId}`)
    setDeveloper(response.data)
  }, [developerId])

  useEffect(() => {
    fetchCurrentDeveloper()
  }, [fetchCurrentDeveloper])

  const { img, firstName, secondName, post, description} = developer

  return (
    <section className="bg-bg bg-cover min-h-screen pt-100">
      <PageMeta title={'Разработчики'} />
      <Container>
        <div className="">
          <div className="flex gap-x-40 ">
            <img className="max-w-[250px] max-h-[350px]" src={img} alt=""/>
            <div className="flex mt-35 flex-col gap-y-10">
              <h3 className="text-40">{`${firstName} ${secondName}`}</h3>
              <div className="text-32 ">УВТп41</div>
              <div className="text-26">{post}</div>
            </div>
          </div>
          <div className="mt-50 text-18 whitespace-pre-wrap">
            {description}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(DeveloperPage);