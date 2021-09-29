import DisplayComponent from "./display.vue";

export default {
  id: "qrcode",
  name: "QR-Code",
  description:
    "A Display that shows a QR-Code representation of a String when hovering the String.",
  icon: "qr_code_2",
  handler: DisplayComponent,
  types: ["string"],
};
