// import { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   const baseUrl = "https://savondev.com";

//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//         disallow: ["/api/", "/admin/", "/_next/"],
//       },
//     ],

//     sitemap: `${baseUrl}/sitemap.xml`,
//     host: baseUrl,
//   };
// }

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://savondev.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}