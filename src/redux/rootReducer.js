const initialState = {
  tickers: [],
  addedTickers: [],
  payload: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONNECT':
      return {
        ...state,
        tickers: action.payload,
        payload: true,
      };
    case 'DISCONNECT':
      return {
        ...state,
        payload: action.payload,
      };
    case 'ADD_TICKER':
      const myTickers = state.addedTickers.filter((item) => item.ticker !== action.payload.ticker);
      return {
        ...state,
        addedTickers: [action.payload].concat(myTickers),
      };
    case 'REMOVE_TICKER':
      return {
        ...state,
        addedTickers: state.addedTickers.filter((item) => item.ticker !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
