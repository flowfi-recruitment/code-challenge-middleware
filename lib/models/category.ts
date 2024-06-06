import db from "lib/db";
import { CATEGORIES, Category as ICategory } from "lib/types/categories";

export default class Category implements ICategory {
  id: string;
  category: CATEGORIES;

  constructor() {}

  static async findById(id: number): Promise<ICategory | null> {
    const result = await db<
      ICategory[]
    >`select * from categories where id = ${id}`;
    if (result.length === 0) {
      return null;
    }
    const row = result[0];
    return row;
  }

  static async find(): Promise<ICategory[] | null> {
    const result = await db<ICategory[]>`select * from categories`;
    if (result.length === 0) {
      return null;
    }
    return result;
  }
}
