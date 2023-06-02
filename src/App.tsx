import './App.css';
import ScoreAndResults from './sections/ScoreAndResults';
import ChooseAndPlay from './sections/ChooseAndPlay';
import Title from './components/Title';

function App() {
  return (
    <>
      <Title />
      <ScoreAndResults />
      <ChooseAndPlay />
    </>
  );
}

export default App;
