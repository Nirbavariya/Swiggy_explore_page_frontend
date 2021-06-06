import React from "react";
import Hotelblock from "./Hotelblock";

function Category() {
  return (
    <div className="category">
      <div>
        <h1>Popular Brands</h1>
      </div>
      <div>
        <Hotelblock />
        <Hotelblock />
        <Hotelblock />
        <Hotelblock />
        <Hotelblock />
        <Hotelblock />
      </div>
    </div>
  );
}
export default Category;
