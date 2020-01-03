<template>
  <el-container style="height: 100%">
    <el-header />
    <el-main
      style="display: flex;flex-direction: row;justify-content: center;align-items: center"
    >
      <login-tool
        style="width:200px;display: flex;flex-direction: column;align-items: center;"
      >
      </login-tool>
    </el-main>
    <el-footer />
  </el-container>
</template>
<script>
import LoginTool from "@/components/LoginTool.vue";
export default {
  name: "Login",
  components: {
    LoginTool
  }
};
</script>
