import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";
import path from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/stylesheets/variables" as var;`,
        // additionalData: (content: string, path: string): string => {
        //   return [
        //     '@use "@/stylesheets/variables" as var;',
        //     content,
        //   ].join('\n');
        // },
        importer(...args) {
          if (args[0] !== "@/stylesheets/variables") {
            return;
          }

          return {
            file: `${path.resolve(
              __dirname,
              "./src/assets/stylesheets/variables"
            )}`,
          };
        },
      },
    },
  },
  plugins: [react(), sassDts({ allGenerate: true })],
});
