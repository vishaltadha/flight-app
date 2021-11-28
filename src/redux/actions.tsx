import { FlightInfo, FlightSearchCriteria } from "../utilities/app.model";

export const FLIGHT_SEARCH_SUCCESS = "FLIGHT_SEARCH_SUCCESS";
export const SAVE_FLIGHT_SEARCH_CRITERIA = "SAVE_FLIGHT_SEARCH_CRITERIA";

export const searchFlightsSuccess = (flights: FlightInfo[]) => {
  return {
    type: FLIGHT_SEARCH_SUCCESS,
    payload: flights,
  };
};

export const saveFlightSearchCriteria = (criteria: FlightSearchCriteria) => {
  return {
    type: SAVE_FLIGHT_SEARCH_CRITERIA,
    payload: criteria,
  };
};
