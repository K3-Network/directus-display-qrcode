<template>
  <div @mouseover="isOpen = true" @mouseleave="isOpen = false" class="qrcode">
    <v-menu
      class="popup"
      delay="200"
      show-arrow
      :disabled="value.length === 0"
      :close-on-content-click="false"
    >
      <template #activator="{ toggle }">
        <span class="toggle" @click.stop="toggle">
          <span class="label">
            <v-icon class="icon" name="qr_code_scanner" small /> {{ value }}
          </span>
        </span>
      </template>
      <div @click="overlay = true">
        <qrcode-vue
          class="qr"
          :value="value"
          background="rgba(0,0,0,0)"
          foreground="var(--qr-display-color)"
          render-as="svg"
          :size="120"
          level="H"
        />
        <div class="maximize">
          <v-icon name="launch" />
        </div>
      </div>
    </v-menu>
    <v-overlay class="overlay" @click.stop="overlay = false" :active="overlay">
      <v-card>
        <v-card-title>QR-Code</v-card-title>
        <v-card-subtitle>{{ value }}</v-card-subtitle>
        <qrcode-vue
          class="qr"
          id="qr-download"
          :value="value"
          background="rgba(0,0,0,0)"
          foreground="var(--qr-display-color)"
          render-as="svg"
          :size="360"
          level="H"
          ref="qrcode"
        />
        <v-card-actions>
          <v-button @click.stop="qrdl">Download</v-button>
          <v-button @click.stop="overlay = false">Close</v-button>
        </v-card-actions>
      </v-card>
    </v-overlay>
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
      overlay: false,
    };
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen;
    },
    qrdl: function () {
      console.log(this.$refs.qrcode.$el.outerHTML);
      const blob = new Blob([this.$refs.qrcode.$el.outerHTML], {
        type: "text/svg",
      });
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, "qr.svg");
      } else {
        const elem = window.document.createElement("a");
        elem.href = window.URL.createObjectURL(blob);
        elem.download = "qr.svg";
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
      }
    },
  },
};
</script>

<style>
body {
  --qr-display-color: rgb(0, 0, 0);
}
@media (prefers-color-scheme: dark) {
  body {
    --qr-display-color: rgb(255, 255, 255);
  }
}
</style>
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

.maximize {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--card-face-color);
  width: 24px;
  height: 24px;
  transition-timing-function: ease;
  transition-duration: var(--fast);
  transition-property: opacity;

  &:before,
  &:after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 0 24px 24px 0;
    border-color: transparent var(--card-face-color) transparent transparent;
  }
  &:before {
    transform: translateX(-100%);
  }
}
.v-menu-popper:hover .maximize {
  opacity: 1;
}
.v-overlay .overlay {
  cursor: auto;
}
</style>
