import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./FlightSearchResult.scss";
import {
  AppState,
  FlightInfo,
  FlightSearchCriteria,
} from "../../utilities/app.model";
import { FlightDetails } from "../FlightDetails/FlightDetails";
import { useNavigate } from "react-router";
import { SearchResultList } from "../SearchResultList/SearchResultList";
import { FilterBy } from "../FilterBy/FilterBy";
import { SortBy } from "../SortBy/SortBy";
type FlightSearchResultProps = {};

export const FlightSearchResult = (props: FlightSearchResultProps) => {
  const [openPage, setOpenPage] = useState("");
  const [currentSortBy, setCurrentSortBy] = useState("priceAsc");
  const [currentMinPrice, setCurrentMinPrice] = useState(0);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(0);
  const [currentClassList, setCurrentClassList] = useState([] as string[]);
  const [sortActive, setSortActive] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const flights: FlightInfo[] = useSelector((state: AppState) => state.flights);

  const [filteredFlights, setFilteredFlights] = useState([] as FlightInfo[]);

  const toggleOpenPage = (pageName: string) => {
    setOpenPage(pageName);
  };

  useEffect(() => {
    setFilteredFlights(JSON.parse(JSON.stringify(flights)) as FlightInfo[]);
  }, [flights]);

  const onSortChange = (
    selectedOption: string,
    formattedList = filteredFlights
  ) => {
    setSortActive(selectedOption !== "");
    setCurrentSortBy(selectedOption);
    switch (selectedOption) {
      case "priceAsc":
        setFilteredFlights(
          formattedList.sort((item1, item2) => {
            item1.classDetails.sort((class1, class2) =>
              class1.price > class2.price ? 1 : -1
            );
            item2.classDetails.sort((class1, class2) =>
              class1.price > class2.price ? 1 : -1
            );
            return item1.classDetails[0].price > item2.classDetails[0].price
              ? 1
              : -1;
          })
        );
        break;
      case "priceDesc":
        setFilteredFlights(
          formattedList.sort((item1, item2) => {
            item1.classDetails.sort((class1, class2) =>
              class1.price > class2.price ? -1 : 1
            );
            item2.classDetails.sort((class1, class2) =>
              class1.price > class2.price ? -1 : 1
            );
            return item1.classDetails[0].price > item2.classDetails[0].price
              ? -1
              : 1;
          })
        );
        break;
      case "durationAsc":
        setFilteredFlights(
          formattedList.sort((item1, item2) =>
            item1.duration > item2.duration ? 1 : -1
          )
        );
        break;
      case "durationDesc":
        setFilteredFlights(
          formattedList.sort((item1, item2) =>
            item1.duration > item2.duration ? -1 : 1
          )
        );
        break;
      case "airlineAsc":
        setFilteredFlights(
          formattedList.sort((item1, item2) =>
            item1.name > item2.name ? 1 : -1
          )
        );
        break;
      case "airlineDesc":
        setFilteredFlights(
          formattedList.sort((item1, item2) =>
            item1.name > item2.name ? -1 : 1
          )
        );
        break;
      default:
        setFilteredFlights(formattedList);
    }
    setOpenPage("");
  };

  const onFilterChange = (
    minPrice: number,
    maxPrice: number,
    classList: string[]
  ) => {
    setCurrentMinPrice(minPrice);
    setCurrentMaxPrice(maxPrice);
    setCurrentClassList(classList);
    let isFilterActive = false;
    let flightList: FlightInfo[] = JSON.parse(JSON.stringify(flights));
    if (minPrice > 0) {
      isFilterActive = true;
      flightList = flightList.reduce((acc, item) => {
        item.classDetails = item.classDetails.filter(
          (classData) => classData.price >= minPrice
        );
        if (item.classDetails.length > 0) {
          acc.push(item);
        }
        return acc;
      }, [] as FlightInfo[]);
    }
    if (maxPrice > 0) {
      isFilterActive = true;
      flightList = flightList.reduce((acc, item) => {
        item.classDetails = item.classDetails.filter(
          (classData) => classData.price <= maxPrice
        );
        if (item.classDetails.length > 0) {
          acc.push(item);
        }
        return acc;
      }, [] as FlightInfo[]);
    }
    if (classList.length > 0) {
      isFilterActive = true;
      flightList = flightList.reduce((acc, item) => {
        item.classDetails = item.classDetails.filter(
          (classData) => classList.indexOf(classData.className) >= 0
        );
        if (item.classDetails.length > 0) {
          acc.push(item);
        }
        return acc;
      }, [] as FlightInfo[]);
    }
    setFilterActive(isFilterActive);
    onSortChange(currentSortBy, flightList);
    setOpenPage("");
  };

  return (
    <div className="content-height">
      {openPage === "" ? (
        <SearchResultList
          flights={filteredFlights}
          isSortActive={sortActive}
          isFilterActive={filterActive}
          openSortFilter={toggleOpenPage}
        />
      ) : (
        ""
      )}
      {openPage === "sortby" ? (
        <SortBy onSubmit={onSortChange} currentSortBy={currentSortBy} />
      ) : (
        ""
      )}
      {openPage === "filterby" ? (
        <FilterBy
          minPrice={currentMinPrice}
          maxPrice={currentMaxPrice}
          classList={currentClassList}
          filterFlightList={onFilterChange}
        />
      ) : (
        ""
      )}
    </div>
  );
};
