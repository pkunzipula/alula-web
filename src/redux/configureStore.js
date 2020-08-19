import { createStore, combineReducers } from "redux";
import { Properties } from "./properties";
import { ServiceRequests } from "./serviceRequests";

// export const ConfigureStore = () => {
//   const store = createStore(Reducer, initialState);
//   return store;
// };

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      properties: Properties,
      serviceRequests: ServiceRequests,
    })
  );
};
