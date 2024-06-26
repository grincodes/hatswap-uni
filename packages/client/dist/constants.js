export var EVM_APP_BASE_URL = process.env['NEXT_PUBLIC_EVM_APP_BASE_URL'] ||
    (process.env['NEXT_PUBLIC_VERCEL_URL']
        ? "https://".concat(process.env['NEXT_PUBLIC_VERCEL_URL'])
        : 'http://localhost:3000');
export var TOKEN_PRICE_API = process.env['TOKEN_PRICES_API_V0_BASE_URL'] ||
    process.env['NEXT_PUBLIC_TOKEN_PRICES_API_V0_BASE_URL'] ||
    '/api/price';
export var TOKENS_API = process.env['TOKENS_API_V0_BASE_URL'] ||
    process.env['NEXT_PUBLIC_TOKENS_API_V0_BASE_URL'] ||
    'https://tokens.sushi.com';
//# sourceMappingURL=constants.js.map