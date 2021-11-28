export interface TabInfo {
  name: string;
  icon: string;
}

export type FlightClassDetails = {
  className: string;
  price: number;
  availableSeats: number;
};

export type FlightInfo = {
  name: string;
  logoPath: string;
  startTime: string;
  duration: number;
  classDetails: FlightClassDetails[];
};

export type AppState = {
  flightSearchCriteria: FlightSearchCriteria;
  flights: FlightInfo[];
};

export type FlightSearchCriteria = {
  departureStn: string;
  destinationStn: string;
  departDate: string;
  returnDate: string;
  travellers: number;
  class: string;
};
