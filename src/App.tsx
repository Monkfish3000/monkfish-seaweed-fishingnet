import './App.css';
import ScoreAndResults from './components/ScoreAndResults';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>MONKFISH, SEAWEED, FISHING NET</h1>
        <p>A completely original game!</p>
      </div>
      {
        <ScoreAndResults />
        /* <ChooseAndPlay />  */
      }
    </div>
  );
}

export default App;
