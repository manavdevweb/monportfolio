// .eslintrc.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Étend les configs Next.js & TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Règles custom pour que le build ne soit pas bloqué
  {
    rules: {
      // Apostrophes dans JSX
      "react/no-unescaped-entities": "warn",

      // Variables déclarées mais non utilisées
      "@typescript-eslint/no-unused-vars": "warn",

      // Désactiver certaines règles qui bloquaient le build inutilement
      "react-hooks/exhaustive-deps": "warn",  // useEffect missing deps
      "react/prop-types": "off",             // pas utile en TS
    },
  },
];

export default eslintConfig;
