

export function reducer(state, action) {

  switch(action.type) {
    
    case 'TOGGLE_PRODUCT_CODE':
      console.log(action);
      console.log(state);
      return {
        ...state,
        showProductCode: action.payload
      }

    default:
      return state;

  }

}
