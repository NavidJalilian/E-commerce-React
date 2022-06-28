import { useReducer } from "react";
import { createContext, useEffect } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT-USER",
};
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  console.log("dispatch");
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
   
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocFromAuth(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
