import { BigInt } from "@graphprotocol/graph-ts"
import {
  TetherToken,
  Issue,
  Redeem,
  Deprecate,
  Params,
  DestroyedBlackFunds,
  AddedBlackList,
  RemovedBlackList,
  Approval,
  Transfer,
  Pause,
  Unpause
} from "../generated/TetherToken/TetherToken"
import { IssueTether } from "../generated/schema"

export function handleIssue(event: Issue): void {
  let entity = IssueTether.load(event.params.amount.toHex())

  if (entity == null) {
    entity = new IssueTether(event.params.amount.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.amount = event.params.amount
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.name(...)
  // - contract.deprecated(...)
  // - contract.totalSupply(...)
  // - contract.upgradedAddress(...)
  // - contract.balances(...)
  // - contract.decimals(...)
  // - contract.maximumFee(...)
  // - contract._totalSupply(...)
  // - contract.getBlackListStatus(...)
  // - contract.allowed(...)
  // - contract.paused(...)
  // - contract.balanceOf(...)
  // - contract.getOwner(...)
  // - contract.owner(...)
  // - contract.symbol(...)
  // - contract.allowance(...)
  // - contract.basisPointsRate(...)
  // - contract.isBlackListed(...)
  // - contract.MAX_UINT(...)
}

import { RedeemTether } from "../generated/schema"

export function handleRedeem(event: Redeem): void {
  let entity = RedeemTether.load(event.params.amount.toHex())

  if (entity == null) {
    entity = new RedeemTether(event.params.amount.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.amount = event.params.amount
  entity.save()

}

export function handleDeprecate(event: Deprecate): void {}

export function handleParams(event: Params): void {}

export function handleDestroyedBlackFunds(event: DestroyedBlackFunds): void {}

export function handleAddedBlackList(event: AddedBlackList): void {}

export function handleRemovedBlackList(event: RemovedBlackList): void {}

export function handleApproval(event: Approval): void {}

export function handleTransfer(event: Transfer): void {}

export function handlePause(event: Pause): void {}

export function handleUnpause(event: Unpause): void {}
