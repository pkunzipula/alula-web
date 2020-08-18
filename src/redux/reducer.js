import { INVOICES } from "../shared/invoices";
import { OVERVIEW } from "../shared/overview";
import { PROPERTY } from "../shared/property";
import { SERVICEREQUEST } from "../shared/serviceRequest";

export const initialState = {
  invoices: INVOICES,
  overview: OVERVIEW,
  property: PROPERTY,
  serviceRequest: SERVICEREQUEST,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
