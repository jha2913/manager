<template>
  <div align="center">
    <v-container>
      <div>
        <img
          alt="추카해"
          src="../assets/추카해.png"
          width="170px"
          height="150px"
          align="center"
        />
        <v-btn
          class="black"
          @click="navigateTo()"
          color="light-green accent-3"
          elevation="10"
          outlined
          x-large
          >입양동물신청 관리</v-btn
        >
      </div>

      <div>
        <img
          alt="분실"
          src="../assets/분실.png"
          width="170px"
          height="150px"
          align="center"
        />
        <v-btn
          class="black"
          @click="navigateTo2()"
          color="yellow accent-2"
          elevation="10"
          outlined
          x-large
          >분실동물신청 관리</v-btn
        >
      </div>

      <div>
        <img
          alt="잘보여"
          src="../assets/잘보여.png"
          width="170px"
          height="150px"
          align="center"
        />
        <v-btn
          class="black"
          @click="navigateTo3()"
          color="light-blue lighten-2"
          elevation="10"
          outlined
          x-large
          >발견동물신청 관리</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },

  methods: {
    navigateTo() {
      this.$router.push("/adoption");
    },

    navigateTo2() {
      this.$router.push("/lost");
    },

    navigateTo3() {
      this.$router.push("/found");
    },
  },
};
</script>
