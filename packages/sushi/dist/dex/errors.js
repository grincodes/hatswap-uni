"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsufficientInputAmountError = exports.InsufficientReservesError = void 0;
// see https://stackoverflow.com/a/41102306
const CAN_SET_PROTOTYPE = 'setPrototypeOf' in Object;
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */
class InsufficientReservesError extends Error {
    isInsufficientReservesError = true;
    constructor() {
        super();
        this.name = this.constructor.name;
        if (CAN_SET_PROTOTYPE)
            Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.InsufficientReservesError = InsufficientReservesError;
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */
class InsufficientInputAmountError extends Error {
    isInsufficientInputAmountError = true;
    constructor() {
        super();
        this.name = this.constructor.name;
        if (CAN_SET_PROTOTYPE)
            Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.InsufficientInputAmountError = InsufficientInputAmountError;
//# sourceMappingURL=errors.js.map