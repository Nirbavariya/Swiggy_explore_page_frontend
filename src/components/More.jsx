import React from "react";

function More(props) {
  return (
    <div className="hblock more">
      <h4>
        + {props.number} {} More
      </h4>
    </div>
  );
}
export default More;
