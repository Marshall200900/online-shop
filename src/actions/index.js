const changeRom = (romIndex, phoneId) => {
    return {
        type: 'CHANGE_ROM',
        payload: {
          romIndex,
          phoneId
        }
    }
}
const changeColor = (colorIndex, phoneId) => {
  return {
    type: 'CHANGE_COLOR',
    payload: {
      colorIndex,
      phoneId
    }
  }
}
const changeSorting = (ascending) => {
  return {
    type: 'CHANGE_SORTING',
    payload: ascending
  }
}
const loadPhones = (phones) => {
  return {
    type: 'LOAD_PHONES',
    payload: phones,
  }
}
const setMinPrice = (minValue) => {
  return {
    type: 'SET_MIN_PRICE',
    payload: minValue,
  }
}
const setMaxPrice = (maxValue) => {
  return {
    type: 'SET_MAX_PRICE',
    payload: maxValue,
  }
}
const setDefaultFilters = () => {
  return {
    type: 'SET_DEFAULT_FILTERS',
  }
}
const addItemToCart = (item) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: item
  }
}
const deleteItemFromCart = (item) => {
  return {
    type: 'DELETE_ITEM_FROM_CART',
    payload: item
  }
}

export {
  addItemToCart,
  deleteItemFromCart,
  loadPhones,
  changeColor,
  changeSorting,
  changeRom,
  setMaxPrice,
  setMinPrice,
  setDefaultFilters,
}