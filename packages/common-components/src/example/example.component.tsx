import React, { Fragment } from 'react';

export interface AwesomeComponentProps {
  onClick: (val: string) => () => any;
  data: string[];
}

const AwesomeComponent: React.FC<AwesomeComponentProps> = ({
  data,
  onClick,
}) => {
  return (
    <Fragment>
      {data.map(x => (
        <strong onClick={onClick(x)}>{x}</strong>
      ))}
    </Fragment>
  );
};

export default AwesomeComponent;
