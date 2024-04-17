'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
export function List({ className, rowHeight, rowData, rowRenderer: RowComponent, }) {
    const Row = useCallback(({ index, style }) => {
        return _jsx(RowComponent, Object.assign({ style: style }, rowData[index]));
    }, [RowComponent, rowData]);
    return (_jsx(AutoSizer, { disableWidth: true, children: ({ height }) => (_jsx(FixedSizeList, { width: "100%", height: height, itemCount: rowData.length, itemSize: rowHeight || 48, className: className, style: { overflow: 'overlay' }, children: Row })) }));
}
//# sourceMappingURL=List.js.map