import { Address } from "@graphprotocol/graph-ts";
import { ProtonCount } from "../../generated/schema";

import { ADDRESS_ZERO, ZERO, ONE } from './common';



function _getCountsObject(id : string): ProtonCount {
    let counts = ProtonCount.load(id);
    if(!counts){
        counts = new ProtonCount(id);
        counts.totalProtons = ZERO;
    }

    return counts as ProtonCount;
}


function _trackProtonCount(
    address: Address,
    from: string,
    to: string
): void {
    let counts: ProtonCount;


    // Burn
  if (to == ADDRESS_ZERO) {
    counts = _getCountsObject(from);
    counts.totalProtons = counts.totalProtons.minus(ONE);
    counts.save();
  }

    // Mint
  else if (from == ADDRESS_ZERO) {
    counts = _getCountsObject(to);
    counts.totalProtons = counts.totalProtons.plus(ONE);
    counts.save();
    
  }

  
}