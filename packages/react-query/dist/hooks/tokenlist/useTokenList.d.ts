import { Token } from 'sushi/currency';
import type { UseTokenListQuerySelect } from './types';
export declare const useTokenListQuery: (select: UseTokenListQuerySelect) => import("@tanstack/react-query").UseQueryResult<Record<string, Token>, unknown>;
export declare const useTokenList: (filter?: 'showNone' | string[]) => import("@tanstack/react-query").UseQueryResult<Record<string, Token>, unknown>;
//# sourceMappingURL=useTokenList.d.ts.map