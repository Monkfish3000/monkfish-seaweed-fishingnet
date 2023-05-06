import './App.css';
import ScoreAndResults from './sections/ScoreAndResults';
import ChooseAndPlay from './sections/ChooseAndPlay';
import RulesModal from './components/RulesModal';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>MONKFISH, SEAWEED, FISHING NET</h1>
        <p>A completely original game!</p>
      </div>
      <ScoreAndResults />
      <ChooseAndPlay />
      <RulesModal isOpen={true} onClose={() => {}} children={undefined} />
    </div>
  );
}

export default App;
