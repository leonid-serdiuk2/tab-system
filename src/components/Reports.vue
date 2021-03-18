<template>
  <v-container>
    <h1>Reports</h1>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card>
          <v-tabs
              v-model="tab"
              background-color="primary"
              dark
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab
                v-for="tabObj in tabs"
                :key="tabObj.path"
                :href="'#' + tabObj.path"
            >
              {{ tabObj.name }}
              <v-btn
                  class="ml-3"
                  icon
                  v-show="tabObj.path === tab && tab !== defaultTab"
                  @click="removeTab(tabObj)"
              >
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="tabObj in tabs"
                :key="tabObj.path"
                :value="tabObj.path"
            >
              <TabContent :content="tabObj.data" :addNewTab="addNewTab"></TabContent>
<!--                  <component v-bind:is="tabObj.component" :addNewTab="addNewTab"></component>-->
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TabContent from "./TabContent";
// data here is only for demo it supposed to be requested from server
import offers from '../data/offers';
import days from '../data/days';
import campaigns from '../data/campaigns';
import affiliates from '../data/affiliates';

export default {
  name: 'Reports',

  components: {
    TabContent
  },
  data: () => ({
    length: 3,
    tabs: [{
      name: 'Offers',
      path: 'offers',
      data: offers
    }],
    types: {
      day: days,
      campaigns: campaigns,
      affiliates: affiliates,
    },
    defaultTab: 'offers', // main tab which can
    tab: 'offers',
  }),
  methods: {
    addNewTab(type, item) {
      if (!this.tabs.find((tab) => tab.path === `${type}-${item.name}`))
      {
        this.tabs.push({
          name: `${type} - ${item.name}`,
          path: `${type}-${item.name}`,
          data: this.types[type]
        });
      }
      this.tab = `${type}-${item.name}`;
    },
    removeTab(tabObj) {
      this.tabs = this.tabs.filter((tab) => {
        return tab.path !== tabObj.path;
      })
    }
  }
}
</script>
