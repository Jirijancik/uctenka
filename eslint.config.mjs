import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "react-hooks/exhaustive-deps": "off",
            "@next/next/no-img-element": "off",
            "react/no-unescaped-entities": "off",
        },
    },
];
