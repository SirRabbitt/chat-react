import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.welcomeContainer}>
      <h1>Welcome</h1>
      <div className={style.welcomeInfo}>
        <p>
          we are working hard to get cone clubhouse ready for every one. While
          we wrap up the finishing touches,we are adding people gradually to
          make sure to nothing breaks
        </p>
        <p>
          Anyone can join with an invite frome an existin user- or resserve
          youre udername and we ll text you if you have frieds on the app who
          can let let you in we are so grateful you are here and can t wait to
          have you join{" "}
        </p>

        <p>paul, rohan, kamil & the clubhouse team</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/invite"
          className="primeryBtn d-flex align-items-center mb-3"
        >
          Get your username{" "}
        </Link>
        <Link>Have an invite text ? Sing in</Link>
      </div>
    </div>
  );
}
