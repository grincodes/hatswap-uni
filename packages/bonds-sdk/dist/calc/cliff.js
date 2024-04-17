import { VestingType } from '..';
/**
 *
 * @param vestingType type of vesting
 * @param vestingLength length of vesting
 *
 * @returns cliff timestamp in seconds
 */
export function getCliffTimestamp({ vestingType, vestingLength, }) {
    switch (vestingType) {
        case VestingType['Fixed-Term']: {
            return vestingLength + Math.floor(Date.now() / 1000);
        }
    }
}
