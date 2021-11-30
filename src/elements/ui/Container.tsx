import React, {FC, memo} from 'react';
import cls from 'classnames'
import {ClassName} from "~types";

interface ContainerProps {
  className?: ClassName
}

const Container: FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={cls("max-w-[1400px] m-auto", className)}>
      {children}
    </div>
  );
};

export default memo(Container);