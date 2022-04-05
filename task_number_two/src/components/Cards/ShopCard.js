import React from 'react'

const ShopCard = ({ title, color, img, price}) => {
    return (
        <li className="shop-list-item">
            <div className="shop-list-item-header">
                <div className="shop-list-item-title"><span>{title}</span></div>
                <div className="shop-list-item-span"><span>{color}</span></div>
            </div>
            <div className="shop-list-item-image">
                <img src={img} alt={title} />
            </div>
            <div className="shop-list-item-footer">
                <ul className="shop-list-item-footer-list">
                    <li className="shop-list-item-footer-list-item-price">{`$ ${price}`}</li>
                    <li className="shop-list-item-footer-list-item-button">
                        <button>Add to card</button>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default ShopCard