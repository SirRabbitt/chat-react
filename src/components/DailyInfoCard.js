import React from "react";
import data from "../data/dailyCard.json";
import style from "../style/dailyInfoCard.module.css";

export default function DailyInfoCard() {
  return (
    <div className={style.DailyCard}>
      {data.map((item) => (
        <div>
          <span>{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
