import { createContext, useContext, useReducer } from 'react';
import {
  IOptions,
  IoptionsContext,
  SeaItemOption,
  Props,
} from './optionsContextTypes';
import { initialState } from './initialContextValues';

import { GiFishMonster, GiFishingNet, GiPlantRoots } from 'react-icons/gi';
import scoreReducer from '../reducers/scoreReducer';

const options: IOptions[] = [
  {
    name: SeaItemOption.monkfish,
    icon: <GiFishMonster size={60} data-testid="monkfish" />,
  },
  {
    name: SeaItemOption.seaweed,
    icon: <GiPlantRoots size={60} data-testid="seaweed" />,
  },
  {
    name: SeaItemOption.fishingnet,
    icon: <GiFishingNet size={60} data-testid="fishingnet" />,
  },
];

const OptionsContext = createContext<IoptionsContext>({
  options: [],
  state: initialState,
  dispatch: () => {},
});

export function OptionsProvider(props: Props) {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  const contextValue = {
    options,
    state,
    dispatch,
  };

  return (
    <OptionsContext.Provider value={contextValue}>
      {props.children}
    </OptionsContext.Provider>
  );
}

export function useOptions() {
  const context = useContext(OptionsContext);
  return context;
}
