import React from 'react';
import styles from './underConstruction.module.scss'; 

const UnderConstruction = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Service Suspended</h1>
      <p className={styles.message}>This site&apos;s hosting subscription has expired.</p>
      <p className={styles.message}>Please contact us to renew your plan and restore access.</p>
      <div className={styles.loader}></div>
    </div>
  );
};

export default UnderConstruction;
