# storybook
## starter
* https://storybook.js.org/docs/react/get-started/install
```shell
# Add Storybook:
npx sb init
```

## install
```shell
yarn add --dev @storybook/addon-knobs @storybook/addon-actions
```

## emotion + storybook
https://github.com/emotion-js/emotion/issues/2041#issuecomment-708263981
```typescript
/** @jsxImportSource @emotion/react */

...
```

## main.js
```javascript
const path = require('path')

const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-knobs', '@storybook/addon-actions'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
}
```