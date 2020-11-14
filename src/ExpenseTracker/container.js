import { connect } from "react-redux";
import ExpenseTracker from "./ExpenseTracker";

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (payload) => {
      dispatch({
        type: "ADD_TRANSACTION",
        payload
      });
    },
    deleteTransaction: (index) => {
      dispatch({
        type: "DELETE_TRANSACTION",
        index
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker);
