import updateFilters from './filter-panel';
import updateGrid from './phones-grid';
import updateSort from './sort-panel';
import updateCart from './cart';

const reducer = (state, action) => {
  return {
    phones: updateGrid(state, action),
    filters: updateFilters(state, action),
    sortAscending: updateSort(state, action),
    cart: updateCart(state, action)
  }

}

export default reducer;