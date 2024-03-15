module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "no-console": "warn",
        "import/prefer-default-export": "off",
        "no-unused-expressions": "error",
        "sort-imports": [
            "error",
            {
                ignoreCase: true,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["single", "multiple", "all", "none"],
                allowSeparatedGroups: false,
            },
        ],
        "react/jsx-no-target-blank": "off",
        "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
};
