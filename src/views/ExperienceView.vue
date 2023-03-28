<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.slug" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<script>
import sourceData from '@/data.json'

export default {
  props: {
    id: { type: Number, required: true },
    experienceSlug: { type: String, required: true }
  },
  computed: {
    destination() {
      return sourceData.destinations.find((des) => des.id === this.id)
    },
    experience() {
      return this.destination.experiences.find((exp) => exp.slug === this.experienceSlug)
    }
  }
}
</script>
