import { Merchant } from "./merchants";

export interface Api {
  query: Query;
}

export interface Query {
  range: QueryRange;
  merchant: Merchant;
  amount: number;
}

export interface QueryRange {
  from: Date;
  to: Date;
}

export type QueryResolver<TArgs, TResult> = (args: TArgs) => Promise<TResult>;
export type MutationResolver<TArgs, TResult> = (
  args: TArgs
) => Promise<TResult>;
