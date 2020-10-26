Setup
npm install -g @graphprotocol/graph-cli
npm run codegen
Adding an entity
subgraph.yaml
schema.graphql
src/mapping.ts
Example Subgraph
An example to help you get started with The Graph. For more information see the docs on https://thegraph.com/docs/.

Active user count

mintCount: Int! burnCount: Int!

nonZeroBalanceCount: Int!
