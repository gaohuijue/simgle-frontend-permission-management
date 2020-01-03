<template>
  <div>
    <el-input v-model="username" placeholder="用户名" />
    <el-input v-model="password" placeholder="密码" show-password />
    <el-button type="primary" :loading="loginBtnLoading" @click="loginBtnClick"
      >登录
    </el-button>
  </div>
</template>

<script lang="ts">
import store from "../store/index";
import ActionList from "../store/ActionList";
import DataView from "../api/DataView";
import UserAuth from "../store/UserAuth";
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "LoginTool",
  data() {
    return {
      username: "",
      password: "",
      loginBtnLoading: false
    };
  },
  methods: {
    loginBtnClick() {
      this.loginBtnLoading = true;
      store
        .dispatch(ActionList.REQUEST_LOGIN, {
          username: this.username,
          password: this.password
        })
        .then((dataView: DataView<UserAuth>) => {
          if (dataView.success) {
            this.$message.success(`欢迎 ${(dataView.data as UserAuth).name}`);
            this.$router.push("/");
          } else {
            this.$message.error(`登录失败。(${dataView.message})`);
          }
        })
        .catch(error => {
          this.$message.error(`登录失败。(${error.toString()})`);
        })
        .finally(() => {
          this.loginBtnLoading = false;
        });
    }
  }
});
</script>

<style scoped></style>
