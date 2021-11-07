module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          animated: './src/animated',
          common: './src/common',
          components: './src/components',
          styles: './src/styles',
          themes: './src/themes',
          ui: './src/ui',
        },
      },
    ],
  ],
};
