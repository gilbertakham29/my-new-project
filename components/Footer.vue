<template>
  <footer
    class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 fixed bottom-0 w-full"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023
      <NuxtLink to="https://Data-Fetch.com/" class="hover:underline"
        >Data-Fetch</NuxtLink
      >
      All Rights Reserved.
    </span>
    <ul
      class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <li>
        <NuxtLink class="mr-4 hover:underline md:mr-6" to="#">About</NuxtLink>
        <NuxtLink class="mr-4 hover:underline md:mr-6" to="#"
          >Privacy Policy</NuxtLink
        >
        <NuxtLink class="mr-4 hover:underline md:mr-6" to="#"
          >Licensing</NuxtLink
        >
        <NuxtLink class="mr-4 hover:underline md:mr-6" to="#">Contact</NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
