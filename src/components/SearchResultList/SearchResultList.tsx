import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import "./SearchResultList.scss";
import {
  AppState,
  FlightInfo,
  FlightSearchCriteria,
} from "../../utilities/app.model";
import { FlightDetails } from "../FlightDetails/FlightDetails";

type SearchResultListProps = {
  flights: FlightInfo[];
  isSortActive: boolean;
  isFilterActive: boolean;
  openSortFilter: (page: string) => void;
};
export const SearchResultList: React.FC<SearchResultListProps> = ({
  flights,
  isSortActive,
  isFilterActive,
  openSortFilter,
}) => {
  const navigate = useNavigate();

  const flightSearchCriteria: FlightSearchCriteria = useSelector(
    (state: AppState) => state.flightSearchCriteria
  );
  useEffect(() => {
    if (!flightSearchCriteria.departureStn) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="flight-criteria p-3">
        <div className="text-align-center font-weight-bold">
          <span className="mr-3">{flightSearchCriteria.departureStn}</span>
          <i className="fas fa-long-arrow-alt-right"></i>
          <span className="ml-3">{flightSearchCriteria.destinationStn}</span>
        </div>
        <div className="text-align-center font-md mt-2">
          <span className="mr-2">{flightSearchCriteria.departDate}</span>-{" "}
          <span className="ml-2 mr-2">{flightSearchCriteria.returnDate}</span>|
          <span className="ml-2">
            {flightSearchCriteria.travellers}&nbsp;Adult
          </span>
        </div>
      </div>
      {flights.map((flightInfo, idx) => {
        return (
          <FlightDetails
            key={idx}
            searchCriteria={flightSearchCriteria}
            flightDetails={flightInfo}
          />
        );
      })}
      <div className="row filter-options card font-weight-bold">
        <div className="col">
          <span
            className="hover-pointer"
            onClick={() => openSortFilter("sortby")}
          >
            Sort by
            <span
              className={"active-dot " + (isSortActive ? "active" : "")}
            ></span>
          </span>
        </div>
        <div className="col">
          <span
            className="hover-pointer"
            onClick={() => openSortFilter("filterby")}
          >
            Filters
            <span
              className={"active-dot " + (isFilterActive ? "active" : "")}
            ></span>
          </span>
        </div>
      </div>
    </>
  );
};
