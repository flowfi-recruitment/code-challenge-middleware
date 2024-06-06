import Merchant from "lib/models/merchant";
import { Merchant as IMerchant } from "lib/types/merchants";

export const createMerchant = (merchant: IMerchant) => {
  return Merchant.create(merchant);
};
