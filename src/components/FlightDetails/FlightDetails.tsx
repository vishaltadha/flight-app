import { useEffect, useState } from "react";

import "./FlightDetails.scss";
import { FlightInfo, FlightSearchCriteria } from "../../utilities/app.model";
import { FLIGHT_CLASSES } from "../../utilities/app.constants";

type FlightDetailsProps = {
  searchCriteria: FlightSearchCriteria;
  flightDetails: FlightInfo;
};
export const FlightDetails: React.FC<FlightDetailsProps> = ({
  searchCriteria,
  flightDetails,
}) => {
  const [formattedFlightData, setFormattedFlightData] = useState(
    JSON.parse(JSON.stringify(flightDetails)) as FlightInfo
  );

  const getEndTime = (startTime: string, duration: number): string => {
    var time = new Date(startTime);
    time.setTime(time.getTime() + duration * 60 * 1000);

    return time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const getStartTime = (startTime: string): string => {
    var time = new Date(startTime);

    return time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const getDurationInHrs = (duration: number): string => {
    let hrs = Math.floor(duration / 60);
    let mins = duration % 60;
    return `${hrs}h ${mins}min`;
  };

  useEffect(() => {
    setFormattedFlightData({
      ...flightDetails,
      classDetails: flightDetails.classDetails.map((classDetails) => {
        let classDtls = { ...classDetails };
        classDtls.className =
          FLIGHT_CLASSES.find(
            (flightClass) => flightClass.id === classDtls.className
          )?.label || "R";
        return classDtls;
      }),
    });
  }, [flightDetails]);

  return (
    <div className="card">
      <div className="row">
        <div className="m-0 col-lg-3">
          <div className="row">
            <img
              className="mr-2 flight-image"
              src={formattedFlightData.logoPath}
              alt={formattedFlightData.name}
            />
            <div className="d-flex align-items-center font-lg">
              {formattedFlightData.name}
            </div>
          </div>
        </div>
        <div className="col-lg-8 align-self-center">
          <div className="row font-lg">
            <div>
              <div className="font-weight-bold">
                {getStartTime(formattedFlightData.startTime)}
              </div>
              <div>{searchCriteria.departureStn}</div>
            </div>
            <div className="col">
              <div className="font-sm text-align-center">
                {getDurationInHrs(formattedFlightData.duration)}
              </div>
              <div className="border-line">
                <div className="border-dot left"></div>
                <div className="border-dot right"></div>
              </div>
            </div>
            <div>
              <div className="font-weight-bold">
                {getEndTime(
                  formattedFlightData.startTime,
                  formattedFlightData.duration
                )}
              </div>
              <div>{searchCriteria.destinationStn}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        {formattedFlightData.classDetails.map((classDetails, idx) => {
          return (
            <div className="col-md-2 col-sm-4 col-5" key={idx}>
              <div className="class-details hover-pointer p-2">
                <div className="font-lg font-weight-bold">
                  ${classDetails.price}
                </div>
                <div className="font-md mt-2">{classDetails.className}</div>
                {classDetails.availableSeats < 4 ? (
                  <div className="limited-seats font-sm">
                    {classDetails.availableSeats} Seats Left
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
