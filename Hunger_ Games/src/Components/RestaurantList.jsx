import React from "react";

const RestaurantList = ({ name, id, foodie, costForTwo, minOrder, deliveryTime, payment_methods: { card, cash }, rating, votes, reviews, src }) => {
  console.log('foodie', foodie);
  return (
    <div>
      <div>
        <div>
          <div>
            <h3 className="name">{name}</h3>
            <p>{`${foodie[0] } ${foodie[1]} ${foodie[2] }  ${foodie[3] } `}</p>
            <p>Cost ₹{costForTwo} for two</p>
            <p>
              Min ₹{minOrder} Order &#8226; Up to {deliveryTime} min
            </p>
            <p>
              Accept{" "}
              {card === true && cash === true
                ? "Cash & Card"
                : card === true
                ? "Card"
                : "Cash"}{" "}
              payments
            </p>
          </div>
          <div>
            <button className="rating">
              <h3>{rating}</h3>
            </button>
            <p className="votes">{votes} votes</p>
            <p className="reviews">{reviews} reviews</p>
          </div>
        </div>
        <div>
          <button className="order-online">Order Online &#10140;</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;


// backend-axios