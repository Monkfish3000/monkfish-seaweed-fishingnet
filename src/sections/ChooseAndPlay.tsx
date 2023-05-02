import React from 'react';
import styles from './ChooseAndPlay.module.css';
import SeaItem from '../components/SeaItem';
import { useOptions } from '../context/optionsContext';

const ChooseAndPlay = () => {
  const optionsContext = useOptions();

  const SeaItemsArray = optionsContext.options.map((item, idx) => {
    return (
      <SeaItem name={item.name} icon={item.icon} seaItemChoiceIndex={idx} />
    );
  });

  console.log(optionsContext.state);

  return (
    <>
      <div className={styles.choiceBtnCtn}>{SeaItemsArray}</div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
