import Transaction from "lib/models/transaction";
import {Merchant as IMerchant} from "../types/merchants";
import {Query} from "../types/api";
import postgres from "postgres";

interface MerchantTransactions extends IMerchant {
  total: number;
  transactions: Transaction[]
}

export default class Merchant implements IMerchant {
  id: string;
  name: string;
  logo: string;

  async query(query:Query): Promise<IMerchant[]> {
    const db = postgres(process.env.connection);
    return db`select * from merchants where name = ${query.merchant.name}`;
  }

  async getMerchantTransactions(query: Query): Promise<MerchantTransactions> {
    const merchant = (await this.query(query))[0];
    const transactions = new Transaction();
    const data = await transactions.query(query);
    let total = 0;

    for(const transaction in data) {
      total += transaction.amount;
    }

    return {...merchant, total, transactions: data};
  }

  async create(name:string): Promise<Merchant> {
    const db = postgres(process.env.connection);

  }
}
