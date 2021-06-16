import React from "react";
import Hotelblock from "./Hotelblock";
import More from "./More";

function Category(props) {
  const hotelArray = props.restaurantList;
  return (
    <div className="category" id={props.categoryName}>
      <div>
        <h1>{props.categoryName}</h1>
      </div>
      <div className="cblock">
        {hotelArray.map((hotel, index) =>
          index <= 4 ? (
            <Hotelblock
              hotelRating={hotel.ratings}
              hotelTime={hotel.delivery_time}
              hotelPrice={hotel.price_for_two}
              hotelName={hotel.name}
              cuisine={hotel.food_types}
            />
          ) : null
        )}
        <More number={hotelArray.length - 5} />
      </div>
    </div>
  );
}
export default Category;
