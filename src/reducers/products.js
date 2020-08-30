export default function projects_reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {...state, data:action.payload }
    default:
      return state;
  }
}
