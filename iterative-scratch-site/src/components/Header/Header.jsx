import React from 'react';
import backgroundImage from '../../images/background.jpg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img alt='' src={backgroundImage} className={styles.backgroundImg} />
      <h3 className={styles.overlayText}>Recipe Cards</h3>
    </div>
  );
};

export default Header;
//className='h-32 w-full object-cover lg:h-48'
