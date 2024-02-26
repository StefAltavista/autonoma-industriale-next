/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/:path((?!_next|images|videos|icons|comingsoon$).*)",
                destination: "/comingsoon",
                permanent: true,
            },
        ];
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "softwarenoise.com",
            },
        ],
    },
};

export default nextConfig;
