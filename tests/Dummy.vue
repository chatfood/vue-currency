<template>
  <div>
    <p data-test="default">{{ value | currency }}</p>
    <p data-test="noSymbol">{{ value | currency({ symbol: "" }) }}</p>
    <p data-test="customSymbol">{{ value | currency({ symbol: "G$" }) }}</p>
    <p data-test="noPrecision">{{ value | currency({ precision: 0 }) }}</p>
    <p data-test="default">{{ value | currency }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 14.34
  })
};
</script>
