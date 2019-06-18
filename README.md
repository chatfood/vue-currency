# Vue currency

> Vue currency filter

## Contribution - Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build your for production
npm run build

# publish library on NPM (Check your version first before publish.)
npm publish
```

## Usage

``` bash
# install package
npm install @chatfood/vue-currency --save
```

Use it =)

``` javascript
import Vue from "vue";
import ChatfoodCurrency from "@chatfood/vue-currency";

Vue.use(ChatfoodCurrency);
```

``` html
<template>
  <p>{{ 12.43 | currency }}</p>
</template>
```