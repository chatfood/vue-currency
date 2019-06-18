<template>
  <div>
    <p>Hi {{ value | currency }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 12.55
  })
}
</script>