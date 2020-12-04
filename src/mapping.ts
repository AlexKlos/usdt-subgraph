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
import { IssueTether, RedeemTether, ApprovalTether, TransferTether } from "../generated/schema"

export function handleIssue(event: Issue): void {
  let issue = IssueTether.load(event.params.amount.toHex())

  if (issue == null) {
    issue = new IssueTether(event.params.amount.toHex())
    issue.count = BigInt.fromI32(0)
  }

  issue.count = issue.count + BigInt.fromI32(1)
  issue.amount = event.params.amount
  issue.save()
}

export function handleRedeem(event: Redeem): void {
  let redeem = RedeemTether.load(event.params.amount.toHex())

  if (redeem == null) {
    redeem = new RedeemTether(event.params.amount.toHex())
    redeem.count = BigInt.fromI32(0)
  }

  redeem.count = redeem.count + BigInt.fromI32(1)
  redeem.amount = event.params.amount
  redeem.save()
}

export function handleDeprecate(event: Deprecate): void {}

export function handleParams(event: Params): void {}

export function handleDestroyedBlackFunds(event: DestroyedBlackFunds): void {}

export function handleAddedBlackList(event: AddedBlackList): void {}

export function handleRemovedBlackList(event: RemovedBlackList): void {}

export function handleApproval(event: Approval): void {
  let approval = ApprovalTether.load(event.params.value.toHex())

  if (approval == null) {
    approval = new ApprovalTether(event.params.value.toHex())
    approval.count = BigInt.fromI32(0)
  }

  approval.count = approval.count + BigInt.fromI32(1)
  approval.owner = event.params.owner
  approval.spender = event.params.spender
  approval.value = event.params.value
  approval.save()
}

export function handleTransfer(event: Transfer): void {
  let transfer = TransferTether.load(event.params.value.toHex())

  if (transfer == null) {
    transfer = new TransferTether(event.params.value.toHex())
    transfer.count = BigInt.fromI32(0)
  }

  transfer.count = transfer.count + BigInt.fromI32(1)
  transfer.from = event.params.from
  transfer.to = event.params.to
  transfer.value = event.params.value
  transfer.save()
}

export function handlePause(event: Pause): void {}

export function handleUnpause(event: Unpause): void {}
