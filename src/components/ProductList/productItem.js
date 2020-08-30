import React from 'react'

export const ProductItem = (props) => {
  
  return (
    <div 
      className={props.type === 'tile' ? 'productList__item productList__item_tile' : 'productList__item productList__item_list'}
    >
      <img src={props.product.image} alt="product_photo"/>
      <p>{props.product.name}</p>
      <span>{props.product.price} рублей</span> 
    </div>
  )
}
