<template>
  <div>
    <p>Format respecting default config: {{ value | currency }}</p>
    <p>No symbol: {{ value | currency({ symbol: "" }) }}</p>
    <p>Custom symbol: {{ value | currency({ symbol: "G$" }) }}</p>
    <p>Custom precision: {{ value | currency({ precision: 0 }) }}</p>
    <p>No custom format: {{ value | currency }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 12.55
  }),
  created() {
    this.$currency.setConfig('BRL')
  }
}
</script>