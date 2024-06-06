import { Query } from "lib/types/api";
import Transaction from "lib/models/transaction";

export const getTransactions = async (query: Query) => {
  return Transaction.find(query);
};
