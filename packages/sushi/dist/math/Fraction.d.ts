import { type BigintIsh } from './BigintIsh.js';
import Rounding from './Rounding.js';
declare class Fraction {
    readonly numerator: bigint;
    readonly denominator: bigint;
    constructor(numerator: BigintIsh, denominator?: BigintIsh);
    private static tryParseFraction;
    get quotient(): bigint;
    get remainder(): Fraction;
    invert(): Fraction;
    add(other: Fraction | BigintIsh): Fraction;
    subtract(other: Fraction | BigintIsh): Fraction;
    lessThan(other: Fraction | BigintIsh): boolean;
    equalTo(other: Fraction | BigintIsh): boolean;
    greaterThan(other: Fraction | BigintIsh): boolean;
    multiply(other: Fraction | BigintIsh): Fraction;
    divide(other: Fraction | BigintIsh): Fraction;
    toSignificant(significantDigits: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces: number, format?: object, rounding?: Rounding): string;
    toJSON(): {
        n: string;
        d: string;
    };
    /**
     * Helper method for converting any super class back to a fraction
     */
    get asFraction(): Fraction;
}
export default Fraction;
//# sourceMappingURL=Fraction.d.ts.map