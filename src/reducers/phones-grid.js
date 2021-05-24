const updateGrid = (state, action) => {

  if(state === undefined) {
    return [];
  }

  switch(action.type) {
    case 'LOAD_PHONES': {
      const p = action.payload.map((phone) => {
        const newPhone = phone;
        newPhone.choosenColor = 0;
        newPhone.choosenRom = 0;
        return newPhone;
      });
      return p;
    }
    case 'CHANGE_COLOR': {
      const {phones} = state;
      const phoneIdx = phones.findIndex((phone) => phone.id === action.payload.phoneId);
      const phone = phones[phoneIdx];
      const newPhone = {...phone, choosenColor: action.payload.colorIndex};
      return [...phones.slice(0, phoneIdx), newPhone, ...phones.slice(phoneIdx + 1)];
    }
    case 'CHANGE_ROM': {
      const {phones} = state;
      const phoneIdx = phones.findIndex((phone) => phone.id === action.payload.phoneId);
      const phone = phones[phoneIdx];
      const newPhone = {...phone, choosenRom: action.payload.romIndex};
      return [...phones.slice(0, phoneIdx), newPhone, ...phones.slice(phoneIdx + 1)];
    }
    default: return state.phones;
  }
}

export default updateGrid;