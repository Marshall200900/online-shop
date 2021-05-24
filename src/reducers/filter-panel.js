const initialFilters = {
  minPrice: 0,
  maxPrice: 150000,
  name: ''
}

const updateFilters = (state, action) => {

  if(state === undefined) {
    return initialFilters;
  }

  switch(action.type) {
    case 'SET_MAX_PRICE': {
      const newMaxPrice = action.payload;
      const newPhones = state.phones.map((ph) => {
        ph.visible = (ph['rom-price'][0].price >= state.filters.minPrice) && (ph['rom-price'][0].price <= newMaxPrice);
        return ph
      });
      return {...state.filters, maxPrice: newMaxPrice}
    }
    case 'SET_MIN_PRICE': {
      const newMinPrice = action.payload;
      
      return {...state.filters, minPrice: newMinPrice}
    }
    case 'SET_DEFAULT_FILTERS': {

      return initialFilters
    }
    default: return state.filters;
  }
}

export default updateFilters;