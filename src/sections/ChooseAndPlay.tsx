import styles from './ChooseAndPlay.module.css';
import SeaItem from '../components/SeaItem';
import { useOptions } from '../context/optionsContext';
import { generateComputerSeaItem } from '../utils/randomNumber';
import { OptionActionKind } from '../reducers/scoreReducerTypes';

const ChooseAndPlay = () => {
  const optionsContext = useOptions();
  const { dispatch } = optionsContext;

  const SeaItemsArray = optionsContext.options.map((item, idx) => {
    return (
      <SeaItem name={item.name} icon={item.icon} seaItemChoiceIndex={idx} />
    );
  });

  const play = () => {
    const randomNumber = generateComputerSeaItem();
    dispatch({
      type: OptionActionKind.UPDATE_COMPUTER_CHOICE,
      payload: randomNumber,
    });
    dispatch({
      type: OptionActionKind.RUN_TIMER,
      payload: true,
    });
  };

  return (
    <>
      <div className={styles.choiceBtnCtn}>{SeaItemsArray}</div>
      <button className={styles.playBtn} onClick={play}>
        Play
      </button>
    </>
  );
};

export default ChooseAndPlay;
