import { useReducer } from 'react';
import scoreReducer from '../reducers/scoreReducer';
import { initialState } from '../context/initialContextValues';

const TestingComponent = () => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);
};
