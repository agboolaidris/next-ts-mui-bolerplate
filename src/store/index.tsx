import React, { createContext, ReactNode, useReducer, useContext } from 'react';
import {
  ModeReducer,
  modeInitialState,
  ModeIntialState,
  ModeActionProps,
} from './reducers/mode';

interface Props {
  children: ReactNode;
}

interface InitialState {
  modeInitialState: ModeIntialState;
}

const initialState: InitialState = {
  modeInitialState,
};

const StateContext = createContext<InitialState>(initialState);
const DispatchContext = createContext<React.Dispatch<ModeActionProps>>(
  () => null
);

const globalReducer = (
  { modeInitialState }: InitialState,
  action: ModeActionProps
) => ({
  modeInitialState: ModeReducer(modeInitialState, action),
});

const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default StoreProvider;
export const useGlobalState = () => useContext(StateContext);
export const useGlobalDispatch = () => useContext(DispatchContext);
