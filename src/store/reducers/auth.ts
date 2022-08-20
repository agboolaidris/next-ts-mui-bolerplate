export interface AuthIntialState {
  isAuthenticated?: boolean;
  isloading?: boolean;
  user?: {
    firstname: string;
    lastname: string;
    email: string;
  };
}

export interface AuthActionProps {
  type: string;
  payload: AuthIntialState;
}

export const authInitialState: AuthIntialState = {
  isAuthenticated: false,
  isloading: false,
  user: undefined,
};

export const AUTHTYPE = {
  LOGIN: "LOGIN",
  IS_LOADING: "ISLOADING",
  AUTH_ERROR: "AUTH_ERROR",
  REGISTER: "REGISTER",
  LOGOUT: "LOGOUT",
};

export const AuthReducer = (
  state: AuthIntialState,
  { payload, type }: AuthActionProps
) => {
  switch (type) {
    case AUTHTYPE.IS_LOADING:
      return {
        ...state,
        isloading: true,
      };
    case AUTHTYPE.AUTH_ERROR:
    case AUTHTYPE.LOGOUT:
      return authInitialState;

    case AUTHTYPE.LOGIN:
      return {
        ...state,
        ...payload,
      };
    case AUTHTYPE.REGISTER:
      return {
        ...state,
        isloading: false,
      };

    default:
      return state;
  }
};
