<template>
  <div align="center">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="2">
          <side />
        </v-col>
        <v-col cols="12" md="9">
          <div>
            <img
              alt="페키니즈"
              src="../assets/페키니즈.jpg"
              width="500px"
              height="500px"
            />
            상세데이터 받아오기

            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="Adress"
                :rules="AdressRules"
                label="Adress"
                required
              ></v-text-field>

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
                  <div class="green--text"><strong>승인</strong>되었습니다</div>
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

              <br /><br />
              <div class="text-center">
                <v-pagination v-model="page" :length="3" circle></v-pagination>
              </div>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import side from "../components/side.vue";

export default {
  components: {
    side,
  },
  computed: {
    side() {
      return this.$store.state.side;
    },
  },

  data() {
    return {
      page: 1,
      alert: false,
      alert2: false,
    };
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
  },
};
</script>
