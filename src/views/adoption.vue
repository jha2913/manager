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
                id: {{ list[0].id }}
                <p />
                이름: {{ list[0].name }}
                <p />
                성별: {{ list[0].gender }}
                <p />
                주소: {{ list[0].address }}
                <p />
                연락처: {{ list[0].mobile }}
                <p />
                e-mail: {{ list[0].email }}
                <p />
                직업: {{ list[0].job }}
                <p />
                notice.No: {{ list[0].noticeNo }}
                <p />
                가족동의: {{ list[0].familyAgreed }}
                <p />
                가족멤버: {{ list[0].familyMember }}
                <p />
                가구: {{ list[0].houseType }}
                <p />
                반려동물: {{ list[0].petAtHome }}
                <p />
                동물상세: {{ list[0].petDetails }}
                <p />
                requestNo: {{ list[0].requestNo }}
                <p />
                reason: {{ list[0].reason }}
                <p />
                status: {{ list[0].status }}
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
      alert: false,
      alert2: false,
      adoption: "",
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

    async getAdoptions() {
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
