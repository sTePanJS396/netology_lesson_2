import React from 'react'

const ShopItem = ({ title, color, price, img }) => {
  return (
      <li className="shop-ul-item">
            <div className="shop-ul-item-title"><span>{title}</span></div>
            <div className="shop-ul-item-span"><span>{color}</span></div>
            <div className="shop-ul-item-image">
                <img src={img} alt={title} />
            </div>
            <div className="shop-ul-item-footer">
                <ul className="shop-ul-item-footer-list">
                    <li className="shop-ul-item-footer-list-item-price">{`$ ${price}`}</li>
                    <li className="shop-ul-item-footer-list-item-button">
                        <button>Add to card</button>
                    </li>
                </ul>
            </div>
        </li>
  );
}

export default ShopItem