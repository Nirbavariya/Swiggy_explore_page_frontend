import React from "react";
import Data from "../data";

function Sideblock() {
  return (
    <div>
      {Data.map((category) => {
        return (
          <div className="blockElement">
            <a href={"#" + category.category}>
              {category.category}
              <button onClick="" hidden></button>
            </a>
            <h5>
              {category.restaurantList.length} {} Options
            </h5>
          </div>
        );
      })}
      <div className="blockElement">
        <a href="#">
          Only On Swiggy
          <button onClick="" hidden />
        </a>
        <h5>17 Options</h5>
      </div>
      <div className="blockElement">
        <a href="#">
          See All
          <button onClick="" hidden />
        </a>
        <h5>65 Options</h5>
      </div>
    </div>
  );
}
export default Sideblock;
