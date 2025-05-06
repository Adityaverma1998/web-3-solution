const config = {
  theme: {
    extend: {
      backdropBlur: {
        '80': '80px',
      },
      boxShadow: {
        'custom-outer': '0px 40px 80px 0px #00000040',
        'custom-inset-1': 'inset 4px 4px 26px 0px #FFFFFF0D',
        'custom-inset-2': 'inset 0px -1px 2px 0px #FFFFFF0D',
        'custom-inset-3': 'inset 0px 0px 2px 0px #00000026',
        'custom-multi': `
          0px 40px 80px 0px #00000040,
          inset 4px 4px 26px 0px #FFFFFF0D,
          inset 0px -1px 2px 0px #FFFFFF0D,
          inset 0px 0px 2px 0px #00000026
        `,
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
