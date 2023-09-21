import React, { useState } from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";
import user1 from "../style/img/user1.jpg";
import { BsTextCenter } from "react-icons/bs";
import search from "../style/img/search.png";
import SubHeader from "../components/SubHeader";
export default function Explore() {
  const { people, conversation } = data;

  return (
    <div className="app_layout">
      <div className={style.exploreContainer}>
        <div className={style.header}>
          <SubHeader pageTitle="Explore" />
          <img src={search} width="15px" />
          <input
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0.8em",
              padding: " 0.3em 1em",
              border: "none",
              boxShadow: "none",
            }}
            size="lager"
            placeholder="Find People and Clubs"
          ></input>
        </div>
        <h6>PEOPLE TO FOLLOW</h6>
        <div className={style.peopleContainer}>
          {people.map((item) => (
            <div>
              <div className="d-flex aling-items-center">
                <img src={user1} alt="" />
                <div className="ml-2">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
              <button>Follow</button>
              <h6>FIND CONVERSATION ABOUT</h6>
            </div>
          ))}
          <button className={style.showMore}>
            Show more people <DownOutlined />
          </button>
        </div>
        <h6>FIND CONVERSATION ABOUT</h6>
        <div className="row mx-0">
          {conversation.map((item) => (
            <div className="col-6 px-2 mb-3">
              <div className={style.conversationCard}>
                <h6>
                  <FireOutlined />
                  {item.title}
                </h6>
                <p>{item.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
