import { Merchant } from "./merchants";
import { CATEGORIES } from "./categories";

export interface Transaction {
  id: string;
  memo: string;
  date: string;
  amount: number;
  merchant: Merchant;
  category: CATEGORIES;
}
