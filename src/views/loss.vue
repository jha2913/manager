<template>
  <div align="center">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="2">
          <side />
        </v-col>
        <v-col cols="12" md="9">
          <v-card class="mx-auto" color="lime lighten-5" max-width="1000">
            <div>
              <img
                alt="페키니즈"
                src="../assets/페키니즈.jpg"
                width="500px"
                height="500px"
              />

              <v-form ref="form">
                id: {{ list[0].id }}
                <p />
                날짜: {{ list[0].date }}
                <p />
                이름: {{ list[0].name }}
                <p />
                지역: {{ list[0].area }}
                <p />
                성별: {{ list[0].gender }}
                <p />
                색깔: {{ list[0].color }}
                <p />
                content: {{ list[0].content }}
                <p />
                list_animal_file: {{ list[0].listAnimalFile }}
                <p />
                number: {{ list[0].number }}
                <p />
                state: {{ list[0].state }}
                <p />
                상태: {{ list[0].status }}
                <p />
                type: {{ list[0].type }}
                <p />
                <br />
                <div>
                  <v-alert
                    v-model="alert"
                    v-if="alert == true"
                    dismissible
                    color="purple"
                    border="left"
                    elevation="5"
                    colored-border
                    icon="mdi-twitter"
                  >
                    <div class="green--text">
                      <strong>승인</strong>되었습니다
                    </div>
                  </v-alert>
                  <v-alert
                    v-model="alert2"
                    v-if="alert2 == true"
                    dismissible
                    color="red"
                    border="left"
                    elevation="5"
                    colored-border
                    icon="mdi-twitter"
                  >
                    <div class="red--text"><strong>거절</strong>되었습니다</div>
                  </v-alert>

                  <v-btn color="green mr-5" dark @click="yes"> 승인 </v-btn>
                  <v-btn color="red" dark @click="no"> 거절 </v-btn>
                </div>

                <br />
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="totalPages"
                  :total-visible="3"
                  @input="handlePageChange"
                ></v-pagination>
                <br />
              </v-form></div
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import side from "../components/side.vue";
import api from "@/api/loss";

export default {
  components: {
    side,
  },

  data() {
    return {
      page: 1,
      totalPages: 10,
      alert: false,
      alert2: false,
      loss: "",
      list: [],
    };
  },

  mounted() {
    // 목록 조회 함수
    this.getList();
  },

  methods: {
    no() {
      this.alert2 = true;
      this.alert = false;
    },
    yes() {
      this.alert = true;
      this.alert2 = false;
    },

    async getLosss() {
      const result = await api.list();
      console.log("result");
      console.log(result);

      if (result.status == 200) {
        this.list = result.data;
      }
    },
    async getList() {
      let page = 0;
      const result = await api.list(page);
      console.log(result.data);
      if (result.status == 200) {
        this.list = result.data.content;
        this.totalPages = result.data.totalPages;
      }
    },
    async handlePageChange(value) {
      let page = value - 1;
      const result = await api.list(page);
      if (result.status == 200) {
        this.list = result.data.content;
      }
    },
  },
};
</script>
