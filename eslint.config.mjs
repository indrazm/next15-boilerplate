import eslint from "@eslint/js"
import nextLint from "eslint-config-next"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import tseslint from "typescript-eslint"

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.strict, ...tseslint.configs.stylistic, {
    plugins: {
        "simple-import-sort": simpleImportSort,
        ...nextLint.plugins,
    },
    rules: {
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
})
