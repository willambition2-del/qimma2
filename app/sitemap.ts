import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qimmaaa.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/digital-marketing",
    "/services/web-development",
    "/services/custom-systems",
    "/services/mobile-apps",
    "/services/branding-content",
    "/packages",
    "/portfolio",
    "/articles",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services/") ? 0.7 : 0.8,
  }));
}
