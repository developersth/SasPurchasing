<template lant="html">
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
    v-if="isAuthenticated"
  >
    <v-list class="font-display">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
//import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-file-document',
          title: 'PO Management',
          to: '/PoManagement',
        },
        {
          icon: 'mdi-bank-outline',
          title: 'Payment',
          to: '/payment',
        },
        {
          icon: 'mdi-account-tie',
          title: 'ผู้ขอซื้อ',
          to: '/buyer',
        },
        {
          icon: 'mdi-car',
          title: 'Supplier',
          to: '/supplier',
        },
        {
          icon: 'mdi-credit-card-outline',
          title: 'Payment Term',
          to: '/paymentterm',
        },
        {
          icon: 'mdi-truck-delivery',
          title: 'Delivery Term',
          to: '/deliveryterm',
        },
           {
          icon: 'mdi-truck-delivery-outline',
          title: 'Fight Forwarder',
          to: '/feight',
        },
        {
          icon: 'mdi-account-supervisor',
          title: 'ผู้ใช้งาน',
          to: '/users',
        },
      ],
      title: 'SasTech International Purchasing',
    }
  },
  computed: {
    isAuthenticated: {
      get() {
        return this.$store.getters.isAuthenticated
      },
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(newVal) {
        this.$store.commit('set_drawer', newVal)
      },
    },
    miniVariant: {
      get() {
        return this.$store.state.miniVariant
      },
      set(newVal) {
        this.$store.commit('set_miniVariant', newVal)
      },
    },
    clipped: {
      get() {
        return this.$store.state.clipped
      },
      set(newVal) {
        this.$store.commit('set_clipped', newVal)
      },
    },
  },
  methods: {},
}
</script>
