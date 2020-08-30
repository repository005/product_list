import React from 'react';
import { ProductItem } from './productItem';

export const ProductList = (props) => {
  
  const renderItems = () => {
    return props.data.map((item ,i) => {
      return (
        <ProductItem key={i} product={item} {...props}/>
      )
    })
  }

  return (
    <div 
      className={props.type === 'tile' ? 'productList__container productList__container_tile' : 'productList__container productList__container_list'}
    >
      {renderItems()}
    </div>
  )
}
