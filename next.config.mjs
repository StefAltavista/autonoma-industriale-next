/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV;

const nextConfig = {
    async redirects() {
        return env == "production"
            ? [
                  {
                      source: "/",
                      destination: "/comingsoon",
                      permanent: true,
                  },
                  {
                      source: "/about",
                      destination: "/comingsoon",
                      permanent: true,
                  },
                  {
                      source: "/contacts",
                      destination: "/comingsoon",
                      permanent: true,
                  },
                  {
                      source: "/events",
                      destination: "/comingsoon",
                      permanent: true,
                  },
                  {
                      source: "/label",
                      destination: "/comingsoon",
                      permanent: true,
                  },
              ]
            : [];
        // return env == "production"
        //     ? [
        //           {
        //               source: "/*",
        //               destination: "/comingsoon",
        //               permanent: true,
        //           },
        //       ]
        //     : [];
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
