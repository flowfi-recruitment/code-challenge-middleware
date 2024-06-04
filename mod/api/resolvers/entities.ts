import { Query } from "lib/types/api";
import modelFactory from "./factory";

/**
 * Fetches entities based on the model name and query parameters.
 * @param {string} modelName - The name of the model to query.
 * @param {Query} query - The query parameters for fetching entities.
 * @returns {Promise<any>} - The result of the query execution.
 */
export const getEntities = async (modelName: string, query: Query) => {
  let model = modelFactory(modelName);
  try {
    return await model.query(query);
  } catch (error) {
    throw new Error(`Unable to fetch ${modelName.toLowerCase()}s` + error);
  }
};
