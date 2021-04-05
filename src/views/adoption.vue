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
                alt="요크셔테리어"
                src="../assets/요크셔테리어.jpg"
                width="500px"
                height="500px"
              />

              <v-form ref="form">
                id: {{ list.id }}
                <p />
                이름: {{ list.name }}
                <p />
                성별: {{ list.gender }}
                <p />
                주소: {{ list.address }}
                <p />
                연락처: {{ list.mobile }}
                <p />
                e-mail: {{ list.email }}
                <p />
                직업: {{ list.job }}
                <p />
                notice.No: {{ list.noticeNo }}
                <p />
                가족동의: {{ list.familyAgreed }}
                <p />
                가족멤버: {{ list.familyMember }}
                <p />
                가구: {{ list.houseType }}
                <p />
                반려동물: {{ list.petAtHome }}
                <p />
                동물상세: {{ list.petDetails }}
                <p />
                requestNo: {{ list.requestNo }}
                <p />
                reason: {{ list.reason }}
                <p />
                status: {{ list.status }}
                <p />
                <br />
                <div>
                  <v-btn
                    color="green mr-5"
                    dark
                    @click="patchAdoptions('승인')"
                  >
                    승인
                  </v-btn>
                  <v-btn color="red" dark @click="patchAdoptions('거절')">
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
import api from "@/api/adoption";

export default {
  components: {
    side,
  },

  data() {
    return {
      page: 1,
      totalPages: 3,
      adoption: "",
      list: [],
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
    async patchAdoptions(status) {
      console.log(status);
      if (status == "승인") {
        this.list.status = "승인";
        this.snackbar = true;
      } else if (status != "승인") {
        this.list.status = "거절";
        this.snackbar = true;
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
