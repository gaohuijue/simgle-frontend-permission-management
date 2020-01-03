<template>
  <el-popconfirm
    title="注销?"
    confirm-button-type="danger"
    @onConfirm="onConfirm"
  >
    <slot slot="reference"></slot>
  </el-popconfirm>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import store from "@/store";
import ActionList from "@/store/ActionList";
import DataView from "@/api/DataView";

export default Vue.extend({
  name: "LogoutTool",
  methods: {
    onConfirm() {
      store
        .dispatch(ActionList.REQUEST_LOGOUT)
        .then((dataView: DataView<null>) => {
          if (dataView.success) {
            this.$router.push("/login");
          } else {
            this.$message.error(`登出失败(${dataView.message})`);
          }
        })
        .catch(error => {
          this.$message.error(`登出失败(${error})`);
        });
    }
  }
});
</script>

<style scoped></style>
