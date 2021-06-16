import React from "react";

function Hotelblock(props) {
  const images = [
    "https://images.everydayhealth.com/images/healthy-foods-that-are-great-sources-of-iron-03-1440x810.jpg",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"
  ];
  const index = Math.floor(Math.random() * images.length);
  const url = images[index];
  return (
    <div className="hblock">
      <img src={url} alt="Food "></img>
      <h2>{props.hotelName}</h2>
      <h3 className="cuisine">{props.cuisine.toString()}</h3>
      <div className="special">
        <button type="button" disabled>
          ✩ {props.hotelRating}
        </button>
        <h4> ◻ </h4>
        <h4>{props.hotelTime}</h4>
        <h4> ◻ </h4>
        <h4>
          ₹ {} {props.hotelPrice} for 2
        </h4>
      </div>
    </div>
  );
}

export default Hotelblock;
