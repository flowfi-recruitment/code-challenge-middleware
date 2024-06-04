import { Query } from "lib/types/api";
import modelFactory from "./factory";

export const getEntities = async (modelName: string, query: Query) => {
  let model = modelFactory(modelName);
  try {
    return await model.query(query);
  } catch (error) {
    throw new Error(`Unable to fetch ${modelName.toLowerCase()}s` + error);
  }
};
