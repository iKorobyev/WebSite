import React, {FC, memo} from 'react';
import {Container} from "~ui";
import {PageMeta} from "~seo";

interface GameDevProps {

}

const GameDev: FC<GameDevProps> = ({}) => {
  return (
    <div className="bg-bg bg-cover min-h-screen pt-200 overflow-hidden">
      <PageMeta title={'Геймдев'} />
      <Container className="flex justify-between">
        <div className="max-w-[700px] mt-20">
          <h2 className="text-40 mb-50 lg:text-50">Перспективы геймдева</h2>
          <div className="text-20 lg:text-24">
            Актуальность программы «Геймдев и геймдизайн. Разработка компьютерных игр в среде Unity» состоит в том, что
            она направлена на получение обучающимися умений и навыков в области разработки компьютерных игр и позволяет
            использовать полученные знания в своей профессиональной деятельности. Также данная программа позволяет сделать
            осознанный выбор профессии, связанной с данной областью (разработчик компьютерных игр, геймдизайнер, художник по
            окружениям, 3d-моделлер), если обучающийся еще не имеет профессии.
          </div>
        </div>
        <img className="max-w-[500px]" src="/images/game-dev/1.jpg" alt=""/>
      </Container>
    </div>
  );
};

export default memo(GameDev);