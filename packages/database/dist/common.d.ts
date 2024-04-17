import { type Prisma } from '@prisma/client';
export declare const defaultPrismaClientOptions: {
    datasources: {
        db: {
            url: string;
        };
    };
};
/**
 *
 * Deep-replaces the Prisma.Decimal type with string, which prisma actually returns.
 * Will add 'string' for null-only types, don't think we should ever come across those though.
 */
export type DecimalToString<T> = {
    [P in keyof T]: T[P] extends Prisma.Decimal | null ? Exclude<T[P], Prisma.Decimal> | string : T[P] extends unknown[] ? DecimalToString<T[P][0]>[] : T[P] extends object ? DecimalToString<T[P]> : T[P];
};
//# sourceMappingURL=common.d.ts.map