const ADD_TRANSACTION = "ADD_TRANSACTION";
const DELETE_TRANSACTION = "DELETE_TRANSACTION";
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions_8750812")) || []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        transactions: [...state.transactions, action.payload]
      };

    case DELETE_TRANSACTION:
      const newTransactions = [...state.transactions];
      newTransactions.splice(action.index, 1);
      return {
        transactions: newTransactions
      };

    default:
      return state;
  }
};

export { reducer as default };
