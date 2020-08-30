import axios from 'axios';
import { URL } from '../variables';

export function getProducts(
  sort_field = 'name',
  sort_direction = 'asc',
  page = 1,
  search = ''
){
  const request = axios.get(`${URL}?${search.length > 0 ? 'search=' + search : ''}&sort_field=${sort_field}&sort_direction=${sort_direction}&page=${page}`)
  .then((res,err) => {
    if (res.status === 200) {
      return res.data;
    }
  })

  return {
    type: 'GET_PRODUCTS',
    payload: request
  }
}