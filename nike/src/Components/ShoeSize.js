import React from "react";

function ShoeSize() {
  const Sizes = [
    "W 5 / M 3.5",
    "W 5.5 / M 4",
    "W 6 / M 4.5",
    "W 6.5 / M 5",
    "W 7 / M 5.5",
    "W 7.5 / M 6",
    "W 8 / M 6.5",
    "W 8.5 / M 7",
    "W 9 / M 7.5",
    "W 9.5 / M 8",
    "W 10 / M 8.5",
    "W 10.5 / M 9",
  ];
  console.log(Sizes);
  return (
    <div className="shoeSize">
      <h3>Select Size</h3>
      <div className="shoes">
        {Sizes.map((nike) => (
          <div className="nikeShoes">
            <h5>{nike}</h5>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button>Add to Bag</button>
        <button>Favorite</button>
      </div>
    </div>
  );
}

export default ShoeSize;
