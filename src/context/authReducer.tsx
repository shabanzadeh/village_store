import { AuthAction, AuthState} from "../types/types";
export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, currentUser: action.payload };
      case "LOGOUT":
        return { ...state, currentUser: null };
      default:
        return state;
    }
  };