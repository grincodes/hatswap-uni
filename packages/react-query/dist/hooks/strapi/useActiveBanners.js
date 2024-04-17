import { useQuery } from '@tanstack/react-query';
export const useActiveBanners = () => {
    return useQuery({
        queryKey: ['https://sushi-strapi-cms.herokuapp.com/api/banners'],
        queryFn: async () => {
            const date = new Date().toISOString();
            const data = await fetch(`https://sushi-strapi-cms.herokuapp.com/api/banners?filters[dateTo][$gte]=${date}&filters[dateFrom][$lte]=${date}&populate=*`).then((response) => response.json());
            return data.data.map((entry) => ({
                ...entry.attributes,
                image: entry.attributes.image.data.attributes,
            }));
        },
        staleTime: 3600000,
        cacheTime: 14400000,
        refetchOnWindowFocus: false,
    });
};
//# sourceMappingURL=useActiveBanners.js.map