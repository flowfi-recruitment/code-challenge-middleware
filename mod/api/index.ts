import { getMerchant } from "./resolvers/merchants";
import { getTransactions } from "./resolvers/transactions";
import { getCategory } from "./resolvers/categories";
import { AppSyncResolverEvent } from "aws-lambda";
import { createMerchant } from "./mutations/merchants";
import dotenv from "dotenv";
import { MutationResolver, QueryResolver } from "lib/types/api";
dotenv.config();

const queryResolvers: Record<string, QueryResolver<any, any>> = {
  getTransactions,
  getMerchant,
  getCategory,
};

const mutationResolvers: Record<string, MutationResolver<any, any>> = {
  createMerchant,
};

export const api = async (event: AppSyncResolverEvent<any>) => {
  const resolver =
    event.info.parentTypeName === "Query"
      ? queryResolvers[event.info.fieldName]
      : event.info.parentTypeName === "Mutation"
      ? mutationResolvers[event.info.fieldName]
      : null;

  if (resolver) {
    return await resolver(event.arguments);
  } else {
    throw new Error(`Resolver not found for field: ${event.info.fieldName}`);
  }
};
