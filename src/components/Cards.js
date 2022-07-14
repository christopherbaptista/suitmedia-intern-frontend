import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>OUR VALUES</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/lightbulb-o-new.jpg"
              background="black"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?"
              label="INNOVATIVE"
              path="/"
            />
            <CardItem
              src="images/bank-new.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?"
              label="LOYALTY"
              path="/"
            />
            <CardItem
              src="images/balance-scale-new.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?"
              label="RESPECT"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
