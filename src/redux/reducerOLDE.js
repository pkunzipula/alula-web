// import { INVOICES } from "../shared/invoices";
// import { OVERVIEW } from "../shared/overview";
import { PROPERTIES } from "../shared/properties";
import { SERVICEREQUESTS } from "../shared/serviceRequests";

export const initialState = {
  //   invoices: INVOICES,
  //   overview: OVERVIEW,
  property: PROPERTIES,
  serviceRequest: SERVICEREQUESTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
