var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Chain, ChainId } from 'sushi/chain';
import { Avatar, AvatarImage } from '../avatar';
import { LinkExternal } from '../link';
const AvaxLogo = 'avax.svg';
const BnbLogo = 'bnb.svg';
const EthereumLogo = 'ethereum.svg';
const FtmLogo = 'ftm.svg';
const OneLogo = 'one.svg';
const HtLogo = 'ht.svg';
const MaticLogo = 'matic.svg';
const GlmrLogo = 'glmr.svg';
const OktLogo = 'okt.svg';
const xDaiLogo = 'xdai.svg';
const CeloLogo = 'celo.svg';
const PalmLogo = 'plam.svg';
const MovrLogo = 'movr.svg';
const FuseLogo = 'fuse.svg';
const TelosLogo = 'telos.svg';
const KavaLogo = 'kava.svg';
const MetisLogo = 'metis.svg';
const BobaLogo = 'boba.svg';
const BttcLogo = 'bttc.svg';
const ThundercoreLogo = 'thundercore.svg';
const CoreLogo = 'core.svg';
const IslmLogo = 'islm.svg';
const FilecoinLogo = 'filecoin.svg';
const ZetaLogo = 'zeta.svg';
const CroLogo = 'cro.svg';
const LOGO = {
    [ChainId.ETHEREUM]: EthereumLogo,
    [ChainId.SEPOLIA]: EthereumLogo,
    // [ChainId.KOVAN]: EthereumLogo,
    // [ChainId.RINKEBY]: EthereumLogo,
    // [ChainId.ROPSTEN]: EthereumLogo,
    // [ChainId.GÖRLI]: EthereumLogo,
    [ChainId.FANTOM]: FtmLogo,
    [ChainId.FANTOM_TESTNET]: FtmLogo,
    [ChainId.POLYGON]: MaticLogo,
    [ChainId.POLYGON_TESTNET]: MaticLogo,
    [ChainId.GNOSIS]: xDaiLogo,
    [ChainId.BSC]: BnbLogo,
    [ChainId.BSC_TESTNET]: BnbLogo,
    [ChainId.AVALANCHE]: AvaxLogo,
    [ChainId.AVALANCHE_TESTNET]: AvaxLogo,
    [ChainId.HECO]: HtLogo,
    // [ChainId.HECO_TESTNET]: HtLogo,
    [ChainId.HARMONY]: OneLogo,
    // [ChainId.HARMONY_TESTNET]: OneLogo,
    [ChainId.OKEX]: OktLogo,
    // [ChainId.OKEX_TESTNET]: OktLogo,
    [ChainId.ARBITRUM]: EthereumLogo,
    [ChainId.ARBITRUM_TESTNET]: EthereumLogo,
    [ChainId.CELO]: CeloLogo,
    [ChainId.PALM]: PalmLogo,
    [ChainId.MOONRIVER]: MovrLogo,
    [ChainId.FUSE]: FuseLogo,
    [ChainId.TELOS]: TelosLogo,
    [ChainId.MOONBEAM]: GlmrLogo,
    [ChainId.OPTIMISM]: EthereumLogo,
    [ChainId.KAVA]: KavaLogo,
    [ChainId.ARBITRUM_NOVA]: EthereumLogo,
    [ChainId.METIS]: MetisLogo,
    [ChainId.BOBA]: EthereumLogo,
    [ChainId.BOBA_AVAX]: BobaLogo,
    [ChainId.BOBA_BNB]: BobaLogo,
    [ChainId.BTTC]: BttcLogo,
    [ChainId.POLYGON_ZKEVM]: EthereumLogo,
    [ChainId.THUNDERCORE]: ThundercoreLogo,
    [ChainId.CORE]: CoreLogo,
    [ChainId.HAQQ]: IslmLogo,
    [ChainId.ZKSYNC_ERA]: EthereumLogo,
    [ChainId.LINEA]: EthereumLogo,
    [ChainId.BASE]: EthereumLogo,
    [ChainId.SCROLL]: EthereumLogo,
    [ChainId.FILECOIN]: FilecoinLogo,
    [ChainId.ZETACHAIN]: ZetaLogo,
    [ChainId.CRONOS]: CroLogo,
    [ChainId.BLAST]: EthereumLogo,
};
export const Icon = (_a) => {
    var _b;
    var { currency, disableLink = true } = _a, rest = __rest(_a, ["currency", "disableLink"]);
    const src = currency.isNative
        ? `native-currency/${LOGO[currency.chainId]}`
        : `tokens/${currency.chainId}/${currency.wrapped.address}.jpg`;
    const avatar = (_jsx(Avatar, { style: { width: rest.width, height: rest.height }, children: _jsx(AvatarImage, { width: (_b = Number(rest.width)) !== null && _b !== void 0 ? _b : 20, src: src }) }));
    if (disableLink) {
        return avatar;
    }
    return (_jsx(LinkExternal, { href: Chain.tokenUrl(currency.chainId, currency.wrapped.address), children: avatar }));
};
//# sourceMappingURL=Icon.js.map