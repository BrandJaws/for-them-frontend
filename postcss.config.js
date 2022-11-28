module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}",
              "./styles/**/*.{js,jsx,ts,tsx}",
              './node_modules/slick-carousel/**/*.{js,jsx,ts,tsx}',
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
  ],
};
