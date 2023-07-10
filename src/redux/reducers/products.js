export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export const productsDetailReducer = (state = { products: {} }, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
