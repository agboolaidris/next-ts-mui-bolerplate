import React, { createContext, ReactNode, useReducer, useContext } from "react";
import {
  AuthReducer,
  authInitialState,
  AuthIntialState,
  AuthActionProps,
} from "./reducers/auth";

interface Props {
  children: ReactNode;
}

interface InitialState {
  authInitialState: AuthIntialState;
}

const initialState: InitialState = {
  authInitialState,
};

const StateContext = createContext<InitialState>(initialState);
const DispatchContext = createContext<React.Dispatch<AuthActionProps>>(
  () => null
);

const globalReducer = (
  { authInitialState }: InitialState,
  action: AuthActionProps
) => ({
  authInitialState: AuthReducer(authInitialState, action),
});

const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default StoreProvider;
export const useGlobalState = () => useContext(StateContext);
export const useGlobalDispatch = () => useContext(DispatchContext);
