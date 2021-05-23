import React from 'react';
import './grid-element.scss';

const GridElement = ({ data }) => {
  const imageSrc = data['color-img'][0].img;
  const name = data.name;
  const price = data['rom-price'][0].price;
  return (
    <div className="grid-element">
      <img src={imageSrc} />
      <div className="info">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}
export default GridElement;