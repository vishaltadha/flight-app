import { useEffect, useState } from "react";
import { FLIGHT_CLASSES } from "../../utilities/app.constants";
import "./FilterBy.scss";

export type FilterByProps = {
  minPrice: number;
  maxPrice: number;
  classList: string[];
  filterFlightList: (
    minPrice: number,
    maxPrice: number,
    classList: string[]
  ) => void;
};
export const FilterBy: React.FC<FilterByProps> = ({
  minPrice,
  maxPrice,
  classList,
  filterFlightList,
}) => {
  const [selectedMinPrice, setSelectedMinPrice] = useState(minPrice || 0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPrice);
  const [selectedClassList, setSelectedClassList] = useState(classList);

  const resetForm = () => {
    setSelectedMinPrice(0);
    setSelectedMaxPrice(0);
    setSelectedClassList([]);
  };

  const selectFlightClass = (event: any, classId: string) => {
    if (event.target.checked) {
      setSelectedClassList([...selectedClassList, classId]);
    } else {
      setSelectedClassList(
        selectedClassList.filter((selectedClass) => selectedClass !== classId)
      );
    }
  };
  return (
    <div>
      <div className="card">
        <h3>Price Range</h3>
        <div className="row">
          <div className="input-group">
            <input
              type="number"
              id="minPrice"
              className="pl-4"
              onChange={(e: any) => {
                setSelectedMinPrice(e.target.value);
              }}
              value={selectedMinPrice}
            />
            <label htmlFor="minPrice">Minimum Price</label>
            <span className="input-prefix">$</span>
          </div>
          <div className="input-group">
            <input
              type="number"
              id="maxPrice"
              className="pl-4"
              onChange={(e: any) => {
                setSelectedMaxPrice(e.target.value);
              }}
              value={selectedMaxPrice}
            />
            <label htmlFor="maxPrice">Maximum Price</label>
            <span className="input-prefix">$</span>
          </div>
        </div>
      </div>
      <div className="card">
        <h3>Booking Class</h3>
        <div className="m-0">
          {FLIGHT_CLASSES.map((flightClass, idx) => {
            return (
              <div className="mt-2" key={idx}>
                <input
                  type="checkbox"
                  name="bookingClass"
                  id=""
                  checked={
                    !!selectedClassList.find(
                      (selectedClass) => selectedClass === flightClass.id
                    )
                  }
                  onChange={(e) => selectFlightClass(e, flightClass.id)}
                  value={flightClass.id}
                />
                <span className="pl-3">{flightClass.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row m-0 mt-2">
        <div className="col">
          <button
            className="col btn btn-outline mb-3"
            onClick={() => resetForm()}
          >
            Reset All
          </button>
        </div>

        <div className="col">
          <button
            className="col btn btn-secondary"
            onClick={() =>
              filterFlightList(
                selectedMinPrice,
                selectedMaxPrice,
                selectedClassList
              )
            }
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
