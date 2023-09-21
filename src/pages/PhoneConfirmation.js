import React, { useState } from "react";
import next from "../style/img/next.png";
import back from "../style/img/back.png";
// import { Link } from "react-router-dom";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { logDOM } from "@testing-library/react";
export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.PhoneConfirmationContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src={back} alt="" />
      </Link>

      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />

      <p>
        By entering your number , you are aggreing to our
        <span> Termsod Service and Privacy Policy</span>{" "}
      </p>
      <Link
        exact
        to="/confirm"
        className="primeryBtn d-flex align-items-center"
      >
        Next{" "}
        <img
          src={next}
          alt=""
          className="ml-1"
          style={{ width: "28px", margin: 0 }}
        />
      </Link>
    </div>
  );
}
