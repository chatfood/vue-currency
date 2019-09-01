<template>
  <div>
    <p>Format respecting default config: {{ value | currency }}</p>
    <p>No symbol: {{ value | currency({ symbol: "" }) }}</p>
    <p>Custom symbol: {{ value | currency({ symbol: "G$" }) }}</p>
    <p>Custom precision: {{ value | currency({ precision: 0 }) }}</p>
    <p>No custom format: {{ value | currency }}</p>
    <hr>
    <p>
      <button @click="updateSettings">Change currency as per below object</button>
      <pre>{{this.newSettting}}</pre>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 12.55,
    newSettting: {
      symbol: "CFT",
      thousand: ".",
      precision: 2,
      decimal: ",",
      symbolFirst: true,
      symbolSeparator: "#"
    }
  }),
  created() {
    this.$currency.setConfig('BRL')
  },
  methods: {
    updateSettings() {
      this.$currency.setConfig(this.newSettting);
      this.value = 13.55;
    }
  }
}
</script>
