import * as React from 'react';
import { MyComp, MyCompWrapper } from './MyComp';
import './style.css';

export default function App() {
  const myCompProps = {
    name: 'Amit Verma',
  };

  const myCompPropsWithCusomLog = {
    name: 'Monoj',
    log: () => {
      return 'This is custom log...';
    },
  };

  return (
    <div>
      <MyCompWrapper myCompProps={myCompProps} location={'India'} />

      <MyCompWrapper myCompProps={myCompPropsWithCusomLog} location={'USA'} />
    </div>
  );
}
