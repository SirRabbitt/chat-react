import React, { useState } from "react";
import explorestyle from "../style/explore.module.css";
import style from "../style/Profile.module.css";
import user1 from "../style/img/user1.jpg";
import { BsAt, BsUpload } from "react-icons/bs";
import { withRouter, Link } from "react-router-dom";
import back from "../style/img/back.png";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Profile() {
  return (
    <div className="app_layout">
      <div className={style.profileContainer}>
        <div className={style.head}>
          <div className={style.header}>
            <Link to="/home">
              <img src={back} alt="" width={"25px"} />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src={user1} alt="" className={style.img} />
        <h4>kami król</h4>
        <p>@kamilKrol</p>
        <div className={style.follow}>
          <p>
            {" "}
            <span>0</span> followers
          </p>
          <p>
            {" "}
            <span>51</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button>
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button>
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
