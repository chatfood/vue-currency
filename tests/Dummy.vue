<template>
  <div>
    <p>
      {{ value | currency }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 14.34
  })
};
</script>
