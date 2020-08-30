import React from 'react';
import { ReactComponent as SortIcon } from '../../assets/sort.svg';

export const SortBar = (props) => {
  return (
    <div className="productList__sort">
          <span>Сортировать</span>
          <div>
            <div
              onClick={e => {
                e.preventDefault();
                props.sortProducts('name');
              }}
              style={{
                background: props.sort.type === 'name' ? '#ccc' : null,
                color: props.sort.type === 'name' ? '#000' : null,
              }}
            >
              <span>По названию</span>
              <SortIcon 
                style={{
                  fill: props.sort.type === 'name' ? '#000' : null,
                  transform: props.sort.type === 'name' && props.sort.direction === 'asc' ? '' : 'rotate(180deg)'
                }}
              />
            </div>
            <div
              onClick={e => {
                e.preventDefault();
                props.sortProducts('price');
              }}
              style={{
                background: props.sort.type === 'price' ? '#ccc' : null,
                color: props.sort.type === 'price' ? '#000' : null,
              }}
            >
              <span>По цене</span>
              <SortIcon 
                style={{
                  fill: props.sort.type === 'price' ? '#000' : null,
                  transform: props.sort.type === 'price' && props.sort.direction === 'asc' ? '' : 'rotate(180deg)'
                }}
              />
            </div>
          </div>
        </div>
  )
}
