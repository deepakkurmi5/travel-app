<template>
  <div class="home">
    <h1>All Destinations</h1>
    <button @click="AddDynamicRoute">Dynamic Route</button>
    <router-link to="/dynamic">Dynamic Route Link</router-link>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  },
  methods: {
    AddDynamicRoute() {
      this.$router.addRoute({
        path: '/dynamic',
        name: 'dynamic',
        component: () => import('@/views/LoginView.vue')
      })
    }
  }
}
</script>
