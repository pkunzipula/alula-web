import { PROPERTIES } from "../shared/properties";
import * as ActionTypes from "./ActionTypes";

export const Properties = (state = PROPERTIES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROPERTY:
      const property = action.payload;
      property.id = state.length;
      property.date = new Date().toISOString();
      return state.concat(property);
    default:
      return state;
  }
};
