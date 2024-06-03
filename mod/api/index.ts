import {getMerchants} from "./resolvers/merchants";
import {getTransactions} from "./resolvers/transactions";
import {getCategories} from "./resolvers/categories";
import {AppSyncResolverEvent} from "aws-lambda";

export const api = async (event: AppSyncResolverEvent<any>) => {
  if(event.info.fieldName === 'getTransactions') {
    return await getTransactions(event.arguments);
  } else if (event.info.fieldName === 'getMerchants') {
    return await getMerchants(event.arguments);
  } else if (event.info.fieldName === 'getCategories') {
    return getCategories(event.arguments)
  }
}
