import { VestingType } from '..';
interface GetCliffTimestamp {
    vestingLength: number;
    vestingType: VestingType;
}
/**
 *
 * @param vestingType type of vesting
 * @param vestingLength length of vesting
 *
 * @returns cliff timestamp in seconds
 */
export declare function getCliffTimestamp({ vestingType, vestingLength, }: GetCliffTimestamp): number;
export {};
