import { useState, useEffect } from 'react';
import { useOptions } from '../context/optionsContext';
import styles from './ScoreAndResults.module.css';
import { OptionActionKind } from '../reducers/scoreReducerTypes';

const ScoreAndResults = () => {
  const [time, setTime] = useState<number>(3);

  const optionsContext = useOptions();
  const { runTimer } = optionsContext.state;
  const { dispatch } = optionsContext;

  const playerSeaItemIndex = optionsContext.state.playerSeaItem;
  const playerSeaItemName = optionsContext.options[playerSeaItemIndex].name;
  const playerSeaItemIcon = optionsContext.options[playerSeaItemIndex].icon;
  const playerScore = optionsContext.state.score.playerScore;

  const computerSeaItemIndex = optionsContext.state.computerSeaItem;
  const computerSeaItemName = optionsContext.options[computerSeaItemIndex].name;
  const computerSeaItemIcon = optionsContext.options[computerSeaItemIndex].icon;
  const computerScore = optionsContext.state.score.computerScore;

  useEffect(() => {
    if (runTimer) {
      const newIntervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) clearInterval(newIntervalId);
          return prevTime - 1;
        });
      }, 1000);
    }
  }, [runTimer]);

  useEffect(() => {
    if (time === 0) {
      setTime(3);
      dispatch({ type: OptionActionKind.RUN_TIMER, payload: false });
    }
  }, [time]);

  return (
    <>
      <div className={styles.scoreCtn}>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Player: {playerScore}</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Computer: {computerScore}</p>
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.playerHand}></div>
        <div className={styles.midCol}>
          {runTimer && (
            <p data-testid="timer" className={styles.timer}>
              {time}
            </p>
          )}
        </div>
        <div className={styles.computerHand}></div>
      </div>
    </>
  );
};

export default ScoreAndResults;
