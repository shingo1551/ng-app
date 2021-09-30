# Angularで[purgecss](https://purgecss.com/)

purgecssは正式にはAngular対応ではないため、purgeの効果はやや緩い

## install

```
$ git clone https://github.com/shingo1551/ng-app.git
$ cd ng-app
$ npm i
```

## usage: [postcss-cli](https://github.com/postcss/postcss-cli)

purgecssはpostcssのpluginとして動く

```
$ npm run postcss ./src/styles.css
```

## このProjectでの例

./src/styles.css の最下部
```
    ...
@media screen and (max-width: 575px) {
  svg#rocket-smoke {
    display: none;
    visibility: hidden;
  }
}

.unused {
  color: blue;
}

.used {
  color: red;
}
```

```
$ npm run postcss ./src/styles.css
```
の実行結果の出力の最下部
```
    ...
@media screen and (max-width: 575px) {
  svg#rocket-smoke {
    display: none;
    visibility: hidden;
  }
}

.used {
  color: red;
}
```
.unsed が削除されている

./src/app/app.component.htmlのほぼ最下部

```
  <!-- Footer -->
  <footer [class]="{ used: bUsed }">
    Love Angular?&nbsp;
```

usedを使用しているが、unusedは使用していない


## package.json

```
  "devDependencies": {
        ...
    "@fullhuman/postcss-purgecss": "^4.0.3",
        ...
    "autoprefixer": "^10.3.5",
    "cssnano": "^5.0.8",
        ...
    "postcss": "^8.3.8",
    "postcss-cli": "^9.0.1",
    "postcss-import": "^14.0.2",
    "tailwindcss": "^2.2.15",
        ...
  }
  ```

## [postcss](https://github.com/postcss/postcss)のplugin

- [@fullhuman/postcss-purgecss](https://github.com/FullHuman/postcss-purgecss)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [cssnano](https://cssnano.co)
- [postcss-import](https://github.com/postcss/postcss-import)
- [tailwindcss](https://tailwindcss.com)

## postcss.config.js

    下記の例では、postcss_import, tailwindcss, cssnano は未使用
    コメントを外すことで使用可能

```
// const postcss_import = require('postcss-import')
// const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
// const cssnano = require('cssnano')

module.exports = {
  plugins: [
    // postcss_import,
    // tailwindcss,
    autoprefixer,
    purgecss({ content: ['./src/**/*.html']}),
    // cssnano({ preset: 'default'})
  ]
}
```

ディレクトリ構成が異なる場合、

    purgecss({ content: ['./src/**/*.html']}),

の設定を変更すること。

.tsxにも対応しているので、stencilで、

    purgecss({ content: ['./src/**/*.tsx']}),

も可能
