import React, { FC } from 'react';

interface MyCompProps {
  name: string;
  log?: Function;
  className?: string;
}

// Assume this is third party method wich just execute what ever function log function passed.
export const MyComp: FC<MyCompProps> = ({ name = 'test', className, log }) => {
  
  return <div>
    Test name={name}
    <div>{log()}</div>
    </div>;
};

// now wrapper component with default log
interface MyCompWrapperProps {
  myCompProps: MyCompProps;
  location?: string;
}

export const MyCompWrapper: FC<MyCompWrapperProps> = (props) => {
  if (!props.myCompProps.log) {
    props.myCompProps.log = () => {
      return 'default log...';
    };
  }

  return (
    <div>
      <MyComp {...props.myCompProps} />
        <div>{props.location}</div>
    </div>
  );
};
