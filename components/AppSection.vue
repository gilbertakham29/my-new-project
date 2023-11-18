<template>
  <div class="flex justify-center">
    <img :src="prop1" alt="phone" />
  </div>
  <h3 class="text-3xl font-bold my-3">
    {{ prop2 }}
  </h3>
  <p class="text-gray-600">
    {{ prop3 }}
  </p>
</template>

<script>
export default {
  props: {
    prop1: String,
    prop2: String,
    prop3: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
