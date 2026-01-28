import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#FFFFFF", //white
          secondary: "#7E7F83", //grey
          accent: "#ED91FF", //purple
          error: "#FCA39F", //red
          info: "#DAF17D", //green
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      dark: {
        colors: {
          primary: "#0D0D0D", //black
          secondary: "#7E7F83", //grey
          accent: "#ED91FF", //purple
          error: "#FCA39F", //red
          info: "#DAF17D", //green
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
});
