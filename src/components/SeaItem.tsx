import React from 'react';
import styles from './SeaItem.module.css';

interface Props {
  name: string;
  icon: JSX.Element;
  seaItemChoiceIndex: number;
}

const SeaItem: React.FC<Props> = ({ name, icon, seaItemChoiceIndex }) => {
  const selectOption = (index: number) => {
    console.log(index);
  };
  return (
    <>
      <button
        className={styles.choiceBtn}
        onClick={() => selectOption(seaItemChoiceIndex)}
      >
        {name} {icon}
      </button>
    </>
  );
};

export default SeaItem;
