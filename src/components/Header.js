import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";
import Search from "../style/img/search.png";
import Profile from "../style/img/profile.png";
import Noit from "../style/img/noit.png";
import Mail from "../style/img/mail.png";
import Calendary from "../style/img/calendary.png";

export default function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <img src={Search} alt="" />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/Profile">
          <img src={Profile} alt="" />
        </Link>
      </div>
    </div>
  );
}
