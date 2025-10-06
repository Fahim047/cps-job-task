export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  {
    name: "strapi::session",
    config: {
      cookie: {
        secure: process.env.NODE_ENV === "production", // only secure in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      },
    },
  },
  "strapi::favicon",
  "strapi::public",
];
