export interface ModeIntialState {
  mode: string;
}

export interface ModeActionProps {
  type: string;
  payload: ModeIntialState;
}

export const modeInitialState: ModeIntialState = {
  mode: 'dark',
};

export const MODETYPE = {
  DARK: 'dark',
  LIGHT: 'Light',
  CHANGE: 'change',
};

export const ModeReducer = (
  state: ModeIntialState,
  { type }: ModeActionProps
) => {
  switch (type) {
    case MODETYPE.DARK:
      return {
        ...state,
        mode: 'dark',
      };

    case MODETYPE.CHANGE:
      const mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mode', mode);
      return {
        ...state,
        mode,
      };

    case MODETYPE.LIGHT:
      return {
        ...state,
        mode: 'light',
      };

    default:
      return state;
  }
};
