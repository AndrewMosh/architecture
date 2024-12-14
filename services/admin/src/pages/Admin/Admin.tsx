import React, { useState } from 'react';
import s from './Admin.module.scss';

const Admin: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

 
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <h1>Admin</h1>
        <p>Это микросервис админки</p>
        <button className={s.countButton} onClick={handleClick}>
          You clicked {count} times
        </button>
      </header>
    </div>
  );
};

export default Admin;
