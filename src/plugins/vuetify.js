import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.orange.accent4, // #FF6D00
        secondary: colors.orange, // #FF9800
        accent: colors.orange.lighten1, // #FFA726
      },
    },
  },
});