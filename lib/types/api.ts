import {Merchant} from "./merchants";

export interface Api {
  query: Query
}

export interface Query {
  range: QueryRange
  merchant: Merchant
  amount: number;
}

export interface QueryRange {
  from: string;
  to: string;
}
