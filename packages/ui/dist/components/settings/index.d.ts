import { FC, ReactNode } from 'react';
export declare enum SettingsModule {
    CarbonOffset = "CarbonOffset",
    CustomTokens = "CustomTokens",
    SlippageTolerance = "SlippageTolerance",
    ExpertMode = "ExpertMode",
    SwapApi = "SwapApi"
}
interface SettingsOverlayProps {
    children?: ReactNode;
    modules: SettingsModule[];
    options?: {
        slippageTolerance?: {
            storageKey?: string;
            defaultValue?: string;
            title?: string;
        };
    };
}
export declare const SettingsOverlay: FC<SettingsOverlayProps>;
export {};
//# sourceMappingURL=index.d.ts.map