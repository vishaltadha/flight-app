import { FlightInfo, TabInfo } from "./app.model";

export const FLIGHT_CLASSES = [
  {
    id: "ec",
    label: "Economy",
  },
  {
    id: "bs",
    label: "Basic",
  },
  {
    id: "mn",
    label: "Main",
  },
];

export const TABS_DATA: TabInfo[] = [
  {
    name: "Flights",
    icon: "fa-plane-departure",
  },
  {
    name: "Hotels",
    icon: "fa-hotel",
  },
  {
    name: "Cars",
    icon: "fa-car",
  },
  {
    name: "Activities",
    icon: "fa-snowboarding",
  },
];

export const FLIGHTS_DATA: FlightInfo[] = [
  {
    name: "Spice Jet",
    logoPath: "assets/spicejet.png",
    startTime: "Sun Nov 28 2021 13:19",
    duration: 360,
    classDetails: [
      {
        className: "ec",
        price: 78,
        availableSeats: 3,
      },
      {
        className: "bs",
        price: 98,
        availableSeats: 10,
      },
      {
        className: "mn",
        price: 180,
        availableSeats: 5,
      },
    ],
  },
  {
    name: "Indigo",
    logoPath: "assets/indigo.png",
    startTime: "Sun Nov 28 2021 7:05",
    duration: 180,
    classDetails: [
      {
        className: "ec",
        price: 70,
        availableSeats: 15,
      },
      {
        className: "bs",
        price: 90,
        availableSeats: 10,
      },
      {
        className: "mn",
        price: 120,
        availableSeats: 2,
      },
    ],
  },
  {
    name: "Vistara",
    logoPath: "assets/vistara.png",
    startTime: "Sun Nov 28 2021 10:40",
    duration: 320,
    classDetails: [
      {
        className: "ec",
        price: 35,
        availableSeats: 10,
      },
      {
        className: "bs",
        price: 75,
        availableSeats: 1,
      },
      {
        className: "mn",
        price: 91,
        availableSeats: 4,
      },
    ],
  },
  {
    name: "Spice Jet",
    logoPath: "assets/spicejet.png",
    startTime: "Sun Nov 28 2021 4:02",
    duration: 200,
    classDetails: [
      {
        className: "ec",
        price: 132,
        availableSeats: 10,
      },
      {
        className: "bs",
        price: 140,
        availableSeats: 3,
      },
      {
        className: "mn",
        price: 150,
        availableSeats: 6,
      },
    ],
  },
  {
    name: "Vistara",
    logoPath: "assets/vistara.png",
    startTime: "Sun Nov 28 2021 07:00",
    duration: 80,
    classDetails: [
      {
        className: "ec",
        price: 73,
        availableSeats: 45,
      },
      {
        className: "bs",
        price: 86,
        availableSeats: 25,
      },
      {
        className: "mn",
        price: 99,
        availableSeats: 1,
      },
    ],
  },
  {
    name: "Indigo",
    logoPath: "assets/indigo.png",
    startTime: "Sun Nov 28 2021 11:40",
    duration: 250,
    classDetails: [
      {
        className: "ec",
        price: 72,
        availableSeats: 14,
      },
      {
        className: "bs",
        price: 98,
        availableSeats: 10,
      },
      {
        className: "mn",
        price: 115,
        availableSeats: 40,
      },
    ],
  },
  {
    name: "Vistara",
    logoPath: "assets/vistara.png",
    startTime: "Sun Nov 28 2021 8:30",
    duration: 128,
    classDetails: [
      {
        className: "ec",
        price: 77,
        availableSeats: 2,
      },
      {
        className: "bs",
        price: 84,
        availableSeats: 8,
      },
      {
        className: "mn",
        price: 110,
        availableSeats: 1,
      },
    ],
  },
  {
    name: "Spice Jet",
    logoPath: "assets/spicejet.png",
    startTime: "Sun Nov 28 2021 15:45",
    duration: 347,
    classDetails: [
      {
        className: "ec",
        price: 44,
        availableSeats: 1,
      },
      {
        className: "bs",
        price: 50,
        availableSeats: 7,
      },
      {
        className: "mn",
        price: 63,
        availableSeats: 6,
      },
    ],
  },
  {
    name: "Indigo",
    logoPath: "assets/indigo.png",
    startTime: "Sun Nov 28 2021 03:42",
    duration: 114,
    classDetails: [
      {
        className: "ec",
        price: 150,
        availableSeats: 3,
      },
      {
        className: "bs",
        price: 250,
        availableSeats: 7,
      },
      {
        className: "mn",
        price: 300,
        availableSeats: 4,
      },
    ],
  },
];

export const SORT_BY_OPTIONS = [
  {
    label: "Price (Lowest to Highest)",
    id: "priceAsc",
  },
  {
    label: "Price (Highest to Lowest)",
    id: "priceDesc",
  },
  {
    label: "Duration (Shortest to Longest)",
    id: "durationAsc",
  },
  {
    label: "Duration (Longest to Shortest)",
    id: "durationDesc",
  },
  {
    label: "Airline (A to Z)",
    id: "airlineAsc",
  },
  {
    label: "Airline (Z to A)",
    id: "airlineDesc",
  },
  {
    label: "Clear",
    id: "",
  },
];
