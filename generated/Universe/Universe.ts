// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BosonTokenSet extends ethereum.Event {
  get params(): BosonTokenSet__Params {
    return new BosonTokenSet__Params(this);
  }
}

export class BosonTokenSet__Params {
  _event: BosonTokenSet;

  constructor(event: BosonTokenSet) {
    this._event = event;
  }

  get bosonToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ChargedParticlesSet extends ethereum.Event {
  get params(): ChargedParticlesSet__Params {
    return new ChargedParticlesSet__Params(this);
  }
}

export class ChargedParticlesSet__Params {
  _event: ChargedParticlesSet;

  constructor(event: ChargedParticlesSet) {
    this._event = event;
  }

  get chargedParticles(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ElectrostaticAttraction extends ethereum.Event {
  get params(): ElectrostaticAttraction__Params {
    return new ElectrostaticAttraction__Params(this);
  }
}

export class ElectrostaticAttraction__Params {
  _event: ElectrostaticAttraction;

  constructor(event: ElectrostaticAttraction) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get photonSource(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get energy(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get multiplier(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ElectrostaticDischarge extends ethereum.Event {
  get params(): ElectrostaticDischarge__Params {
    return new ElectrostaticDischarge__Params(this);
  }
}

export class ElectrostaticDischarge__Params {
  _event: ElectrostaticDischarge;

  constructor(event: ElectrostaticDischarge) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get photonSource(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get energy(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EsaMultiplierSet extends ethereum.Event {
  get params(): EsaMultiplierSet__Params {
    return new EsaMultiplierSet__Params(this);
  }
}

export class EsaMultiplierSet__Params {
  _event: EsaMultiplierSet;

  constructor(event: EsaMultiplierSet) {
    this._event = event;
  }

  get assetToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get multiplier(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LeptonTokenSet extends ethereum.Event {
  get params(): LeptonTokenSet__Params {
    return new LeptonTokenSet__Params(this);
  }
}

export class LeptonTokenSet__Params {
  _event: LeptonTokenSet;

  constructor(event: LeptonTokenSet) {
    this._event = event;
  }

  get leptonToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PhotonSet extends ethereum.Event {
  get params(): PhotonSet__Params {
    return new PhotonSet__Params(this);
  }
}

export class PhotonSet__Params {
  _event: PhotonSet;

  constructor(event: PhotonSet) {
    this._event = event;
  }

  get photonToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get maxSupply(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ProtonTokenSet extends ethereum.Event {
  get params(): ProtonTokenSet__Params {
    return new ProtonTokenSet__Params(this);
  }
}

export class ProtonTokenSet__Params {
  _event: ProtonTokenSet;

  constructor(event: ProtonTokenSet) {
    this._event = event;
  }

  get protonToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class QuarkTokenSet extends ethereum.Event {
  get params(): QuarkTokenSet__Params {
    return new QuarkTokenSet__Params(this);
  }
}

export class QuarkTokenSet__Params {
  _event: QuarkTokenSet;

  constructor(event: QuarkTokenSet) {
    this._event = event;
  }

  get quarkToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class WithdrawStuckERC20 extends ethereum.Event {
  get params(): WithdrawStuckERC20__Params {
    return new WithdrawStuckERC20__Params(this);
  }
}

export class WithdrawStuckERC20__Params {
  _event: WithdrawStuckERC20;

  constructor(event: WithdrawStuckERC20) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawStuckERC721 extends ethereum.Event {
  get params(): WithdrawStuckERC721__Params {
    return new WithdrawStuckERC721__Params(this);
  }
}

export class WithdrawStuckERC721__Params {
  _event: WithdrawStuckERC721;

  constructor(event: WithdrawStuckERC721) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawStuckEther extends ethereum.Event {
  get params(): WithdrawStuckEther__Params {
    return new WithdrawStuckEther__Params(this);
  }
}

export class WithdrawStuckEther__Params {
  _event: WithdrawStuckEther;

  constructor(event: WithdrawStuckEther) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Universe extends ethereum.SmartContract {
  static bind(address: Address): Universe {
    return new Universe("Universe", address);
  }

  boson(): Address {
    let result = super.call("boson", "boson():(address)", []);

    return result[0].toAddress();
  }

  try_boson(): ethereum.CallResult<Address> {
    let result = super.tryCall("boson", "boson():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  chargedParticles(): Address {
    let result = super.call(
      "chargedParticles",
      "chargedParticles():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_chargedParticles(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "chargedParticles",
      "chargedParticles():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  conductElectrostaticDischarge(account: Address, amount: BigInt): BigInt {
    let result = super.call(
      "conductElectrostaticDischarge",
      "conductElectrostaticDischarge(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBigInt();
  }

  try_conductElectrostaticDischarge(
    account: Address,
    amount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "conductElectrostaticDischarge",
      "conductElectrostaticDischarge(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStaticCharge(account: Address): BigInt {
    let result = super.call(
      "getStaticCharge",
      "getStaticCharge(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getStaticCharge(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getStaticCharge",
      "getStaticCharge(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lepton(): Address {
    let result = super.call("lepton", "lepton():(address)", []);

    return result[0].toAddress();
  }

  try_lepton(): ethereum.CallResult<Address> {
    let result = super.tryCall("lepton", "lepton():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  photonSource(): Address {
    let result = super.call("photonSource", "photonSource():(address)", []);

    return result[0].toAddress();
  }

  try_photonSource(): ethereum.CallResult<Address> {
    let result = super.tryCall("photonSource", "photonSource():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proton(): Address {
    let result = super.call("proton", "proton():(address)", []);

    return result[0].toAddress();
  }

  try_proton(): ethereum.CallResult<Address> {
    let result = super.tryCall("proton", "proton():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  quark(): Address {
    let result = super.call("quark", "quark():(address)", []);

    return result[0].toAddress();
  }

  try_quark(): ethereum.CallResult<Address> {
    let result = super.tryCall("quark", "quark():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConductElectrostaticDischargeCall extends ethereum.Call {
  get inputs(): ConductElectrostaticDischargeCall__Inputs {
    return new ConductElectrostaticDischargeCall__Inputs(this);
  }

  get outputs(): ConductElectrostaticDischargeCall__Outputs {
    return new ConductElectrostaticDischargeCall__Outputs(this);
  }
}

export class ConductElectrostaticDischargeCall__Inputs {
  _call: ConductElectrostaticDischargeCall;

  constructor(call: ConductElectrostaticDischargeCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConductElectrostaticDischargeCall__Outputs {
  _call: ConductElectrostaticDischargeCall;

  constructor(call: ConductElectrostaticDischargeCall) {
    this._call = call;
  }

  get positiveEnergy(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class OnCovalentBondCall extends ethereum.Call {
  get inputs(): OnCovalentBondCall__Inputs {
    return new OnCovalentBondCall__Inputs(this);
  }

  get outputs(): OnCovalentBondCall__Outputs {
    return new OnCovalentBondCall__Outputs(this);
  }
}

export class OnCovalentBondCall__Inputs {
  _call: OnCovalentBondCall;

  constructor(call: OnCovalentBondCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): string {
    return this._call.inputValues[2].value.toString();
  }

  get nftTokenAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get nftTokenId(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class OnCovalentBondCall__Outputs {
  _call: OnCovalentBondCall;

  constructor(call: OnCovalentBondCall) {
    this._call = call;
  }
}

export class OnCovalentBreakCall extends ethereum.Call {
  get inputs(): OnCovalentBreakCall__Inputs {
    return new OnCovalentBreakCall__Inputs(this);
  }

  get outputs(): OnCovalentBreakCall__Outputs {
    return new OnCovalentBreakCall__Outputs(this);
  }
}

export class OnCovalentBreakCall__Inputs {
  _call: OnCovalentBreakCall;

  constructor(call: OnCovalentBreakCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): string {
    return this._call.inputValues[2].value.toString();
  }

  get nftTokenAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get value4(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class OnCovalentBreakCall__Outputs {
  _call: OnCovalentBreakCall;

  constructor(call: OnCovalentBreakCall) {
    this._call = call;
  }
}

export class OnDischargeCall extends ethereum.Call {
  get inputs(): OnDischargeCall__Inputs {
    return new OnDischargeCall__Inputs(this);
  }

  get outputs(): OnDischargeCall__Outputs {
    return new OnDischargeCall__Outputs(this);
  }
}

export class OnDischargeCall__Inputs {
  _call: OnDischargeCall;

  constructor(call: OnDischargeCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): string {
    return this._call.inputValues[2].value.toString();
  }

  get assetToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get creatorEnergy(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get receiverEnergy(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class OnDischargeCall__Outputs {
  _call: OnDischargeCall;

  constructor(call: OnDischargeCall) {
    this._call = call;
  }
}

export class OnDischargeForCreatorCall extends ethereum.Call {
  get inputs(): OnDischargeForCreatorCall__Inputs {
    return new OnDischargeForCreatorCall__Inputs(this);
  }

  get outputs(): OnDischargeForCreatorCall__Outputs {
    return new OnDischargeForCreatorCall__Outputs(this);
  }
}

export class OnDischargeForCreatorCall__Inputs {
  _call: OnDischargeForCreatorCall;

  constructor(call: OnDischargeForCreatorCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): string {
    return this._call.inputValues[2].value.toString();
  }

  get value3(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get assetToken(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get receiverEnergy(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class OnDischargeForCreatorCall__Outputs {
  _call: OnDischargeForCreatorCall;

  constructor(call: OnDischargeForCreatorCall) {
    this._call = call;
  }
}

export class OnEnergizeCall extends ethereum.Call {
  get inputs(): OnEnergizeCall__Inputs {
    return new OnEnergizeCall__Inputs(this);
  }

  get outputs(): OnEnergizeCall__Outputs {
    return new OnEnergizeCall__Outputs(this);
  }
}

export class OnEnergizeCall__Inputs {
  _call: OnEnergizeCall;

  constructor(call: OnEnergizeCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get referrer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): string {
    return this._call.inputValues[4].value.toString();
  }

  get value5(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get value6(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class OnEnergizeCall__Outputs {
  _call: OnEnergizeCall;

  constructor(call: OnEnergizeCall) {
    this._call = call;
  }
}

export class OnProtonSaleCall extends ethereum.Call {
  get inputs(): OnProtonSaleCall__Inputs {
    return new OnProtonSaleCall__Inputs(this);
  }

  get outputs(): OnProtonSaleCall__Outputs {
    return new OnProtonSaleCall__Outputs(this);
  }
}

export class OnProtonSaleCall__Inputs {
  _call: OnProtonSaleCall;

  constructor(call: OnProtonSaleCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get oldOwner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get newOwner(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get salePrice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get creator(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get creatorRoyalties(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class OnProtonSaleCall__Outputs {
  _call: OnProtonSaleCall;

  constructor(call: OnProtonSaleCall) {
    this._call = call;
  }
}

export class OnReleaseCall extends ethereum.Call {
  get inputs(): OnReleaseCall__Inputs {
    return new OnReleaseCall__Inputs(this);
  }

  get outputs(): OnReleaseCall__Outputs {
    return new OnReleaseCall__Outputs(this);
  }
}

export class OnReleaseCall__Inputs {
  _call: OnReleaseCall;

  constructor(call: OnReleaseCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): string {
    return this._call.inputValues[2].value.toString();
  }

  get assetToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get principalAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get creatorEnergy(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get receiverEnergy(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class OnReleaseCall__Outputs {
  _call: OnReleaseCall;

  constructor(call: OnReleaseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBosonTokenCall extends ethereum.Call {
  get inputs(): SetBosonTokenCall__Inputs {
    return new SetBosonTokenCall__Inputs(this);
  }

  get outputs(): SetBosonTokenCall__Outputs {
    return new SetBosonTokenCall__Outputs(this);
  }
}

export class SetBosonTokenCall__Inputs {
  _call: SetBosonTokenCall;

  constructor(call: SetBosonTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBosonTokenCall__Outputs {
  _call: SetBosonTokenCall;

  constructor(call: SetBosonTokenCall) {
    this._call = call;
  }
}

export class SetChargedParticlesCall extends ethereum.Call {
  get inputs(): SetChargedParticlesCall__Inputs {
    return new SetChargedParticlesCall__Inputs(this);
  }

  get outputs(): SetChargedParticlesCall__Outputs {
    return new SetChargedParticlesCall__Outputs(this);
  }
}

export class SetChargedParticlesCall__Inputs {
  _call: SetChargedParticlesCall;

  constructor(call: SetChargedParticlesCall) {
    this._call = call;
  }

  get controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetChargedParticlesCall__Outputs {
  _call: SetChargedParticlesCall;

  constructor(call: SetChargedParticlesCall) {
    this._call = call;
  }
}

export class SetEsaMultiplierCall extends ethereum.Call {
  get inputs(): SetEsaMultiplierCall__Inputs {
    return new SetEsaMultiplierCall__Inputs(this);
  }

  get outputs(): SetEsaMultiplierCall__Outputs {
    return new SetEsaMultiplierCall__Outputs(this);
  }
}

export class SetEsaMultiplierCall__Inputs {
  _call: SetEsaMultiplierCall;

  constructor(call: SetEsaMultiplierCall) {
    this._call = call;
  }

  get assetToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get multiplier(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetEsaMultiplierCall__Outputs {
  _call: SetEsaMultiplierCall;

  constructor(call: SetEsaMultiplierCall) {
    this._call = call;
  }
}

export class SetLeptonTokenCall extends ethereum.Call {
  get inputs(): SetLeptonTokenCall__Inputs {
    return new SetLeptonTokenCall__Inputs(this);
  }

  get outputs(): SetLeptonTokenCall__Outputs {
    return new SetLeptonTokenCall__Outputs(this);
  }
}

export class SetLeptonTokenCall__Inputs {
  _call: SetLeptonTokenCall;

  constructor(call: SetLeptonTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLeptonTokenCall__Outputs {
  _call: SetLeptonTokenCall;

  constructor(call: SetLeptonTokenCall) {
    this._call = call;
  }
}

export class SetPhotonCall extends ethereum.Call {
  get inputs(): SetPhotonCall__Inputs {
    return new SetPhotonCall__Inputs(this);
  }

  get outputs(): SetPhotonCall__Outputs {
    return new SetPhotonCall__Outputs(this);
  }
}

export class SetPhotonCall__Inputs {
  _call: SetPhotonCall;

  constructor(call: SetPhotonCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get maxSupply(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPhotonCall__Outputs {
  _call: SetPhotonCall;

  constructor(call: SetPhotonCall) {
    this._call = call;
  }
}

export class SetProtonTokenCall extends ethereum.Call {
  get inputs(): SetProtonTokenCall__Inputs {
    return new SetProtonTokenCall__Inputs(this);
  }

  get outputs(): SetProtonTokenCall__Outputs {
    return new SetProtonTokenCall__Outputs(this);
  }
}

export class SetProtonTokenCall__Inputs {
  _call: SetProtonTokenCall;

  constructor(call: SetProtonTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetProtonTokenCall__Outputs {
  _call: SetProtonTokenCall;

  constructor(call: SetProtonTokenCall) {
    this._call = call;
  }
}

export class SetQuarkTokenCall extends ethereum.Call {
  get inputs(): SetQuarkTokenCall__Inputs {
    return new SetQuarkTokenCall__Inputs(this);
  }

  get outputs(): SetQuarkTokenCall__Outputs {
    return new SetQuarkTokenCall__Outputs(this);
  }
}

export class SetQuarkTokenCall__Inputs {
  _call: SetQuarkTokenCall;

  constructor(call: SetQuarkTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetQuarkTokenCall__Outputs {
  _call: SetQuarkTokenCall;

  constructor(call: SetQuarkTokenCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawERC721Call extends ethereum.Call {
  get inputs(): WithdrawERC721Call__Inputs {
    return new WithdrawERC721Call__Inputs(this);
  }

  get outputs(): WithdrawERC721Call__Outputs {
    return new WithdrawERC721Call__Outputs(this);
  }
}

export class WithdrawERC721Call__Inputs {
  _call: WithdrawERC721Call;

  constructor(call: WithdrawERC721Call) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawERC721Call__Outputs {
  _call: WithdrawERC721Call;

  constructor(call: WithdrawERC721Call) {
    this._call = call;
  }
}

export class WithdrawErc20Call extends ethereum.Call {
  get inputs(): WithdrawErc20Call__Inputs {
    return new WithdrawErc20Call__Inputs(this);
  }

  get outputs(): WithdrawErc20Call__Outputs {
    return new WithdrawErc20Call__Outputs(this);
  }
}

export class WithdrawErc20Call__Inputs {
  _call: WithdrawErc20Call;

  constructor(call: WithdrawErc20Call) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawErc20Call__Outputs {
  _call: WithdrawErc20Call;

  constructor(call: WithdrawErc20Call) {
    this._call = call;
  }
}

export class WithdrawEtherCall extends ethereum.Call {
  get inputs(): WithdrawEtherCall__Inputs {
    return new WithdrawEtherCall__Inputs(this);
  }

  get outputs(): WithdrawEtherCall__Outputs {
    return new WithdrawEtherCall__Outputs(this);
  }
}

export class WithdrawEtherCall__Inputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawEtherCall__Outputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }
}
