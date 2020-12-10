# usdt-subgraph
Subgraph for the Tether (USDT) contract
[Tether (USDT)](https://tether.to) is a cryptocurrency with reference to fiat currencies that is issued by Tether Limited Company.
Using the technology of Blockchain, Tether allows the users to keep, send and receive digital tokens pegged to dollars, euros and yens
## Networks and Performance
This subgraph can be found on The Graph Hosted Service at
https://thegraph.com/explorer/subgraph/alexklos/tether

You can also run this subgraph locally, if you wish. Instructions for that can be found in [The Graph Documentation](https://thegraph.com/docs/quick-start).
## Example Queries
Here we have example queries, so that you don't have to type them in yourself eachtime in the graphql playground.
```GraphQL
{
  transferTethers(where: {count_gt: 5000}) {
    count
    from
    to
    value
  }
}
```

```GraphQL
{
  approvalTethers(where: {spender: "0xf1c525a488a848b58b95d79da48c21ce434290f7"}) {
    id
    owner
    value
  }
}
```
