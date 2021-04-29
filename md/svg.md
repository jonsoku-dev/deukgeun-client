# svg 추가하기
https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f
## install
```shell
yarn add --dev babel-plugin-inline-react-svg
```

## .babelrc
```json
{
  "presets": ["next/babel"],
  "plugins": ["inline-react-svg"]
}
```

## typescript
```shell
touch src/index.d.ts
```
```typescript
declare module "*.svg" {
  const content: any;
  export default content;
}
```