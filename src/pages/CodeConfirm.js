import React from "react";
import Style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";
import back from "../style/img/back.png";
import next from "../style/img/next.png";
export default function () {
  return (
    <div className={Style.PhoneConfirmationContainer}>
      <Link exact to="/get_username" className={Style.backBtn}>
        <img src={back} alt="" />
      </Link>
      <div className="text-center">
        <h1 style={{ width: "100 %", maxWidth: "250px", margin: "auto" }}>
          enter te code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
            marginTop: "20px",
          }}
        />
        <p className="mt-2">
          Did t receive it ? <span>Tap to resend</span>
        </p>
      </div>
      <Link exact to="/allow_notification" className="primeryBtn">
        next
        <img src={next} alt="" style={{ width: "28px" }} />
      </Link>
    </div>
  );
}
