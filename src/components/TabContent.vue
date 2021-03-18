<template>
  <v-card>
    <!--   START toolbar   -->
    <v-card elevation="1" tile >
      <v-card-text class="py-1">
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field hide-details label="Search" placeholder="Type something..."></v-text-field>
          </v-col>
          <v-spacer/>
          <v-col cols="12" sm="6" md="3">
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="dates"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="dateRangeText"
                    label="Date Range"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="dates" no-title scrollable range>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="auto" class="align-self-center">
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-checkbox v-for="header in headers"
                                  :key="header.value"
                                  :label="header.text"
                                  :value="header.value"
                                  v-model="selectedHeaders"
                                  hide-details
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <!--   END toolbar   -->
    <!--   START data   -->
    <v-data-table
        :dense="dance"
        class="elevation-1"
        :headers="dynamicHeaders"
        :items="data"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
    >
      <template v-slot:item.drilldown="{ item }">
        <a href="#" @click="addNewTab('day', item)">Day</a> |
        <a href="#" @click="addNewTab('campaigns', item)">Campaigns</a> |
        <a href="#" @click="addNewTab('affiliates', item)">Affiliates</a>
      </template>
    </v-data-table>
    <!--   END data   -->
    <!--   START bottom bar   -->
    <v-card-text>
      <v-row>
        <v-col cols="12" md="auto">
          <v-row class="align-center justify-md-start">
            <v-col>
              <v-pagination
                  circle
                  v-model="page"
                  :length="pageCount"
              ></v-pagination>
            </v-col>
            <v-col>
              <v-combobox class="pt-0 mt-0" v-model="itemsPerPage" hide-details :items="[5,10,50]"></v-combobox>
            </v-col>
            <v-col>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on" @click="repopulateData">
                    <v-icon>mdi-cached</v-icon>
                  </v-btn>
                </template>
                <span>Refresh data</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="auto" class="text-center text-sm-right">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon :disabled="!dance" @click="dance = false" v-bind="attrs" v-on="on">
                <v-icon>mdi-format-annotation-plus</v-icon>
              </v-btn>
            </template>
            <span>Make table bigger</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon :disabled="dance" @click="dance = true" v-bind="attrs" v-on="on">
                <v-icon small>mdi-format-annotation-minus</v-icon>
              </v-btn>
            </template>
            <span>Make table smaller</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-card-text>
    <!--   END bottom bar   -->
  </v-card>
</template>

<script>

export default {
  name: "TabContent",
  props: ['addNewTab', 'content'],
  mounted() {
    console.log('in offers');
    this.selectedHeaders = this.headers.map((header) => header.value);
  },
  data () {
    return {
      selectedHeaders: [],
      dance: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dates: ['2021-03-10', '2021-03-18'],
      menu: false,
      headers: this.content.headers,
      data: this.content.body,
    }
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
    dynamicHeaders () {
      return this.headers.filter((header) => this.selectedHeaders.indexOf(header.value) >= 0);
    }
  },
  methods: {
    repopulateData() {
      console.log('make request to backend');
    }
  },
}
</script>

<style scoped>
</style>