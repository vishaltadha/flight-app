import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveFlightSearchCriteria } from "../../redux/actions";
import { FLIGHT_CLASSES } from "../../utilities/app.constants";
import { AppState, FlightSearchCriteria } from "../../utilities/app.model";
import { fetchFlights } from "../../utilities/http/app.facade";

export type FlightSearchProps = {};

const FlightSearch: React.FC<FlightSearchProps> = (props) => {
  const flightSearchCriteria: FlightSearchCriteria = useSelector(
    (state: AppState) => state.flightSearchCriteria
  );

  const [departure, setDeparture] = useState(
    flightSearchCriteria.departureStn || ""
  );
  const [destination, setDestination] = useState(
    flightSearchCriteria.destinationStn || ""
  );
  const [departDate, setDepartDate] = useState(
    flightSearchCriteria.departDate || ""
  );
  const [returnDate, setReturnDate] = useState(
    flightSearchCriteria.returnDate || ""
  );
  const [travellers, setTravellers] = useState(
    flightSearchCriteria.travellers || 1
  );
  const [flightClass, setFlightClass] = useState(
    flightSearchCriteria.class || ""
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitSearch = () => {
    if (isValidForm()) {
      dispatch(fetchFlights());
      dispatch(
        saveFlightSearchCriteria({
          departureStn: departure,
          destinationStn: destination,
          departDate: departDate,
          returnDate: returnDate,
          travellers: travellers,
          class: flightClass,
        })
      );
      navigate("/flights");
    } else {
      alert("Please fill up the required fields!");
    }
  };

  const isValidForm = () => {
    if (
      departure.length > 0 &&
      destination.length > 0 &&
      departDate.length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <section>
      <div className="row">
        <div className="col">
          <div className="input-group row m-3">
            <input
              type="text"
              id="departure"
              className="col"
              defaultValue={departure}
              onKeyUp={(event: any) => setDeparture(event.target.value)}
              required
            />
            <label htmlFor="departure">Departure *</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="input-group row m-3">
            <input
              type="text"
              id="destination"
              className="col"
              defaultValue={destination}
              onKeyUp={(event: any) => setDestination(event.target.value)}
              required
            />
            <label htmlFor="destination">Destination *</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col pr-0">
          <div className="input-group row m-3">
            <input
              type="date"
              id="departDate"
              className="col"
              defaultValue={departDate}
              onChange={(event: any) => setDepartDate(event.target.value)}
              required
            />
            <label htmlFor="departDate">Depart Date *</label>
          </div>
        </div>
        <div className="col pl-0">
          <div className="input-group row m-3">
            <input
              type="date"
              id="returnDate"
              className="col"
              defaultValue={returnDate}
              onChange={(event: any) => setReturnDate(event.target.value)}
            />
            <label htmlFor="returnDate">Return Date</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col pr-0">
          <div className="input-group row m-3">
            <select
              className="col"
              name=""
              id="travellers"
              defaultValue={travellers}
              onChange={(event: any) => setTravellers(event.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label htmlFor="travellers">Travellers</label>
          </div>
        </div>
        <div className="col pl-0">
          <div className="input-group row m-3">
            <select
              className="col"
              name=""
              id="class"
              defaultValue={flightClass}
              onChange={(event: any) => setFlightClass(event.target.value)}
            >
              {FLIGHT_CLASSES.map((classInfo, idx) => (
                <option key={idx} value={classInfo.id}>
                  {classInfo.label}
                </option>
              ))}
            </select>
            <label htmlFor="class">Class</label>
          </div>
        </div>
      </div>
      <div className="row m-0 mt-2">
        <div className="col">
          <button
            className="w-100 btn btn-primary"
            type="submit"
            onClick={submitSearch}
          >
            Search Flights
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlightSearch;
