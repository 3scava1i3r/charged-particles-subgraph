"use strict";
exports.__esModule = true;
exports.trackProtonNftCountsB = exports.trackProtonNftCounts = void 0;
var schema_1 = require("../../generated/schema");
var common_1 = require("./common");
var loadOrCreatePlatformMetric_1 = require("./loadOrCreatePlatformMetric");
function _getCountsObj(id) {
    var counts = schema_1.ProtonNftCount.load(id);
    if (!counts) {
        counts = new schema_1.ProtonNftCount(id);
        counts.createdCount = common_1.ZERO;
        counts.ownedCount = common_1.ZERO;
    }
    return counts;
}
;
function trackProtonNftCounts(event) {
    var from = event.params.from.toHex();
    var to = event.params.to.toHex();
    _trackProtonNftCounts(event.address, from, to);
}
exports.trackProtonNftCounts = trackProtonNftCounts;
function trackProtonNftCountsB(event) {
    var from = event.params.from.toHex();
    var to = event.params.to.toHex();
    _trackProtonNftCounts(event.address, from, to);
}
exports.trackProtonNftCountsB = trackProtonNftCountsB;
function _trackProtonNftCounts(address, from, to) {
    var counts;
    // Mint
    if (from == common_1.ADDRESS_ZERO) {
        counts = _getCountsObj(to);
        counts.createdCount = counts.createdCount.plus(common_1.ONE);
        counts.ownedCount = counts.ownedCount.plus(common_1.ONE);
        counts.save();
        var platformMetric = loadOrCreatePlatformMetric_1.loadOrCreatePlatformMetric(address);
        platformMetric.platformProtonsMinted = platformMetric.platformProtonsMinted.plus(common_1.ONE);
        platformMetric.save();
    }
    // Burn
    else if (to == common_1.ADDRESS_ZERO) {
        counts = _getCountsObj(from);
        counts.ownedCount = counts.ownedCount.minus(common_1.ONE);
        counts.save();
    }
    // Transfer
    else {
        // From
        counts = _getCountsObj(from);
        counts.ownedCount = counts.ownedCount.minus(common_1.ONE);
        counts.save();
        // To
        counts = _getCountsObj(to);
        counts.ownedCount = counts.ownedCount.plus(common_1.ONE);
        counts.save();
    }
}
