import React from "react";
import style from "../style/explore.module.css";
import { withRouter, Link } from "react-router-dom";
import back from "../style/img/back.png";
export default function SubHeader(props) {
  return (
    <div className={style.head}>
      <Link to="/home">
        {" "}
        <img src={back} alt="" width={"25px"} />
      </Link>
      <h3>{props.pageTitle}</h3>
    </div>
  );
}
