"use strict";
exports.__esModule = true;
var schema_1 = require("../../generated/schema");
var common_1 = require("./common");
function _getCountsObject(id) {
    var counts = schema_1.ProtonCount.load(id);
    if (!counts) {
        counts = new schema_1.ProtonCount(id);
        counts.totalProtons = common_1.ZERO;
    }
    return counts;
}
function _trackProtonCount(address, from, to) {
    var counts;
    // Burn
    if (to == common_1.ADDRESS_ZERO) {
        counts = _getCountsObject(from);
        counts.totalProtons = counts.totalProtons.minus(common_1.ONE);
        counts.save();
    }
    // Mint
    else if (from == common_1.ADDRESS_ZERO) {
        counts = _getCountsObject(to);
        counts.totalProtons = counts.totalProtons.plus(common_1.ONE);
        counts.save();
    }
}
