import { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qimmaaa.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/packages",
    "/articles",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  // Main services
  const mainServiceRoutes = services.map((s) => `/services/${s.slug}`);

  // Sub-services
  const subServiceRoutes = services.flatMap((s) =>
    s.subServices.map((sub) => `/services/${s.slug}/${sub.slug}`)
  );

  const allRoutes = [...staticRoutes, ...mainServiceRoutes, ...subServiceRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services/") ? 0.7 : 0.8,
  }));
}
