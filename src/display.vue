<template>
  <div @mouseover="isOpen = true" @mouseleave="isOpen = false" class="qrcode">
    <v-menu delay="200" show-arrow :disabled="value.length === 0">
      <template #activator="{ toggle }">
        <span class="toggle" @click.stop="toggle">
          <span class="label">
            <v-icon class="icon" name="qr_code_scanner" small /> {{ value }}
          </span>
        </span>
      </template>
      <qrcode-vue
        class="qr"
        :value="value"
        background="rgba(0,0,0,0)"
        render-as="svg"
        :size="120"
        level="H"
      />
    </v-menu>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  props: {
    value: String,
  },
  components: {
    QrcodeVue,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-icon {
  --v-icon-color: var(--foreground-subdued);
}
.toggle {
  position: relative;
  &::before {
    position: absolute;
    top: -6px;
    left: -6px;
    z-index: 1;
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    background-color: var(--background-normal);
    border-radius: var(--border-radius);
    opacity: 0;
    transition: opacity var(--fast) var(--transition);
    content: "";
  }
  .label {
    position: relative;
    z-index: 2;
  }
  &:not(.subdued):hover::before {
    opacity: 1;
  }
  &:not(.subdued):active::before {
    background-color: var(--background-normal-alt);
  }
}

.qr {
  padding: 0.2em;
  margin-top: 0.4em;
  margin-bottom: 0;
}
</style>
