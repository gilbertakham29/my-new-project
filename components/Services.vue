<template>
  <div class="md:w-10/12 mx-auto grid grid-cols-12">
    <div class="col-span-12 md:hidden w-full lg:hidden">
      <img
        src="https://link-clone-amt.netlify.app/static/media/ladki.dcae982c90542085b530.png"
        class="w-full mb-3"
        alt="box image"
      />
    </div>
    <div class="col-span-12 md:col-span-6 w-11/12 md:w-full mx-auto">
      <img
        src="data:image/png;base64,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"
        class="border w-[80px] rounded-xl"
        alt="small image"
      />
      <h3 class="md:text-4xl text-3xl font-bold my-3">LINE NEWS</h3>
      <p class="text-xl font-semibold text-green-500">Keep current with</p>
      <p class="text-xl font-semibold text-green-500">
        the latest news on LINE.
      </p>
      <p class="text-lg font-semibold text-gray-600 mt-3">
        LINE NEWS is the most popular news content curation service in Asia and
        aims to deliver valuable content that enrich your everyday life.
      </p>
      <button
        class="border py-3.5 rounded-md px-5 flex items-center hover:bg-green-500 hover:text-white mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
        More details
      </button>
    </div>
    <div class="col-span-12 md:col-span-6 hidden md:flex lg:flex">
      <img
        src="https://link-clone-amt.netlify.app/static/media/ladki.dcae982c90542085b530.png"
        alt="box image"
      />
    </div>
  </div>

  <div class="md:w-10/12 mx-auto grid grid-cols-12">
    <img
      class="col-span-12 md:col-span-6 w-full"
      src="https://link-clone-amt.netlify.app/static/media/baby.680c985dc4deeb556dfa.png"
      alt="box image"
    />
    <div class="col-span-12 md:col-span-6 w-11/12 md:w-full mx-auto">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAADAFBMVEVHcEz////////////////////////////+/v7////+/v7////////+/v7+/v7+/v7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v7///////////////////////////////////////////////////////////////////////////////////////////////////8AAAD+/v4HtTsBAQH7+/v9/f0DAwP8/PwCAgL39/cmJiYFBQXV1dVpaWmmpqYEBATe3t5wcHARERH6+voeHh6SkpIKtj4LCwsJtT39/v3c3NwFtDqUlJT9/v77/fwAsjMAsTAAsC4FtDkItTz8/vzn+Oz5/frJ7tQvwVv7/vwAsC111ZJVzHmE2p6lpaW76sk/Pz8swFgBszYNtz8SEhIAsTKpqalMTEyfn5/m9+snJycxMTG1tbWMjIzR8drG7tKamppYzXp31pO968r5+fkAry1UzHjX19cfHx/b29tJSUlCQkL19fXs7OyXl5csLCzPz8/q6ur4+Pg0NDRRUVE9PT2RkZF8fHzy+/Ti4uKsrKyenp5nZ2cHBwdHyG0ArieK26K36cYywl0qv1Zw1I9s04sNDQ0ArCJ715eTk5PU1NRhYWGCgoK9vb0ZGRn29vYPDw9vb29ycnLExMQiIiLm5uZtbW2BgYEKtT3N8NdxcXHr+e8du01PynMlvVOkpKTk9unl5eVZzXwsulXDAAAAfHRSTlMAAfz6+wL9/v4DA/oE/P377WZ5NtM76z8GufCVj/WAGd6w0ZncTxT5rC2RqqVCXwsqFtnIIZ9791cO1Nh0MrEcXJwb6EfhqYZW5WB1EjCS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"
        alt="small image"
      />
      <h3 class="md:text-4xl text-3xl font-bold my-3">LINE Doctor</h3>
      <p class="text-xl font-semibold text-green-500">
        Connect with a doctor,right from the LINE app.
      </p>
      <p class="text-lg font-semibold text-gray-600 mt-3">
        LINE Doctor is a telemedicine service that lets users book appointments,
        speak with a doctor over video call, and pay for consultations on the
        LINE app.
      </p>
      <p class="text-lg font-semibold text-gray-600">
        Receive medical consultations at home when you don't have time to visit
        a hospital or want to avoid the crowd.
      </p>
      <button
        class="border py-3.5 rounded-md px-5 flex items-center hover:bg-green-500 hover:text-white mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
        More details
      </button>
    </div>
  </div>
  <div class="md:w-10/12 mx-auto grid grid-cols-12">
    <img
      src="https://link-clone-amt.netlify.app/static/media/qrc.807bd276dc23e0e52f08.png"
      class="col-span-12 md:hidden w-full mb-3"
      alt="box image"
    />

    <div class="col-span-12 md:col-span-6 w-11/12 md:w-full mx-auto">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEVHcEwAw00Aw00Aw00Aw00Aw00Aw00Aw00Aw00Aw00Aw00Aw00Aw00Aw00Aw00Aw00Aw03///8A03xf4qnt+/Xa+Oq08dQAy2YAx1l35rQQ25OM6r8Az3EA14dB3p6h7crI9N9Jc1LXAAAAEHRSTlMAQCDf78+fgL8QjzBQcGCvUySYSwAAAn5JREFUaN7t2+lygyAQAGCjJmrO9cIjMeb9n7IKeGunTmG3M2X/1Impn+ByxAHLWkZwuHsq43qwfhDXkwPq43i+fqvangu6wvGCLTbwQGu43kYlu6A7nLWnfQaMuC2q2QecOM3cIwCJjOdO5RNgxpDcd8CNLrcDFxl2AoqKHirbRnfBDWgKLIocELjgNvCNAoZmlPRJ4KYXIXHBsQ40MBA94gb2qOAHFewb2MAGNrCBDbwfjhREvh+OklBBJNFuWInbyLvhUFG8qODIwAY28PCvadzFM0GF4+HDPCaCAV4JEQwRFQxPXPjFGKt5h1/hwryG0+FMWmbN3RRh0Sa7zPxafP/THjOlcNif6ar/Jc/xYTcbUZrgZb6V/eNPR/egCn7LazJYwGz6pUIZnDczt4yfiOXF8jKOs6GF8UpPm4N8OnFS1pzyRFRm/mlnVFUPP9ujdxjW7d9SQzuupSEqM+3hJBd3VU1SSxmcs+4Dee0h8UR6zVJLERwVSbgJf3jziqeppao5iVit6jGRaIJXk0vezyy11MJ9c3pnkwGr+6HEtMErHUjfdUxTSzG8MUSLMWSSWqrhsJgNEiL4E+fdl7rJHpsNs7NhcZReFcH0tpJdGzacLlMLB47l4IUOZ8vUQoHr1akgAsza7P+YX4sG/rsw2Zu9Ug1c7n97m73jX0eZmRflBjawgQ1sYAP/Zdj7dzDZCraAxnVxVzgP8cBawj6Pu2VdSOB28S1FS+aryiny2ubrnH2aAhMU2bVR92YMcSPZrcDbcL/rB3P5/nG8C+ji0riI8nG+68nGec7+crdVgJHb61utDroL7V+2NpfdddL+t5v5LmdHi+qc7Sn0Bf4Oc1TJgBG9AAAAAElFTkSuQmCC"
        class="border w-[80px] rounded-xl"
        alt="small image"
      />
      <h3 class="md:text-4xl text-3xl font-bold my-3">LINE Pay</h3>
      <p class="text-xl font-semibold text-green-500">Easily make</p>
      <p class="text-xl font-semibold text-green-500">
        payments online/offline with LINE Pay.
      </p>
      <p class="text-lg font-semibold text-gray-600 mt-3">
        LINE Pay is an easy, convenient, and safe payment system. Enjoy freely
        making payments without your wallet.
      </p>
      <button
        class="border py-3.5 rounded-md px-5 flex items-center hover:bg-green-500 hover:text-white mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
        More details
      </button>
    </div>
    <img
      src="https://link-clone-amt.netlify.app/static/media/qrc.807bd276dc23e0e52f08.png"
      class="col-span-12 md:col-span-6 hidden md:flex w-full"
      alt="box image"
    />
  </div>
  <div class="md:w-10/12 mx-auto grid grid-cols-12">
    <img
      class="col-span-12 md:col-span-6 w-full"
      src="https://link-clone-amt.netlify.app/static/media/ladki2.f48d14f101b05113e64a.png"
      alt="box image"
    />
    <div class="col-span-12 md:col-span-6 w-11/12 md:w-full mx-auto">
      <img
        class="border w-[80px] rounded-xl"
        src="data:image/png;base64,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"
        alt="small image"
      />
      <h3 class="md:text-4xl text-3xl font-bold my-3">LINE Music</h3>
      <p class="text-xl font-semibold text-green-500">Listen, Watch and</p>
      <p class="text-xl font-semibold text-green-500">Sing along.</p>
      <p class="text-lg font-semibold text-gray-600 mt-3">
        LINE MUSIC is a music streaming service in Japan with over 70 million
        songs, both Japanese and foreign. Users can listen to trending songs,
        watch music videos and enjoy the sing-along feature.
      </p>
      <p class="text-lg font-semibold text-gray-600">
        Receive medical consultations at home when you don't have time to visit
        a hospital or want to avoid the crowd.
      </p>
      <button
        class="border py-3.5 rounded-md px-5 flex items-center hover:bg-green-500 hover:text-white mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
        More details
      </button>
    </div>
  </div>
  <div class="md:w-10/12 mx-auto grid grid-cols-12">
    <img
      src="https://link-clone-amt.netlify.app/static/media/man.eed79ec4edfb77bff6fe.png"
      class="col-span-12 md:hidden w-full mb-3"
      alt="box image"
    />

    <div class="col-span-12 md:col-span-6 w-11/12 md:w-full mx-auto">
      <img
        src="data:image/png;base64,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"
        class="border w-[80px] rounded-xl"
        alt="small image"
      />
      <h3 class="md:text-4xl text-3xl font-bold my-3">LINE CLOVA</h3>
      <p class="text-xl font-semibold text-green-500">People-Friendly AI</p>
      <p class="text-xl font-semibold text-green-500">
        that supports your daily life.
      </p>
      <p class="text-lg font-semibold text-gray-600 mt-3">
        Clova is LINE's AI assistant. It offers a wide range of AI services to
        help solve the challenges of life and business.
      </p>
      <button
        class="border py-3.5 rounded-md px-5 flex items-center hover:bg-green-500 hover:text-white mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
        More details
      </button>
    </div>
    <img
      src="https://link-clone-amt.netlify.app/static/media/man.eed79ec4edfb77bff6fe.png"
      class="col-span-12 md:col-span-6 hidden md:flex w-full"
      alt="box image"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
