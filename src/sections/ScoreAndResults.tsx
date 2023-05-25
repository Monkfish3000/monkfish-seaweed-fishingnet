import { useState, useEffect } from 'react';
import { useOptions } from '../context/optionsContext';
import styles from './ScoreAndResults.module.css';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import { checkWinner } from '../utils/checkWinner';

const ScoreAndResults = () => {
  const [time, setTime] = useState<number>(3);

  const optionsContext = useOptions();
  const { runTimer } = optionsContext.state;
  const { dispatch, options } = optionsContext;

  const playerSeaItemIndex = optionsContext.state.playerSeaItem;
  const playerSeaItemName = optionsContext.options[playerSeaItemIndex].name;
  const playerSeaItemIcon = optionsContext.options[playerSeaItemIndex].icon;
  const playerScore = optionsContext.state.score.playerScore;

  const computerSeaItemIndex = optionsContext.state.computerSeaItem;
  const computerSeaItemName = optionsContext.options[computerSeaItemIndex].name;
  const computerSeaItemIcon = optionsContext.options[computerSeaItemIndex].icon;
  const computerScore = optionsContext.state.score.computerScore;

  const { winner, message } = optionsContext.state.results;

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
      checkWinner(dispatch, playerSeaItemName, computerSeaItemName);
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
        <div className={styles.playerHand}>
          {runTimer && (
            <div className={styles.playerShake}>{options[0].icon}</div>
          )}
          {!runTimer && winner && (
            <>
              <div>{playerSeaItemIcon}</div>
              <div>{playerSeaItemName}</div>
            </>
          )}
        </div>
        <div className={styles.midCol}>
          {runTimer && (
            <p data-testid="timer" className={styles.timer}>
              {time}
            </p>
          )}
          {!runTimer && winner && (
            <p className={styles.resultWinner}>{winner} wins!</p>
          )}
          {!runTimer && winner && (
            <p className={styles.resultMessage}>{message}</p>
          )}
        </div>
        <div className={styles.computerHand}>
          {runTimer && (
            <div className={styles.computerShake}>{options[0].icon}</div>
          )}
          {!runTimer && winner && (
            <>
              <div>{computerSeaItemIcon}</div>
              <div>{computerSeaItemName}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ScoreAndResults;
