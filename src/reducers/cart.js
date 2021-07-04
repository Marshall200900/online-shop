const updateCart = (state, action) => {
  if(state === undefined) {
    return {
      curId: 0,
      addedItems: [

      ]
    }
  }

  switch(action.type) {
    case 'ADD_ITEM_TO_CART': {
      const data = {...action.payload, cartItemId: state.cart.curId, quantity: 1};
      const newAddedItems = [...state.cart.addedItems, data];
      return {
        ...state.cart,
        curId: state.cart.curId + 1,
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
    case 'CHANGE_QUANTITY': {
      const { quantity, item } = action.payload;
      const { addedItems } = state.cart;
      console.log(item)
      const itemIdx = addedItems.findIndex((i) => i.cartItemId === item.cartItemId);
      const phone = addedItems[itemIdx];
      const newItem = {...phone, quantity: phone.quantity + quantity < 0 ? phone.quantity: phone.quantity + quantity};
      return {
        ...state.cart,
        addedItems: [...addedItems.slice(0, itemIdx), newItem, ...addedItems.slice(itemIdx + 1)]
      }
    }
    default: return state.cart; 
  }
}

export default updateCart;