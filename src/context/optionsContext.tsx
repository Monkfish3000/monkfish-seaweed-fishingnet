import { createContext } from 'react';
import { IoptionsContext } from './optionsContextTypes';

const OptionsContext = createContext<IoptionsContext>({
  options: [],
});
