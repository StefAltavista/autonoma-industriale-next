/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV;

const nextConfig = {
    async redirects() {
        return env == "production"
            ? [
                  {
                      source: "/:path((?!_next|images|videos|icons|comingsoon|admin|mailinglist/*).*)",
                      destination: "/comingsoon",
                      permanent: false,
                  },
              ]
            : [];
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
