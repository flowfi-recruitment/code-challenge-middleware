import {Query} from "lib/types/api";
import Merchant from "lib/models/merchant";

export const getMerchants = async(query: Query) => {
  const model = new Merchant();
  return await model.query(query);
}
