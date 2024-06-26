var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createClient, } from '@sushiswap/database';
import { isPromiseFulfilled } from 'sushi/validate';
import {} from '../../../pure/pools/pools/schema';
import { parsePoolArgs } from '../parse';
import { SushiPoolSelect } from './select';
export function getPoolsFromDB(args) {
    return __awaiter(this, void 0, void 0, function () {
        var take, orderBy, where, skip, cursor, client, pools, poolsRetyped, fetchedPoolIds_1, unfetchedPoolIds, getUnindexedPool_1, unindexedPoolsResults, unindexedPools;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    take = args.take;
                    orderBy = (_a = {},
                        _a[args.orderBy] = args.orderDir,
                        _a);
                    where = parsePoolArgs(args);
                    skip = 0;
                    cursor = {};
                    if (args.cursor) {
                        skip = 1;
                        cursor = { cursor: { id: args.cursor } };
                    }
                    return [4 /*yield*/, createClient()];
                case 1:
                    client = _b.sent();
                    return [4 /*yield*/, client.sushiPool.findMany(__assign(__assign({ take: take, skip: skip }, cursor), { where: where, orderBy: orderBy, select: SushiPoolSelect }))];
                case 2:
                    pools = _b.sent();
                    poolsRetyped = pools;
                    if (!(args.ids && args.ids.length > poolsRetyped.length)) return [3 /*break*/, 5];
                    fetchedPoolIds_1 = poolsRetyped.map(function (pool) { return pool.id; });
                    unfetchedPoolIds = args.ids.filter(function (id) { return !fetchedPoolIds_1.includes(id); });
                    return [4 /*yield*/, import('../unindexedPool')];
                case 3:
                    getUnindexedPool_1 = (_b.sent()).getUnindexedPool;
                    return [4 /*yield*/, Promise.allSettled(unfetchedPoolIds.map(function (id) { return getUnindexedPool_1(id); }))];
                case 4:
                    unindexedPoolsResults = _b.sent();
                    unindexedPools = unindexedPoolsResults.flatMap(function (res) {
                        return isPromiseFulfilled(res) ? [res.value] : [];
                    });
                    poolsRetyped.push.apply(poolsRetyped, unindexedPools);
                    _b.label = 5;
                case 5: return [4 /*yield*/, client.$disconnect()];
                case 6:
                    _b.sent();
                    return [2 /*return*/, poolsRetyped];
            }
        });
    });
}
//# sourceMappingURL=index.js.map