import React from 'react'
import ShopItem from './ShopItem'

const ListView = ({ list }) => {
  return (
    <div className="list-view">
        <ul className="list-ul">
            {list.map((el, index) => (
                <ShopItem key={(index + 3) * 5} title={el.name} color={el.color} price={el.price} img={el.img}/>
            ))}
        </ul>
    </div>
  )
}

export default ListView