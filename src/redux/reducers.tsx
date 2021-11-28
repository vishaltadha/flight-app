import { FLIGHTS_DATA } from "../utilities/app.constants";
import { AppState, FlightSearchCriteria } from "../utilities/app.model";
import { FLIGHT_SEARCH_SUCCESS, SAVE_FLIGHT_SEARCH_CRITERIA } from "./actions";

const initialState: AppState = {
  flightSearchCriteria: {} as FlightSearchCriteria,
  flights: FLIGHTS_DATA,
};

export const AppReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case FLIGHT_SEARCH_SUCCESS: {
      return {
        ...state,
        flights: action.payload,
      };
    }
    case SAVE_FLIGHT_SEARCH_CRITERIA:
      return {
        ...state,
        flightSearchCriteria: action.payload,
      };
    default:
      return state;
  }
};
