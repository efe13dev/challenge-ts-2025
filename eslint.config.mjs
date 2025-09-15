import { fixupPluginRules } from "@eslint/compat";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import semistandard from "eslint-config-semistandard";
import importPlugin from "eslint-plugin-import";
import nPlugin from "eslint-plugin-n";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import promisePlugin from "eslint-plugin-promise";
import globals from "globals";

export default [
  {
    ignores: ["node_modules", "dist", "coverage", ".idea"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // Lint con información de tipos
        project: ["./tsconfig.json"],
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.serviceworker, // fetch, Request, Response
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: fixupPluginRules(importPlugin),
      n: nPlugin,
      promise: promisePlugin,
    },
    rules: {
      ...semistandard.rules,

      // Adaptaciones para TS
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_.*?$",
          caughtErrorsIgnorePattern: "^_.*?$",
        },
      ],
      // TS adicional
      "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],

      // Desactivar reglas de ESLint que chocan con TS
      "no-unused-vars": "off",
      "no-undef": "off",

      // Estilo: líneas en blanco entre declaraciones
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: ["return", "export"] },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      ],

      // Console: permitir solo errores
      "no-console": ["warn", { allow: ["error"] }],

      // Orden de imports
      "import/order": [
        "warn",
        {
          groups: [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "@/*",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
        },
      ],
      "import/no-duplicates": "warn",
      "import/newline-after-import": ["warn", { count: 1 }],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.ts",
            "**/*.spec.ts",
            "drizzle.config.ts",
            "eslint.config.mjs",
            "bunfig.toml",
          ],
        },
      ],

      // Promesas
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",

      // Node
      "n/no-missing-import": "off", // TS resuelve imports
      "n/no-process-exit": "warn",
      "n/shebang": "off",
      "n/no-unsupported-features/es-syntax": "off",
    },
  },
  // Prettier recomendado (añade la regla prettier/prettier)
  prettierRecommended,
  // Ajustes de Prettier del proyecto
  {
    rules: {
      // Configuración de Prettier centralizada en ESLint
      "prettier/prettier": [
        "warn",
        {
          printWidth: 100,
          trailingComma: "all",
          tabWidth: 2,
          semi: true,
          singleQuote: false,
          bracketSpacing: true,
          arrowParens: "always",
          endOfLine: "auto",
        },
      ],
    },
  },
  // Desactivar reglas en conflicto con Prettier
  eslintConfigPrettier,
];
