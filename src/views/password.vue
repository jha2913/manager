<template>
  <v-container>
    <div align="center">
      <br />
      <img
        margin="200"
        alt="멍무이"
        src="../assets/멍무이.jpg"
        width="200px"
        height="200px"
      />

      <v-col cols="12" sm="5">
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="비밀번호를 입력하세요"
          hint="관리자페이지"
          counter
          @click:append="show1 = !show1"
          @change="password1()"
        ></v-text-field>
      </v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show1: true,
      password: "",
      rules: true,
    };
  },

  methods: {
    password1() {
      this.$router.push("/manager");
    },
  },
};
</script>
