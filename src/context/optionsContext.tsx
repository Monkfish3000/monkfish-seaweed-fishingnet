import { createContext } from 'react';
import { IoptionsContext, SeaItemOption } from './optionsContextTypes';
import SeaItem from '../components/SeaItem';

const options = [{ name: SeaItemOption.monkfish }];

const OptionsContext = createContext<IoptionsContext>({
  options: [],
});
