import {Query} from "lib/types/api";
import Transaction from "lib/models/transaction";

export const getCategories = async(query: Query) => {
  const model = new Transaction();
  return await model.query(query);
}
