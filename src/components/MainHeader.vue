<template>
  <div style="display: flex;flex-direction: row;">
    <div>
      <logout-tool>
        <el-button
          type="danger"
          icon="el-icon-switch-button"
          circle
        ></el-button>
      </logout-tool>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import LogoutTool from "@/components/LogoutTool.vue";
export default Vue.extend({
  name: "MainHeader",
  components: {
    LogoutTool
  }
});
</script>

<style scoped></style>
