import React from "react";

function Sideblock() {
  const categoryList = [
    "Popular Brands",
    "Offers Near You",
    "Express Delivery",
    "Gourmet",
    "Only On Swiggy",
    "See All"
  ];
  let url = "#";
  return (
    <div>
      {categoryList.map((category) => {
        return (
          <div className="blockElement">
            <a href={url}>{category}</a>
            <h5>45 Options</h5>
          </div>
        );
      })}
    </div>
  );
}
export default Sideblock;
