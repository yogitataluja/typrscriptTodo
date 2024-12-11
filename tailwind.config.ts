import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure it scans all subdirectories in `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
