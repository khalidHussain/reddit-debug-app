/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        formats: ['image/webp']
    },
    experimental: {
        // taint: true,
        serverActions: {
            allowedOrigins: [
                `${process.env.NEXT_PUBLIC_HOST_NAME}:${process.env.NEXT_NGINX_PORT}`,
            ],
        },
    },
};

export default nextConfig;
