import "./header.scss";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { SearchContext } from "../../context/SearchContext";

const Header = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const navigate = useNavigate();

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const {dispatch} = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({type:"NEW_SEARCH", payload:{destination,dates, options}});
    navigate("/hotels", { state: { destination, dates, options } });
  };
  return (
    <div className="header">
      <Navbar />
      
      <div className="hContainer">
        <div className="hContent">
          <span className="hTitle">
            Hey Buddy! where are you <br />
            <b>Flying</b> to?
          </span>

          <div className="hButton">
            <button className="exploreNow">explore Now</button>
            <i class="fa fa-arrow-right hIcon"></i>
          </div>
        </div>
        <div className="search">
          <div className="hCategory">
            <div className="hCategoryItem">
              <i class="fa-solid fa-plane"></i>
              <span>Flight</span>
            </div>
            <div className="hCategoryItem active">
              <i class="fa-solid fa-hotel"></i>
              <span>Hotel</span>
            </div>
            <div className="hCategoryItem">
              <i class="fa-solid fa-taxi"></i>
              <span>Cab</span>
            </div>
          </div>
          <div className="hSearchDetails">
            <div className="searchHotels">
              <div className="hSearchItem">
                <label>
                  <i class="fa-solid fa-bed"></i>
                  Destination
                </label>

                <input
                  type="text"
                  placeholder="Where are you going"
                  className="searchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="hSearchItem">
                <label>
                  <i class="fa-solid fa-calendar-days"></i>
                  Date
                </label>
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="searchText"
                >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="hSearchItem">
                <label>
                  <i class="fa-solid fa-person"></i>
                  Number Of Person
                </label>
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="searchText"
                >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hSearchBtn">
            <button className="btn" onClick={handleSearch}>
              Search Hotels
              <i class="fa fa-arrow-right hIcon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
