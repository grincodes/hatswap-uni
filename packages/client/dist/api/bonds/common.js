import { AuctionType } from '@sushiswap/bonds-sdk';
export var convertAuctionTypes = function (auctionTypes) {
    var _a;
    var map = (_a = {},
        _a[AuctionType.Dynamic] = 'dynamic',
        _a[AuctionType.Static] = 'static',
        _a);
    return auctionTypes.map(function (type) { return map[type]; });
};
//# sourceMappingURL=common.js.map