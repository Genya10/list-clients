const ADD_CASH='ADD_CASH';
const GET_CASH='GET_CASH';

const defaultState={
    cash:0,
  }

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction =(payload)=>({type:ADD_CASH,payload});
export const getAddAction = (payload)=>({type:GET_CASH,payload});