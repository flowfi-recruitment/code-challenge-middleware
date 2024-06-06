import { Transaction as ITransaction } from "lib/types/transactions";
import { Merchant } from "../types/merchants";
import { CATEGORIES } from "../types/categories";
import { Query } from "../types/api";
import queryTransactions from "lib/statements/transactions/query";
import db from "lib/db";
interface SQLResultRow {
  transaction_id: string;
  memo: string;
  date: string;
  amount: number;
  category_name: CATEGORIES;
}

export default class Transaction implements ITransaction {
  id: string;
  memo: string;
  date: string;
  merchant: Merchant;
  category: CATEGORIES;
  amount: number;

  static async find(query: Query) {
    return db`${queryTransactions(query)}`;
  }

  static async getMerchantTransaction(query: Query) {
    const sql = Transaction.getMerchantTransactionRowSql(query);
    const res: SQLResultRow[] = await db`${sql}`;

    return res.map((row) => ({
      id: row.transaction_id,
      memo: row.memo,
      date: row.date,
      amount: row.amount,
      category: row.category_name,
    })) as Transaction[];
  }

  static getMerchantTransactionRowSql(query: Query) {
    return `SELECT 
        t.id AS transaction_id, 
        t.memo, 
        t.date, 
        t.amount, 
        c.name as category_name
      FROM 
        transactions t
      LEFT JOIN 
        categories c ON t.category_id = c.id
      WHERE
        t.date >= ${query.range.from}
        AND t.date <= ${query.range.to}
        AND t.amount = ${query.amount}
        And t.merchant_id = ${query.merchant.id}
      `;
  }
}
