import React from "react";

function Hotelblock() {
  const url =
    "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60";
  return (
    <div className="hblock">
      <img src={url} alt="Food "></img>
      <h4>Restaurant Name</h4>
      <h5>Cuisine</h5>
      <div className="special">
        <button type="button" disabled>
          ✩ 4.5
        </button>
        <h6> ◻ </h6>
        <h5> 42 Mins </h5>
        <h6> ◻ </h6>
        <h5> ₹1200 for 2</h5>
      </div>
    </div>
  );
}

export default Hotelblock;
