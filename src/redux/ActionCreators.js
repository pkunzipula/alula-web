import * as ActionTypes from "./ActionTypes";

export const addProperty = (propertyId, address) => ({
  type: ActionTypes.ADD_PROPERTY,
  payload: {
    propertyId,
    address,
  },
});
