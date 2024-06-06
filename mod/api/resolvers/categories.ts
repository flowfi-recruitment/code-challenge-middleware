import Category from "lib/models/category";

export const getCategory = async (id: number) => {
  return Category.findById(id);
};
