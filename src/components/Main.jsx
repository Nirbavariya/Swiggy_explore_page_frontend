import React from "react";
import Category from "./Category";
import Data from "../data";

function Main() {
  return (
    <div className="main">
      {Data.map((aCategory, index) => (
        <Category
          key={index}
          id={index}
          categoryName={aCategory.category}
          restaurantList={aCategory.restaurantList}
        />
      ))}
    </div>
  );
}
export default Main;
