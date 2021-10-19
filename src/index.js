import DisplayComponent from "./display.vue";

export default {
  id: "qrcode",
  name: "QR-Code",
  description:
    "A Display that shows a QR-Code representation of a String when hovering the String.",
  icon: "qr_code_2",
  handler: DisplayComponent,
  types: ["string"],
  options: [
    {
      field: "showIcon",
      name: "Show QR-Code Icon",
      type: "boolean",
      meta: {
        width: "half",
        interface: "boolean",
      },
      schema: {
        default_value: true,
      },
    },
    {
      field: "iconSize",
      name: "Icons Size",
      meta: {
        width: "half",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Big", value: "big" },
            { text: "Medium", value: "medium" },
            { text: "Small", value: "small" },
          ],
        },
      },
      schema: {
        default_value: "small",
      },
    },
    {
      field: "showModal",
      name: "Show bigger QR-Code on Popup click",
      type: "boolean",
      meta: {
        width: "half",
        interface: "boolean",
      },
      schema: {
        default_value: true,
      },
    },
  ],
};
