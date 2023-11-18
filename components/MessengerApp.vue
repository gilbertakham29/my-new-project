<template>
  <div class="text-center bg-gray-100 py-16 md:py-20" id="messenger">
    <h1 class="text-3xl md:text-6xl font-extrabold">Messenger APP</h1>
    <p class="text-xl mt-3 text-gray-600 md:w-6/12 w-11/12 mx-auto">
      New communication app which allows you to make FREE voice calls and send
      FREE messages whenever and wherever you are, 24 hours a day!
    </p>
    <div class="w-10/12 mx-auto grid grid-cols-12 mt-10 gap-5">
      <div
        class="text-center col-span-12 md:col-span-6 lg:col-span-4"
        v-for="(item, index) in mobileData"
        :key="index"
      >
        <AppSection
          :prop1="item.photo"
          :prop2="item.title"
          :prop3="item.desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileData: [
        {
          photo:
            "https://link-clone-amt.netlify.app/static/media/p1.65ca856c0e7943cfe074.png",
          title: "Texts, Voice & Video Calls",
          desc: "You can send one-on-one and group texts, and use international voice and video calls with your friends.",
        },
        {
          photo:
            "https://link-clone-amt.netlify.app/static/media/p2.2c31f92da617b939e2e6.png",
          title: "Stickers, Emoji, Themes",
          desc: "You can share you feelings with stickers or emoji, and wrap your app with colorful themes",
        },
        {
          photo:
            "https://link-clone-amt.netlify.app/static/media/p3.ce82272c7040913f1f33.png",
          title: "OpenChat",
          desc: "You can meet new friends with similar interests and share fun news and information.",
        },
        {
          photo:
            "https://link-clone-amt.netlify.app/static/media/p4.e4a89519da461a43105c.png",
          title: "Hometab",
          desc: "You can access to various information, services, contents like LINE family services, stickers, etc.",
        },
        {
          photo:
            "https://link-clone-amt.netlify.app/static/media/p5.4b817dfe14b95351a35f.png",
          title: "LINE VOOM",
          desc: 'Explore even more content that you may like in the "For you" tab.',
        },
        {
          photo:
            "https://link-clone-amt.netlify.app/static/media/p6.1a7b69b37deac373d7e6.png",
          title: "Wallet",
          desc: 'Paying or sending money by "LINE Pay", and you can use various LINE financial services.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
