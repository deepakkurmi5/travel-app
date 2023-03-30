<template>
  <div>
    <h1>Not Found</h1>
    <p>Oops, we chould't find that page. Try going.</p>
    <GoBack />
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'

export default {
  components: {
    GoBack
  }
}
</script>
