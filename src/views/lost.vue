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
              <v-img
                src="http://image.dongascience.com/Photo/2019/09/d2468576cecf1313437de5a883bfa2ed.jpg"
                width="500px"
                height="500px"
              >
              </v-img>

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
                number: {{ list.number }}
                <p />
                state: {{ list.state }}
                <p />
                type: {{ list.type }}
                <p />
                status: {{ list.status }}
                <p />
                <br />
                <div>
                  <v-btn color="green mr-5" dark @click="patchLosts('승인')">
                    승인
                  </v-btn>
                  <v-btn color="red" dark @click="patchLosts('거절')">
                    거절
                  </v-btn>

                  <v-snackbar v-model="snackbar" :timeout="timeout">
                    {{ list.status }} 되었습니다.
                    <template v-slot:action="{ attrs }">
                      <v-btn
                        color="purple accent-1"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                      >
                        Close
                      </v-btn>
                    </template>
                  </v-snackbar>
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
import api from "@/api/lost";
export default {
  components: {
    side,
  },
  data() {
    return {
      page: 1,
      totalPages: 5,
      lost: "",
      list: [],
      picture: "",
      files: [],
      id: 1,
      snackbar: false,
      timeout: 1000,
    };
  },
  mounted() {
    // 목록 조회 함수
    this.getList();
  },
  methods: {
    async patchLosts(status) {
      console.log("status----" + status);
      if (status == "승인") {
        this.list.status = "승인";
        this.snackbar = true;
      } else if (status != "승인") {
        this.list.status = "거절";
        this.snackbar = true;
      }
      const result = await api.patch(this.list.id, this.list);
      console.log("patch" + result);
      console.log(result);
      if (result.status == 200) {
        this.patch = result.data;
      }
    },
    async getList() {
      let page = 0;
      const result = await api.lost(page);
      const result2 = await api.picture(page);
      console.log("000");
      console.log(result2.data);
      if (result.status == 200) {
        // this.list = result.data.content;
        this.picture = result2.data.content[0];
        this.totalPages = result.data.totalPages;
      }
      this.get();
    },
    async get() {
      const result = await api.get(this.id);
      if (result.status == 200) {
        // this.list = result.data.content;
        this.list = result.data;
        console.log("-----");
        console.log(this.list);
        this.files = result.data.files[0];
        console.log("사진");
        console.log(this.files);
      }
    },
    async handlePageChange(value) {
      const result = await api.lost(value - 1);
      if (result.status == 200) {
        this.list = result.data.content[0];
        console.log(result.data.content[0].files[0].dataUrl);
      }
    },
  },
};
</script>