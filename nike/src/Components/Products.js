import React from "react";
import BackShoe from "../Images/BackShoe.webp";
import Bottom from "../Images/Bottom.webp";
import CloseView from "../Images/CloseView.webp";
import LeftSide from "../Images/LeftSide.webp";
import RightSide from "../Images/RightSide.webp";
import TopView from "../Images/TopView.webp";
import TwoShoes from "../Images/TwoShoes.webp";
import './products.css'
// put images in object
// map through images creating a inline div from each image with the key = to the picture Id
// Work on Right side
// Add Shopping Cart and Favorite Heart Icon Button
// Size Boxes (HardCoded)
// Add To Bag and Favorite <3 button
// Gold ---> dropping down bar for free shipping, How this was made, Reviews (hardCoded)

function Products() {
  const Item = [
    {
      itemName: "Nike Air Force 1 Crater",
      itemGender: "Women's Shoe",
      itemPrice: "$110",
      photo: [ {id: 1, image: BackShoe} ,  {id: 2, image: Bottom}, {id: 3, image: CloseView}, {id: 4, image: LeftSide}, {id: 5, image: RightSide}, {id: 6, image: TopView}, {id: 7, image: TwoShoes} ],
    },
  ];

//   console.log(Item[0].photo[0].BackShoe);

  return (
    <div className="container">
      <img src={Item[0].photo[0].BackShoe} alt=''/>
      {Item[0].photo.map(picture => (
          <div className='productPictures' key={picture.id}>
             <img src={picture.image}  alt='' style={{width: '400px', height: '450px'}}/> 
          </div>
      ))}
    </div>
  );
}

export default Products;
