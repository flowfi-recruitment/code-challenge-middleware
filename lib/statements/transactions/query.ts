import {Query} from "lib/types/api";

export default (query: Query) => `
  select * from transactions
    where date >= ${query.range.from} and date <= ${query.range.to}
    and amount = ${query.amount}
`
