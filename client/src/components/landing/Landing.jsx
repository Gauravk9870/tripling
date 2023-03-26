import React from "react";
import "./landing.scss";
import TrekkingIcon from "../../assests/icons/hiking.svg";
import RaftingIcon from "../../assests/icons/rafting.svg";
import WindSurfingIcon from "../../assests/icons/windsurfing.svg";
import ParaglidingIcon from "../../assests/icons/paragliding.svg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="title">
          <div className="line1">Travel Around The</div>
          <div className="line2">
            <div>World</div>
            <div>
              Don't Wait until tomorrow, discover your adventure now and feel the
              sensation of closeness to nature around you to get the best of you
              adventure you just need to leave and go where you like
            </div>
          </div>
        </div>
        <div className="content">
          <img
            src="https://images.pexels.com/photos/3320518/pexels-photo-3320518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="landingImg"
          />
          <div className="activities">
            <div className="activity">
              <img src={TrekkingIcon} alt="" />
              <div className="activityDetails">
                <span>Trekking</span>
                <span>Climbing the tallest mountains of the World</span>
              </div>
            </div>
            <div className="activity">
              <img src={RaftingIcon} alt="" />
              <div className="activityDetails">
                <span>Rafting</span>
                <span>Let's met the wildest river and rafting</span>
              </div>
            </div>
            <div className="activity">
              <img src={WindSurfingIcon} alt="" />
              <div className="activityDetails">
                <span>Windsurfing</span>
                <span>Don't see the tallest wave on a rainy day</span>
              </div>
            </div>
            <div className="activity">
              <img src={ParaglidingIcon} alt="" />
              <div className="activityDetails">
                <span>Paragliding</span>
                <span>Let's fly in the sky like birds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
