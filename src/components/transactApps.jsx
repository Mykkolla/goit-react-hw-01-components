import TransactionHistory from './Transaction'
import transactionhis from "../transactions.json";




export const Transaction = () => {
    return ( 
  <div>
  <TransactionHistory items = {transactionhis} />
  </div>
    );
  };


  