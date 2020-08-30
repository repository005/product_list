import React from 'react';

export const Pagination = (props) => {
  
  const renderPagination = () => {
    const countPages = Math.ceil(props.totalCount / 10);
    let pages = [];
    for (let i = 1; i < countPages + 1; i++) {
      pages.push(
        <a 
          onClick={e => {
            e.preventDefault();
            props.setPage(i);
          }}
          href=""
          style={{
            background: props.page === i ? '#ccc' : ''
          }}
          key={i} 
          className="productList__page"
        >{i}</a>
      )
    }
    return pages;
  }

  return (
    <div className="productList__pagination">
      <a 
        onClick={e => {
          e.preventDefault();
          if (props.prev) {
            props.setPage(props.page - 1);
          }
        }}
        style={{
          opacity: props.prev ? '' : '.3'
        }}
        href="#" 
        className="productList__page"
      >{'<'}</a>
      {renderPagination()}
      <a 
        onClick={e => {
          e.preventDefault();
          if (props.next) {
            props.setPage(props.page + 1);
          }
        }}
        style={{
          opacity: props.next ? '' : '.3'
        }}
        href="#" className="productList__page"
      >{'>'}</a>
    </div>
  )
}
