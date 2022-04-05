import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ card }) => {
  return (
    <div className="card-view">
        <ul className="shop-list">
            {card.map((el, index) => (
                <ShopCard key={(index + 3) * 5} title={el.name} color={el.color} price={el.price} img={el.img}/>
            ))}
        </ul>
    </div>
  )
}

export default CardsView