import React from 'react';
import styles from './ChooseAndPlay.module.css';
import SeaItem from '../components/SeaItem';

import { GiFishMonster, GiFishingNet, GiPlantRoots } from 'react-icons/gi';

const ChooseAndPlay = () => {
  return (
    <>
      <div className={styles.choiceBtnCtn}>
        <SeaItem name="monkfish" icon={<GiFishMonster size={60} />} />
        <SeaItem name="seaweed" icon={<GiPlantRoots size={60} />} />
        <SeaItem name="fishingnet" icon={<GiFishingNet size={60} />} />
      </div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
