<template>
  <el-container style="height: 100%;">
    <el-header>
      <main-header></main-header>
    </el-header>
    <el-main>
      <el-container style="height: 100%;">
        <el-aside></el-aside>
        <el-main></el-main>
      </el-container>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import MainHeader from "@/components/MainHeader.vue";

export default Vue.extend({
  name: "Main",
  components: {
    MainHeader
  }
});
</script>
