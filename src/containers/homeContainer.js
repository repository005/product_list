import React, { useState, useEffect } from 'react';
import { ProductList } from '../components/ProductList/productList';
import { Pagination } from '../components/ProductList/pagination';
import { SortBar } from '../components/ProductList/sortBar';
import { connect } from 'react-redux';
import { getProducts } from '../actions/index';

const HomeContainer = (props) => {
  
  const [sort, setSort] = useState({
    type: 'name',
    direction: 'asc'
  });

  const [itemType, setItemType] = useState('tile');
  const [search, setSearch] = useState('');

  useEffect(() => {
    props.dispatch(getProducts());
  }, []);

  const sortProducts = (type) => {
    let copySort = {...sort};

    if (copySort.type === type) {
      if (copySort.direction === 'asc') {
        copySort.direction = 'desc';
      } else {
        copySort.direction = 'asc';
      }
    } else {
      copySort.type = type;
    }
    
    setSort(copySort);
    props.dispatch(getProducts(copySort.type, copySort.direction, props.products.data.current_page, search));
  }

  const setPage = (page) => {
    props.dispatch(getProducts(sort.type, sort.direction, page, search));
  }

  return (
    <div className="productList">
      <div className="productList__top">
        <div className="productList__search">
          <label>
            <span>Поиск</span>
            <input 
              onChange={e => {
                e.preventDefault();
                setSearch(e.target.value);
                props.dispatch(getProducts(sort.type, sort.direction, props.products.data.current_page, e.target.value));
              }}
              value={search}
              type="text" 
              placeholder="Введите название товара"
            />
          </label>
        </div>
        <div className="productList__type">
          <span>Отображение</span>
          <div>
            <div 
              onClick={e => {
                e.preventDefault();
                setItemType('tile')
              }}
              style={{
                background: itemType === 'tile' ? '#ccc' : null,
                color: itemType === 'tile' ? '#000' : null,
              }}
            >Плитка</div>
            <div 
              onClick={e => {
                e.preventDefault();
                setItemType('list')
              }}
              style={{
                background: itemType === 'list' ? '#ccc' : null,
                color: itemType === 'list' ? '#000' : null,
              }}
            >Список</div>
          </div>
        </div>
        <SortBar sort={sort} sortProducts={sortProducts} />
      </div>
      {
        props.products.data && props.products.data.products ?
        <ProductList data={props.products.data.products} type={itemType}/>
        :
        <h3 
          style={{
            padding: '30px 20px'
          }}
        >Ничего не найдено</h3>
      }
      {
        props.products.data && props.products.data.total_count > 10?
        <Pagination 
          setPage={setPage} 
          prev={props.products.data.previous_page_url} 
          next={props.products.data.next_page_url} 
          page={props.products.data.current_page} 
          totalCount={props.products.data.total_count} 
        />
        :
        null
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(HomeContainer);