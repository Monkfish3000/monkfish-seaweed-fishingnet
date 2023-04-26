import React from 'react';
import styles from './SeaItem.module.css';

interface Props {
  name: string;
  icon: JSX.Element;
}

const SeaItem: React.FC<Props> = ({ name, icon }) => {
  return (
    <>
      <button className={styles.choiceBtn}>
        {name} {icon}
      </button>
    </>
  );
};

export default SeaItem;
