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
                alt="시베리아허스키"
                src="../assets/시베리아허스키.jpg"
                width="500px"
                height="500px"
              />

              <v-form ref="form">
                id: {{ list.id }}
                <p />
                날짜: {{ list.date }}
                <p />
                이름: {{ list.name }}
                <p />
                지역: {{ list.area }}
                <p />
                성별: {{ list.gender }}
                <p />
                색깔: {{ list.color }}
                <p />
                content: {{ list.content }}
                <p />
                list_animal_file: {{ list.listAnimalFile }}
                <p />
                number: {{ list.number }}
                <p />
                state: {{ list.state }}
                <p />
                상태: {{ list.status }}
                <p />
                type: {{ list.type }}
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

                  <v-btn color="green mr-5" dark @click="patchFinds('승인')">
                    승인
                  </v-btn>
                  <v-btn color="red" dark @click="patchFinds('거절')">
                    거절
                  </v-btn>
                </div>

                <br />
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="totalPages"
                  :total-visible="10"
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
import api from "@/api/find";

export default {
  components: {
    side,
  },

  data() {
    return {
      page: 1,
      totalPages: 3,
      alert: false,
      alert2: false,
      find: "",
      list: [],
      id: 1,
    };
  },

  mounted() {
    // 목록 조회 함수
    this.getList();
  },

  methods: {
    async patchFinds(status) {
      console.log(status);
      if (status == "승인") {
        this.list.status = "승인";
      } else if (status != "승인") {
        this.list.status = "거절";
      }

      const result = await api.patch(this.list.id, this.list);
      console.log("patch");
      console.log(result);

      if (result.status == 200) {
        this.patch = result.data;
      }
    },

    async getList() {
      let page = 0;
      const result = await api.list(page);
      console.log(result.data);
      if (result.status == 200) {
        // this.list = result.data.content;
        this.totalPages = result.data.totalPages;
      }
      this.get();
    },

    async get() {
      const result = await api.get(this.id);
      console.log(result.data);
      if (result.status == 200) {
        // this.list = result.data.content;
        this.list = result.data;
      }
    },

    async handlePageChange(value) {
      // let page = value - 1;
      const result = await api.get(value);
      if (result.status == 200) {
        this.list = result.data;
      }
    },
  },
};
</script>
