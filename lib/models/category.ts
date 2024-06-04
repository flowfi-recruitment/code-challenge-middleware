import { Category as ICategory } from "lib/types/categories";
import { Query } from "../types/api";
import postgres from "postgres";
import queryStatement from "lib/statements/categories/query";

export default class Category implements ICategory {
  id: string;
  name: string;
  async query(query: Query): Promise<ICategory[]> {
    const db = postgres(process.env.connection);
    return db.unsafe<ICategory[]>(queryStatement());
  }
}
