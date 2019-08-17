import React, { Fragment } from 'react';

export interface AwesomeComponentProps {
  onClick: (val: string, index: number) => () => any;
  data: string[];
}

export const AwesomeComponent: React.FC<AwesomeComponentProps> = ({
  data,
  onClick,
}: AwesomeComponentProps) => {
  return (
    <Fragment>
      {data.map((x, i) => (
        <strong onClick={onClick(x, i)}>{x}</strong>
      ))}
    </Fragment>
  );
};
