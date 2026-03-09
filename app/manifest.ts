// import type { MetadataRoute } from "next";

// export default function manifest(): MetadataRoute.Manifest {
//   return {
//     name: "SavonDev Studio",
//     short_name: "SavonDev",
//     description:
//       "Premium websites, automation, CRM integrations, and digital solutions for modern businesses in Israel.",
//     start_url: "/en",
//     display: "standalone",
//     background_color: "#020410",
//     theme_color: "#020410",
//     orientation: "portrait",
//     lang: "en",
//     scope: "/",
//     categories: ["business", "design", "productivity", "technology"],
//     icons: [
//       {
//         src: "/icons/icon-192.png",
//         sizes: "192x192",
//         type: "image/png",
//       },
//       {
//         src: "/icons/icon-512.png",
//         sizes: "512x512",
//         type: "image/png",
//       },
//       {
//         src: "/icons/apple-touch-icon.png",
//         sizes: "180x180",
//         type: "image/png",
//       },
//     ],
//   };
// }

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SavonDev Studio",
    short_name: "SavonDev",
    description:
      "Premium websites, automation, CRM integrations, and digital solutions for modern businesses in Israel.",

    start_url: "/en",
    scope: "/",

    display: "standalone",
    orientation: "portrait",

    background_color: "#020410",
    theme_color: "#020410",

    lang: "en",

    categories: ["business", "design", "productivity", "technology"],

    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}