import PropTypes from 'prop-types';
import { Transactiontable } from "../Transactions/Transaction.styled";
import { Transactionth } from "../Transactions/Transaction.styled";
import { Transactiontd } from "../Transactions/Transaction.styled";
import { Transactiontr } from "../Transactions/Transaction.styled";
const TransactionHistory = ({ items }) => {
    return (
        <Transactiontable>
      <thead>
        <tr>
          <Transactionth>Type</Transactionth>
          <Transactionth>Amount</Transactionth>
          <Transactionth>Currency</Transactionth>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transactiontr key={id}>
            <Transactiontd>{type}</Transactiontd>
            <Transactiontd>{amount}</Transactiontd>
            <Transactiontd>{currency}</Transactiontd>
          </Transactiontr>
        ))}
      </tbody>
    </Transactiontable>
    );
  };

  export default TransactionHistory;



  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};