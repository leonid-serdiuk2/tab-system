<template>
  <v-app id="inspire">
    <v-navigation-drawer
        app
        class="pt-4"
        color="grey lighten-3"
        expand-on-hover
    >
      <v-list>
        <v-list-item class="px-2" to="/">
          <v-list-item-avatar>
            <v-img src="https://ad-center.com/images/ad-center-logo-white-bg.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>BackOffice</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
          nav
          dense
      >
        <v-list-item link to="#">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Overview</v-list-item-title>
        </v-list-item>
        <v-list-item link to="#">
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Reports</v-list-item-title>
        </v-list-item>
        <v-list-item link to="#">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Affiliates</v-list-item-title>
        </v-list-item>
        <v-list-item link to="#">
          <v-list-item-icon>
            <v-icon>mdi-offer</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Offers</v-list-item-title>
        </v-list-item>
        <v-list-item link to="#">
          <v-list-item-icon>
            <v-icon>mdi-road-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Campaigns</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Reports/>
    </v-main>
  </v-app>
</template>

<script>
import Reports from './components/Reports';

export default {
  name: 'App',

  components: {
    Reports,
  },

  data: () => ({
    //
  }),
};
</script>
