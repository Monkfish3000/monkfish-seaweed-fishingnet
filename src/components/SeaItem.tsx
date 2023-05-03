import React, { useState } from 'react';
import styles from './SeaItem.module.css';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import { useOptions } from '../context/optionsContext';

interface Props {
  name: string;
  icon: JSX.Element;
  seaItemChoiceIndex: number;
}

const SeaItem: React.FC<Props> = ({ name, icon, seaItemChoiceIndex }) => {
  const [seaItemPressed, setSeaItemPressed] = useState<boolean>(false);
  const optionsContext = useOptions();

  const { dispatch, state } = optionsContext;

  const selectedSeaItem = state.playerSeaItem;

  const selectOption = (index: number) => {
    dispatch({ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: index });
    setSeaItemPressed(true);
  };

  return (
    <>
      <button
        className={`${styles.choiceBtn} 
          ${
            seaItemPressed && seaItemChoiceIndex === selectedSeaItem
              ? styles.activeChoice
              : ''
          }
        `}
        onClick={() => selectOption(seaItemChoiceIndex)}
      >
        {name} {icon}
      </button>
    </>
  );
};

export default SeaItem;
