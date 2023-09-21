import React, { useState, useEffect } from "react";
import data from "../data/roomCard.json";
import style from "../style/roomCard.module.css";
import user1 from "../style/img/user1.jpg";
import user2 from "../style/img/user2.jpg";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";
export default function RoomInfoCard(props) {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <div className={style.roomCardCointainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img src={user1} alt="" />
                  <img src={user2} alt="" />
                </div>
                <div>
                  {item.members.map((person) => (
                    <p>
                      {person.first_name} {person.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex aling-items-center">
                    <span className="mr-2">1.8</span>
                    <BsFillPersonFill />
                    <span className="mr-2"></span>{" "}
                    <span className="mr-2">5</span>
                    <BsChatDotsFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
