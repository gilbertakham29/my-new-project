<template>
  <nav
    class="border border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded"
  >
    <div class="mx-auto flex flex-wrap items-center justify-between">
      <NuxtLink href="https://flowbite.com/" class="flex items-center">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAYCAMAAACSqGBIAAAB3VBMVEUeHh4eHh4eHh4eHh4eHh4eHh4dHR1HcEweHh4eHh4dHR0eHh4fHx8fHx8eHh4dHR0eHh4eHh4eHh4iIiIdHR0cHBweHh4dHR0gICAeHh4cHBweHh4eHh4eHh4dHR0dHR0hISEeHh4dHR0eHh4fHx8eHh4gICAeHh4eHh4eHh4eHh4jIyMeHh4eHh4dHR0fHx8eHh4fHx8eHh4pKSkeHh4dHR0hISEkJCQeHh4eHh4eHh4eHh4gICAfHx8eHh4dHR0eHh4eHh4eHh4fHx8dHR0hISEfHx8eHh4eHh4eHh4fHx8fHx8eHh4eHh4aGhobGxsaGhogICAeHh4eHh4eHh4gICAhISEeHh4eHh4eHh4jIyMeHh4eHh4hISEeHh4dHR0dHR0fHx9BQUEfHx8dHR0eHh4fHx8eHh4eHh4dHR0eHh4gICAfHx8eHh4eHh4dHR0fHx8eHh4iIiIeHh4eHh4eHh4eHh4eHh4eHh4eHh4fHx8eHh4gICAfHx8bGxsaGhohISEeHh4eHh4hISEnJyceHh4fHx8fHx8eHh4eHh4dHR0kJCQeHh4eHh4eHh4eHh4hISEgICAdHR0eHh4hISEfHx8eHh4fHx8eHh4fHx8dHR0dHR0fHx8eHh4dHR1iZQejAAAAnXRSTlP9+/CLo/r+AP78/eogPAEDvUpyA/sBigEo5QLBcfn8oQH2AgICvwLkqOm8A3/VtAt2PXUBsgcEAXN0aIwqFKmKz/O0bAwYPyLvkB87xe4DAwIBe+JCXRDCiY4b1pgoVOzrBAJltqd5SZsESwQDRWm1K00c667XNsp83EnYTmYBBQqdjScK7AYquPjCA7N33ucvKTDgHlh+WZFXiY1pIPNKMQAAAl5JREFUOMuVlGdb1FAQhW+QzbmJiohRUFhWRBDsXUGKXbH33nvvvffee5v5rc7d1GV3ycN8ynN38+bcOTNH1bPDVy+hGUFVodPRjbR0OVYsZo+vX8E5c7wB28m19TLgu8WagrIV1yvWnOXLGBET2shVXLEKK5ew8qjHP96E3ZxV3Ab0seKQQPK2EkSGT8aEWuTMYfsarF3NSjt8FBPkeBx2ccalHNBLbqRBa3aUNoSRSQ2VRsPQYRheIV9TvH4/xhvCGEOoBIYIgbUTFish9ScYDQFBvsHVRwSRJyjOE8zNo2pKI2jp6gn5tYCgeNrMhoU1Ug2zZ6UQSDpFTTfQXECweO6C8P9IJdjk8M1H0s0EwaPp86LOpxBsaTc10hM8LNBAx2bMmT9KasrhVA0us7HsDpIETQdbqvM1eefUgQkOf3hHtvbobjcWxQSyKTZjYILFXz+9YYc8fpwkaBnnuFIIH799eS17oOneLTPVPsEeDGFSF96zJe24fU0GOJyowdxi7Ge8fcUZmQuzRNEtDoWdrC/uZG0/Qh3w8rnYKo7o2M2LoZtnAzfP4PRov4o01OEF7ssy2TbbZScqy+ejGS2hofUBjsuTDFfZqXb41IUOsyc1HZ3dKCZUYc9WGQ2ty25Wcll/FBMmYiMOsNnp0tutTdCoIC4s+otkwoibhiB7tY880qUTRoBxaCn+A+QMwU85ITxFK7AZO/aKl37KSWoUpJwoinPTpT6gx2D9pLW4vctokCjfZptbSNL+IpcKknadWeEwvDnzG/jncJT21PLMpKSxaEuQ9j/F2GTa/wf5hWUifsY9LAAAAABJRU5ErkJggg=="
          alt="Company Logo"
        />
      </NuxtLink>
      <div class="flex md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="lg:w-8 lg:h-8 w-12 h-12 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"
              >Bonnie Green</span
            >
            <span
              class="block text-sm text-gray-500 truncate dark:text-gray-400"
              >name@flowbite.com</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-user"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div class="w-full md:block md:w-auto hidden" id="navbar-user">
        <ul
          class="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
        >
          <li>
            <NuxtLink
              to="#life-line"
              class="block text-xl py-2 pr-4 pl-3 md:p-0 bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700"
              >Life on LINE</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#messenger"
              class="block text-xl py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >Messenger APP</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#services"
              class="block text-xl py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >Services</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
