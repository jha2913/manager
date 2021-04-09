<template>
  <v-app>
    <div width="100%" height="250" flat>
      <v-img src="./assets/bg_cropped.jpg" />
      <v-btn
        @click="navigateTo4()"
        icon
        color="pink"
        absolute
        right
        top
        href="http://mongyang-manager.s3-website.ap-northeast-2.amazonaws.com/"
        ><v-icon>mdi-cog-outline</v-icon></v-btn
      >
    </div>
    <v-main>
      <v-row justify="center">
        <v-btn
          value="left"
          v-for="(item, i) in items"
          :key="i"
          :href="item.src"
          width="20%"
          height="70px"
          text
        >
          <h2 v-text="item.text"></h2>
        </v-btn>
      </v-row>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    drawer: false, // drawer의 기본 값
    selectedItem: 0,
    items: [
      {
        text: "유기동물",
        icon: "mdi-home",
        src: "http://animal-vueapp.s3-website.ap-northeast-2.amazonaws.com/",
      },
      {
        text: "분실/보호동물",
        icon: "mdi-contacts",
        src:
          "http://mongyang-lostandfound.s3-website.ap-northeast-2.amazonaws.com/",
      },
      {
        text: "입양후기",
        icon: "mdi-forum",
        src:
          "http://animal-teamproject.s3-website.ap-northeast-2.amazonaws.com/",
      },
      {
        text: "동물병원",
        src:
          "http://animal-teamproject.s3-website.ap-northeast-2.amazonaws.com/hospital/",
      },
    ],
  }),
  methods: {
    navigateTo(item) {
      if (this.$route.path != item.path) {
        // 라우터에 경로 추가
        this.$router.push(item.path);
      }
    },
    navigateTo4() {
      this.$router.push("/password");
    },
  },
};
</script>
<style lang="scss">
.row {
  margin: 0 !important;
}
</style>