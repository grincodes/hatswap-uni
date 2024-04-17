const normalizeSrc = (src) => (src[0] === '/' ? src.slice(1) : src);
export function cloudinaryFetchLoader({ src, width, quality, }) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
    return `https://cdn.sushi.com/image/fetch/${params.join(',')}/${normalizeSrc(src)}`;
}
export function cloudinaryImageLoader({ src, width, quality, }) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
    return `https://cdn.sushi.com/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
}
export function cloudinaryLogoFetchLoader({ src, width, quality: _quality, }) {
    const params = [
        'f_auto',
        'c_limit',
        `w_${width}`,
        // `q_${quality || 'auto'}`
    ];
    return `https://cdn.sushi.com/image/fetch/${params.join(',')}/d_unknown.png/${normalizeSrc(src)}`;
}
export function cloudinaryLogoImageLoader({ src, width, quality: _quality, }) {
    const params = [
        'f_auto',
        'c_limit',
        `w_${width}`,
        // `q_${quality || 'auto'}`
    ];
    return `https://cdn.sushi.com/image/upload/${params.join(',')}/d_unknown.png/${normalizeSrc(src)}`;
}
// from next/image
// function cloudinaryLoader({
//   config,
//   src,
//   width,
//   quality,
// }: ImageLoaderPropsWithConfig): string {
//   // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
//   const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]
//   const paramsString = params.join(',') + '/'
//   return `${config.path}${paramsString}${normalizeSrc(src)}`
// }
//# sourceMappingURL=cloudinary.js.map