import React from "react";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";
import hand from "../style/img/hand.png";

export default function AllowNotification() {
  return (
    <div className={style.PhoneConfirmationContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last, imortant step!</h1>
        <h1 className="mb-3">
          Enable notification to know when pepole are talking
        </h1>
        <div className={style.AllowNotificationContainer}>
          <div className="p-3">
            <h3>"ClubHouse" woudl like to Send You Notification"</h3>
            <p>Notifications may include alerts, sounds, and icon badges</p>
          </div>
          <div className={style.action_btn}>
            <Link exact to="/home">
              dont Allow
            </Link>
            <Link exact to="/home">
              Allow
            </Link>
            <div>
              <img
                src={hand}
                alt=""
                style={{ width: "30px" }}
                className={style.hand_icon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
