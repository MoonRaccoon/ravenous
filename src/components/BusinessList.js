import React from 'react';
import Business from './Business';
import styles from './BusinessList.module.css';

function BusinessList() {
  return (
    <ul className={styles.list}>
      <li>
        <Business/>
      </li>
      <li>
        <Business/>
      </li>
      <li>
        <Business/>
      </li>
      </ul>
  );
}

export default BusinessList;