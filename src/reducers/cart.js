const updateCart = (state, action) => {
  if(state === undefined) {
    return {
      addedItems: [

      ]
    }
  }

  switch(action.type) {
    case 'ADD_ITEM_TO_CART': {
      const data = action.payload;
      const newAddedItems = [...state.cart.addedItems, data];
      return {
        ...state.cart,
        addedItems: newAddedItems
      }
    }
    case 'DELETE_ITEM_FROM_CART': {
      const data = action.payload;
      const { addedItems } = state.cart;
      const idx = addedItems.findIndex(el => el.id === data.id);
      const newAddedItems = [...addedItems.slice(0, idx), ...addedItems.slice(idx + 1)];
      return {
        ...state.cart,
        addedItems: newAddedItems
      }

    }
    case 'DELETE_ALL_ITEMS': {

    }
    default: return state.cart; 
  }
}

export default updateCart;