import react, { useState } from "react";
import style from "../../style/bottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";

export default function StartRoom(props) {
  const [room, setRoom] = useState("open");
  return (
    <div className={style.BottomSheetContainer}>
      <div className={style.switch_Line}></div>
      <div className="text-right">
        <buttom className={style.addTopicBtn}>+ Add a topic</buttom>
      </div>
      <div className={style.selectRoom}>
        <button
          className={room == "open" ? style.active : ""}
          onClick={() => setRoom("open")}
        >
          <div>
            <FcGlobe />
          </div>
          open
        </button>
        <button
          className={room == "social" ? style.active : ""}
          onClick={() => setRoom("social")}
        >
          <div>
            <FcGlobe />
          </div>
          social
        </button>
        <button
          className={room == "closed" ? style.active : ""}
          onClick={() => setRoom("closed")}
        >
          <div>
            <FcGlobe />
          </div>
          closed
        </button>
      </div>
      <p>
        Start a Room{" "}
        <span>
          {room == "closed"
            ? "For people I choose"
            : room == "social"
            ? "with people i follow"
            : "open to everyone"}
        </span>
      </p>
      <div className="text-center">
        <button
          className={style.letGoBtn}
          onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisible(true);
          }}
        >
          Let`s go
        </button>
      </div>
    </div>
  );
}
