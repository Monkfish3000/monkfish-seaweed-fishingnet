import './App.css';
import ScoreAndResults from './sections/ScoreAndResults';
import ChooseAndPlay from './sections/ChooseAndPlay';
import RulesModal from './components/RulesModal';
import Title from './components/Title';

function App() {
  return (
    <>
      <Title />
      <ScoreAndResults />
      <ChooseAndPlay />
      <RulesModal />
    </>
  );
}

export default App;
