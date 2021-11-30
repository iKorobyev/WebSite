import React, {FC, memo} from 'react';
import {Container} from "~ui";
import {PageMeta} from "~seo";

interface ProjectPageProps {

}

const ProjectPage: FC<ProjectPageProps> = ({}) => {
  return (
    <div className="bg-bg bg-cover min-h-screen pt-200 overflow-hidden">
      <PageMeta title={'О Проекте'} />
      <Container className="flex justify-between items-center lg:items-start">
        <div className="lg:mt-40">
          <h2 className="text-40 mb-70 lg:text-50">Проект "Название игры"</h2>
          <div className="text-20 max-w-[700px] lg:text-24">
            Игра представляет собой смесь diablo и игр серии dark souls, 3d игра с видом сверху и игровыми механиками,
            ариентированными на боевую систему. Боевая система представляет собой комбинацию из фзических атак с помощью
            холодного оружия и использования магических заклинаний и артефактов.
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <img className="max-w-[500px]" src="/images/project/1.jpg" alt=""/>
          <img className="max-w-[500px]" src="/images/project/2.jpg" alt=""/>
        </div>
      </Container>
    </div>
  );
};

export default memo(ProjectPage);