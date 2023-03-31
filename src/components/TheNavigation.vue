<template>
  <div id="nav">
    <AppLink id="logo" to="/">Travel</AppLink>
    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>
