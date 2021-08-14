<template>
  <div class="qrcode">
    {{ value }}
    <div class="overlay">
      <qrcode-vue class="qr" :value="value" :size="100" level="H" />
    </div>
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
};
</script>

<style scoped>
.qrcode:hover .overlay,
.overlay:hover {
  display: block;
}
.overlay {
  margin-top: 0.5rem;
  position: absolute;
  display: none;
}
</style>
