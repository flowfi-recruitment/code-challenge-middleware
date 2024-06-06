import { Merchant as IMerchant } from "../types/merchants";
import { Query } from "../types/api";
import { Transaction as ITransaction } from "lib/types/transactions";
import Transaction from "./transaction";
import db from "lib/db";

interface MerchantTransactions extends IMerchant {
  total: number;
  transactions: ITransaction[];
}

export default class Merchant implements IMerchant {
  name: string;
  id: string;
  logo: string;
  constructor() {}
  static async findById(id: number): Promise<IMerchant | null> {
    const result = await db<
      IMerchant[]
    >`select * from merchants where id = ${id}`;
    if (!result || result.length === 0) {
      return null;
    }
    const row = result[0];
    return row;
  }

  static async getMerchantTransactions(
    query: Query
  ): Promise<MerchantTransactions> {
    const merchant = await Merchant.findById(+query.merchant.id);
    if (!merchant) throw new Error("there is no merchant with this id");
    const data = await Transaction.getMerchantTransaction(query);
    const total = data.reduce((prev, curr) => curr.amount + prev, 0);
    return {
      ...merchant,
      total,
      transactions: data,
    };
  }

  static async create(merchant: IMerchant): Promise<IMerchant> {
    await db`INSERT INTO merchant (id, name, logo)
    VALUES ('${merchant.name}', '${merchant.logo}', '${merchant.id}');
    `;

    return merchant;
  }
}
