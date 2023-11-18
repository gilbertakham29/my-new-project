<template>
  <img class="border w-[80px] rounded-3xl" :src="prop1" alt="small image" />
  <h3 class="md:text-4xl text-3xl font-bold my-2">{{ prop2 }}</h3>
  <p class="text-lg font-semibold text-gray-600">{{ prop3 }}</p>
  <p class="mt-16 -ml-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
    >
      <path
        fill-rule="evenodd"
        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        clip-rule="evenodd"
      />
    </svg>
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
