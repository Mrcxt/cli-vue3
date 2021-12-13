<template>
  <Layout class="main" header>
    <div class="content">
      <div v-for="item in 100" :key="item">
        {{ item }}
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Layout/index.vue";

export default defineComponent({
  components: {
    Layout,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
