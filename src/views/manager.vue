
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="2">
        <side />
      </v-col>

      <v-col cols="12" md="9">
        <v-card class="mx-auto" max-width="450">
          <v-img
            class="white--text align-end"
            max-height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>입양신청 진행중 건</v-card-title>

            <v-text-field color="green" loading disabled> </v-text-field>
          </v-img>

          <v-card-subtitle class="pb-0" align="center"> </v-card-subtitle>
          <v-card-text class="text--primary">
            <div class="green--text font-weight-black">4건</div>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="navigateTo()" color="green" text>진행하기</v-btn>
          </v-card-actions>
        </v-card>

        <v-container>
          <v-layout row wrap>
            <v-card class="mx-auto" max-width="450">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20100823_89%2Fkph0921_1282574147891W3r30_jpg%2F9_kph0921.jpg&type=sc960_832"
              >
                <v-card-title>분실신청 진행중 건</v-card-title>
                <v-text-field color="amber" loading disabled> </v-text-field>
              </v-img>
              <v-card-subtitle class="pb-0" align="center"> </v-card-subtitle>
              <v-card-text class="text--primary">
                <div class="amber--text font-weight-black">2건</div>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="navigateTo2()" color="amber" text
                  >진행하기</v-btn
                >
              </v-card-actions>
            </v-card>

            <v-card class="mx-auto" max-width="450">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cphoto.asiae.co.kr/listimglink/6/2017081710452545750_3.jpg"
              >
                <v-card-title>발견신청 진행중 건</v-card-title>
                <v-text-field color="blue" loading disabled></v-text-field>
              </v-img>
              <v-card-subtitle class="pb-0" align="center"> </v-card-subtitle>
              <v-card-text class="text--primary">
                <div class="blue--text font-weight-black">2건</div>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="navigateTo3()" color="blue" text>진행하기</v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>
        </v-container>
      </v-col>
    </v-row>
    <v-layout row wrap> </v-layout>
  </v-container>
</template>

<script>
import side from "../components/side.vue";

export default {
  components: {
    side,
  },

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
      this.$router.push("/loss");
    },

    navigateTo3() {
      this.$router.push("/find");
    },
  },
};
</script>
