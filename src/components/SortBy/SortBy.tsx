import { useState } from "react";
import { SORT_BY_OPTIONS } from "../../utilities/app.constants";
import "./SortBy.scss";

type SortByProps = {
  currentSortBy: string;
  onSubmit: (selectedOption: string) => void;
};

export const SortBy: React.FC<SortByProps> = ({ currentSortBy, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(currentSortBy);

  return (
    <div className="d-flex flex-column h-100">
      <div className="flex-grow-1">
        {SORT_BY_OPTIONS.map((option, idx) => {
          return (
            <div className="m-3" key={idx}>
              <input
                type="radio"
                name="sortBy"
                className="m-2"
                defaultChecked={option.id === currentSortBy}
                onClick={() => setSelectedOption(option.id)}
              />
              {option.label}
            </div>
          );
        })}
      </div>

      <div className="row m-0 mt-2">
        <div className="col">
          <button
            className="w-100 btn btn-primary"
            onClick={() => onSubmit(selectedOption)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
