import React from 'react';
import styles from './Bullet.modules.css';

const Bullet = ({ active }) => {
  return (
    <div className={`bullet ${active ? 'active' : ''}`}>
      <div className='mini-bullet'></div>
    </div>
  );
};

export default Bullet;