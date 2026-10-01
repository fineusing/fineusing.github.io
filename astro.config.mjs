import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://fineusing.com",
  output: "static",
  build: {
    format: "preserve"
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cn"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
