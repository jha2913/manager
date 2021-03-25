<template>
  <v-app>
    <div class="header">
      <img src="./assets/bg_cropped.jpg" alt="" />
    </div>

    <!-- <v-spacer></v-spacer> -->
    <!-- <span class="mr-2">관리자</span>
        <v-icon>mdi-open-in-new</v-icon> -->

    <v-main>
      <v-row justify="center">
        <v-btn
          value="left"
          v-for="(item, i) in items"
          :key="i"
          @click="navigateTo(item)"
          width="250px"
          height="70px"
        >
          <h2 v-text="item.text"></h2>
        </v-btn>
      </v-row>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss">
.header {
  overflow: hidden;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    vertical-align: top;
  }
}

.row {
  margin: 0 !important;
}
</style>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false, // drawer의 기본 값
    selectedItem: 0,
    items: [
      { text: "유기동물", icon: "mdi-home", path: "/" },
      {
        text: "분실/보호동물",
        icon: "mdi-contacts",
        path: "/LostAndFoundAnimal",
      },
      { text: "입양후기", icon: "mdi-forum", path: "/ReviewMain" },
      { text: "관리자", icon: "mdi-format-list-checks", path: "/password" },
    ],
  }),

  methods: {
    navigateTo(item) {
      // 현재 경로와 다르면
      if (this.$route.path != item.path) {
        // 라우터에 경로 추가
        this.$router.push(item.path);
      }
    },
  },
};
</script>