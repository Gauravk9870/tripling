import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleIcon from "@mui/icons-material/People";
import HotelIcon from "@mui/icons-material/Hotel";
import Count from "../../count/Count";
import { Link } from "react-router-dom";

const Widget = () => {
  const data = [
    {
      title: "hotels",
      link: "/",
      icon: (
        <ApartmentIcon
          className="icon"
          style={{
            color: "#05c4bc",
            // backgroundColor: "#ff8da1",
          }}
        />
      ),
    },
    {
      title: "users",
      link: "/",
      icon: (
        <PeopleIcon
          style={{
            color: "#ff8da1",
            // backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
    },
    {
      title: "rooms",
      link: "/",
      icon: (
        <HotelIcon
          style={{
            color: "#ff9e56",
            // backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
    },
  ];

  return (
    <>
      {data.map((item, i) => (
        <div className="widget" key={i}>
          <div className="left">
            <span className="title">{item.title}</span>
            <span className="counter">
              <Count path={item.title} />
            </span>
            <Link style={{textDecoration:"none", color:"inherit"}} to={`${item.title}`}>
              <span className="link">View all {item.title}</span>
            </Link>
          </div>
          <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon />5
            </div>
            {item.icon}
          </div>
        </div>
      ))}
    </>
  );
};

export default Widget;
