# emotion
## starter
* https://github.com/vercel/next.js/tree/canary/examples/with-emotion

## install
```shell
yarn add @emotion/react @emotion/styled && yarn add --dev @emotion/babel-plugin
```
## theme
* https://emotion.sh/docs/theming
* https://emotion.sh/docs/theming#themeprovider-reactcomponenttype
```typescript
const theme = {
  colors: {
    blue: "blue",
    brand: "hotpink",
  },
  spacing: {
    small: "8px",
    medium: "16px",
  },
}
type Theme = typeof theme
```

## .babelrc
https://github.com/vercel/next.js/blob/canary/examples/with-emotion/.babelrc
```json
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

## tsconfig.json
https://emotion.sh/docs/typescript#css-prop
```json
{
  ...
  "compilerOptions": {
    ...
    "jsxImportSource": "@emotion/react"
  }
}
```