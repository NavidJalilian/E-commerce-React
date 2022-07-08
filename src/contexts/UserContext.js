// import { useReducer } from "react";
// import { createContext } from "react";

// export const UserContext = createContext({
//   currentUser: null,
// });
// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT-USER",
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// const userReducer = (state, action) => {
//   console.log("dispatch");
//   console.log(action);
//   const { type, payload } = action;
//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };

//     default:
//       throw new Error(`unhandled type ${type} in userReducer`);
//   }
// };

// export const UserProvider = ({ children }) => {
//   // const [currentUser, setCurrentUser] = useState(null);
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   const { currentUser } = state;

//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
