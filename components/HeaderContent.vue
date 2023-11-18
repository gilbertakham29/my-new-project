<template>
  <div
    class="bg-[url('/assets/health.jpg')] bg-cover text-white py-28 md:py-40 md:px-20 px-5"
  >
    <h1 class="md:text-9xl text-4xl font-bold shadow-xs">Life On LINE</h1>
    <h4 class="md:text-4xl text-2xl font-bold my-5">
      LINE-always at your side.
    </h4>
    <div class="flex items-center cursor-pointer">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAMAAADSK7iXAAACIlBMVEX////////+/v7+/v7///////////9HcEz+/v7////////////+/v7////////////////////+/v7////////////////////+/v7////////////////////////+/v7////////////////////////////////////////////////////////////////+/v7////////////////+/v7////////+/v7////////////////////+/v7////////////////+/v7////////////////////////////////////////////////+/v7+/v7////////////////////////////////////////+/v7////////////+/v7////////+/v7////////////+/v7////+/v7////////////////////+/v7////////////+/v7////////////+/v7+/v7////////////////////////////+/v7////////+/v7+/v7////////+/v7////+/v7////////+/v7////////+/v7////////////////////////////////////+/v7////////+/v7////////////////////////+/v7+/v7////+/v7////////+/v7+/v7////////+/v7+/v7////+/v7+/v7////////////+/v7YDyhsAAAAtHRSTlP+Avv8/fsBAP78A/r92uI6kZUB+ODLesH6z0LD3I3uAyIgBfn3EzwLBExWregkzhJVHRChmcFU6fQbWqmMTl70jt8YqZaDfz8y9T1j3mXCQ7C8wHkpj79i4SHNCZEuJrsCtUv5srclix4cUEDzOYXfSsWG4leqzFob2ZIVXXCTl/igdPO6yOXn3dWCuTfr72H2sTWwgQ5euJ55nQrK5NLE8ign5M7jBFJkYhSks/USTy80q2EGwzuCAAADEklEQVQ4y31UB3tURRS9+3be3nnZkkB6Jb2RAGn0hN6b9GZAeu8dVDpKsdCLgoKgKF0P/497561kEyPn+3bnm3fPnFvm3iEOMVR+dd0FE/KTY3JzxyTzJxR016U/KyhcspgrJyYDZCBITqx0hj7aUG7rHCumuBcYEpjAi8t2bGdbWk9pMeZReYAJyIJCKYKlwAB5o5xZabKUA55VU59PPWI9oNwRnNMhogRrMQDyRRSHhE5jwgoSIAwCQiIQXoxpGPfAEGhwmhgMejiLuOoQArd3cZO60lPy74AoUlXidDJqSLNUqolaGwQSpKRJ0UBBqMFkpnFTVMzF8TE+kxkBRTHlOI2HJzILphbCN5jeMC3Zmt0C3L0947u5q9etW32tAuS9P0ZH5Cwhm4ejyOIcl+czNwMP+M6qtVqJn1o0iWmUlJgJi/gzxAkFnLOGh/Fy3OMFqbqsv0vX/xLVmE/QJCm2RQnfRBFhqdJ+57WPhvPz1OvIi/UvVxilTaJap1YSqt3nz0fwkz+4fjnPS410l/5Mry2XymRR2nUpkKgJrfe3x1zFfwqtqfnNP7+q2j4qdCmUSAo/FmlsT7kVi6uZV6ZGNs43r2pgYXCAtrmyzeLWG7OXFd/inBG8rBYzhbbqr9jbd72LvtfC7aW5iLqCKBZf4ZxiroyDmviHhw3u2zcwPuqpPR8+4fKKhQtLl5y/dLVlTmGxHKu48G3Rz0tKSwsvBvDQ1UA8zwWXgfdAImNrLEZrW3bBR+D5AjKesb5evfESFPieJxsfm6UtIzy7QnT/27vpfguQt51jxBHeb0Xvf7o3Cn+XUMRphJtz4YucHUzLjtZZDQcwuwzaR/1TkY0PM/7fAdTRntqxSYY5Shm+HWt3k2Olpz7CPGvDHNfbCevGVWfBx/w9aup7Q/RM9szicDx1duQNAbbs6P+GqKAQ27fuPHiUQl4cdkajtOgAmkQY6p/Uy0sYlG3ktMf+NPEci1Xzl5AZBDrG9ZEG0ATV/BVq5SU6/PFpG5TWyF8DZ6afYv6CP0GL8On42XrOdKj4AMNHd86+fGa0AAAAAElFTkSuQmCC"
        alt="rounded image"
      />
      <p class="text-lg font-bold ml-1">Download</p>
    </div>
    <div class="my-3">
      <button class="p-3 border rounded-md hover:bg-lime-500">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nN3XsUsWYRzA8TO1cAhJkKRAo7WxSWgIwRoiosUmXRz9CySiIQI3wyBoCHRRDGpwtqXFcHAJhJaGyEEtxaWooE88eMP1gvbc+/56g77rHffh7nnunnuKIihcxDTGoq55bOjEDH447F7RjvDM7420A73ZgL5FRzvg1xX0Cy63A+2qjOtnXPvraAon8Bx3MVBEhn7cxxvs4B2eYrhyTh8m8bI8vodNPMZQM+gtHDi691jH92PO+YqpOuht/BTXjRz0PPYD0QV058CzgehK1nuNDmwFoWnsL+SO7aC4XmWhKVwJhOeK3HD1X8GXAuHVOvCZQDh9x8/VwT8E4st14HmxPUorWQ58R3xrOPsn+FS5EkW2i5M5d/0wGH6QO8692A5C09Pry4JLfCIIHs9GK/hii+iL2mgKPQ1/ko2rz0d8O+L4Bk4XzeZwlqedwqdydi7jetpBVHYSo1gq50X6XXrSElr8j/0C3uXJ8WZ0A0QAAAAASUVORK5CYII="
          alt="apple"
        />
      </button>
      <button class="p-3 border rounded-md hover:bg-lime-500 mx-1">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVR4nM3Wy6tNURzA8e1eyfuRRx7lMfTIwMSIP4CBgbxKyqsUIsqNCWJi6E9g5g8wUvKWgWTiMaAoM4wMhOujX61dy7XPcU93r813ds4efFqPvdauqv8hTMF6bOsafoQFOIpbWNcVHD1P+GF8x3Us6gKOXmAxDmEUnzESS1Eajl4m/GDCo1fYUhqu8SU4kOHS+q8pCffDv+Eq5pSC6ykOfP8YPPqIExguAdf4UuzGD3/2FJtKwPlu39cD/4lzJeB8zfc24DHqeTiGi5jeJhy9xjLsTIdM9AzzcSSNPPqQZmdSW3CNx5rvwZM00pMZmvcAG9qCc3woof36itVtwTHSuZiBXdm0N/UJK9uAH8fhgdN4g+XYkQ6WvJj6G1jRxlTH9Tk7oXXvsArbMzx2+ea+G2sA+GFC47Ya29sYWXxIpFNu6K9oNA40ducsnO3xPEZ6qho040PP9HgeN9bagdGoD3o/oSM9zvCt1UTS3J30upxveD2OY/KE0KgBvYeZuJD9N5q+wxZWbaUZjcO+7nZ8/rYG1mXA3YReSr/fx2Fflcrva3oZX9I0Ty2GRriJabiCa3EBVF2E4TjisLET8F/0CwB18pesG6zBAAAAAElFTkSuQmCC"
          alt="playstore"
        />
      </button>
      <button class="p-3 border rounded-md hover:bg-lime-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[30px] h-[30px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="text-center mb-10 md:mb-16" id="life-line">
    <h2 class="text-3xl md:text-6xl font-bold my-10">Life on LINE</h2>
    <p class="text-xl text-gray-600 font-semibold">
      More than just a messenger app.
    </p>
    <p class="text-xl text-gray-600 font-semibold">
      LINE is a new level of communication, and the very infrastructure of your
      life.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
