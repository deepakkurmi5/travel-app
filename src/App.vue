<template>
  <TheNavigation />
  <div class="container">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </router-view>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  components: {
    TheNavigation
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.slider-active-form {
  transition-delay: 0.3;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
