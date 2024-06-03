import {Transaction as ITransaction} from "lib/types/transactions";
import {Merchant} from "../types/merchants";
import {Category} from "../types/categories";
import {Query} from "../types/api";
import postgres from "postgres";
import queryTransactions from "lib/statements/transactions/query";

export default class Transaction implements ITransaction {
  id: string;
  memo: string;
  date: string;
  merchant: Merchant;
  category: Category;
  amount: number;

  async query(query:Query): Promise<ITransaction[]> {
    const db = postgres(process.env.connection);
    return db.unsafe<ITransaction[]>(queryTransactions(query));
  }
}
