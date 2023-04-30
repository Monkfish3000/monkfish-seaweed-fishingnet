import { createContext } from 'react';
import {
  IOptions,
  IoptionsContext,
  SeaItemOption,
  Props,
} from './optionsContextTypes';
import SeaItem from '../components/SeaItem';

import { GiFishMonster, GiFishingNet, GiPlantRoots } from 'react-icons/gi';

const options: IOptions[] = [
  { name: SeaItemOption.monkfish, icon: <GiFishMonster size={60} /> },
  { name: SeaItemOption.seaweed, icon: <GiPlantRoots size={60} /> },
  { name: SeaItemOption.fishingnet, icon: <GiFishingNet size={60} /> },
];

const OptionsContext = createContext<IoptionsContext>({
  options: [],
});

export function OptionsProvider(props: Props) {
  const contextValue = {
    options,
  };

  return (
    <OptionsContext.Provider value={contextValue}>
      {props.children}
    </OptionsContext.Provider>
  );
}
