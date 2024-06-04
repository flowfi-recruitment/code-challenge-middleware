import { Query } from "lib/types/api";

export default (query: Query) =>
  `select * from merchants where name = ${query.merchant.name}`;
