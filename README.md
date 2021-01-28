# @blokwise/icons

## Installation

Add `@blokwise/icons` dependency to your project:

```bash
yarn add @blokwise/icons
```

```bash
npm install @blokwise/icons
```

Then, add `@blokwise/icons` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
  modules: [
    [
      '@blokwise/icons',
      {
        prefix: 'icon'
      }
    ]
  ],
}
```

## Usage

### Use icon components

```vue
<template>
  <IconGitHub />
</template>
```

### Load the icons lazily

The icon components can be loaded lazily as `LazyIconGitHub`.

```vue
<template>
  <LazyIconGitHub />
</template>
```

## Credits

A lot of the icons are made by the tailwind labs team and are taken from https://heroicons.dev/
