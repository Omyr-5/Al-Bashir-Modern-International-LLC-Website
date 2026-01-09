import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    // For non-routing setup, we provide a fixed locale or detect it from a cookie.
    // Starting with 'en' to verify the 404/rendering issue is fixed.
    const locale = 'en';

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
