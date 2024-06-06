import { Query } from "lib/types/api";
import Merchant from "lib/models/merchant";

export const getMerchant = async (id: number) => Merchant.findById(id);

export const getMerchantTransactions = async (query: Query) =>
  Merchant.getMerchantTransactions(query);
