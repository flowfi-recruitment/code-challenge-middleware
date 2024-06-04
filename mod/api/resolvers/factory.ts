import Transaction from "lib/models/transaction";
import Merchant from "lib/models/merchant";
import Category from "lib/models/category";
export default (fieldName: string) => {
  let model;
  switch (fieldName) {
    case "getTransactions":
      model = new Transaction();
      break;
    case "getMerchants":
      model = new Merchant();
      break;
    case "getCategories":
      model = new Category();
      break;
    default:
      throw new Error(`Resolver for ${fieldName} not found`);
  }
  return model;
};
