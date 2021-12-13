<template>
  <div class="layout">
    <div v-if="header || $slots.header" class="layout__header">
      <slot name="header">
        <Logo />
      </slot>
    </div>
    <div class="layout__content">
      <slot name="default"> content </slot>
    </div>
    <div v-if="$slots.footer" class="layout__footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo/index.vue";

export default defineComponent({
  components: {
    Logo,
  },
  props: {
    header: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: azure;
  .layout__header {
  }
  .layout__content {
    overflow-y: auto;
    flex: 1;
    padding: 0 20px;
  }
  .layout__footer {
  }
}
</style>
