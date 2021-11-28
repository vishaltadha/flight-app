import { searchFlightsSuccess } from "../../redux/actions";
import { FLIGHTS_DATA } from "../app.constants";

export const fetchFlights = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(searchFlightsSuccess(FLIGHTS_DATA));
  }, 500);
};
