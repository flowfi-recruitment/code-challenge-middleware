import { AppSyncResolverEvent } from "aws-lambda";
import { getEntities } from "./resolvers/entities";
export const api = async (event: AppSyncResolverEvent<any>) => {
  const { fieldName, arguments: args } = event.info;
  return await getEntities(fieldName, args);
};
