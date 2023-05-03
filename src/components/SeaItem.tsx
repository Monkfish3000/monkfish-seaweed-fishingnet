import React from 'react';
import styles from './SeaItem.module.css';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import { useOptions } from '../context/optionsContext';

interface Props {
  name: string;
  icon: JSX.Element;
  seaItemChoiceIndex: number;
}

const SeaItem: React.FC<Props> = ({ name, icon, seaItemChoiceIndex }) => {
  const optionsContext = useOptions();

  const { dispatch } = optionsContext;

  const selectOption = (index: number) => {
    dispatch({ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: index });
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
