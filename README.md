### **_IMPORTANT NOTE_**
**This repository is to be considered _DEPRECATED_ and is not being used anymore inside of the ChatFood organization.**

# Vue currency

Developed and maintained by and for ChatFood 😉

[![Build Status](http://drone.chatfood.io/api/badges/chatfood/vue-currency/status.svg)](http://drone.chatfood.io/chatfood/vue-currency)

## Usage

``` bash
# install package
npm install @chatfoodio/vue-currency --save
```

Currency settings available (ISO_CODE): `BRL`, `AED`, `USD`, `TRY`

``` javascript
import Vue from "vue";
import ChatfoodCurrency from "@chatfood/vue-currency";

// Default Currency Settings
const settings = {
  symbol: "$",
  thousand: ",",
  precision: 2,
  decimal: ".",
  symbolFirst: true,
  symbolSeparator: " "
}

Vue.use(ChatfoodCurrency, settings); 
// or Vue.use(ChatfoodCurrency); 

// Set settings on the fly anywhere inside your components
this.$currency.setConfig("ISO_CODE");

// Set settings on the fly anywhere on your project
Vue.currency.setConfig("ISO_CODE");

// Get current settings
Vue.currency.getConfig();
```

``` html
<template>
  <!-- $ 12.43 -->
  <p>{{ 12.43 | currency }}</p>
  
  <!-- AED 12.43 -->
  <p>{{ 12.43 | currency({ symbol: "AED" }) }}</p>
  
  <!-- 12.43 -->
  <p>{{ 12.43 | currency({ symbol: "" }) }}</p>
  
  <!-- $ 12.4 -->
  <p>{{ 12.43 | currency({ precision: 1 }) }}</p>
  
  <!-- $ 12 -->
  <p>{{ 12.43 | currency({ precision: 0 }) }}</p>

  <!-- $ 3.412,43 -->
  <p>{{ 3412.43 | currency({ thousand: ".", decimal: "" }) }}</p>
</template>
```

## Contribution

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build your for production
npm run build

# run unit tests
npm run test

# publish library on NPM (Check your version first before publish.)
npm publish
```
