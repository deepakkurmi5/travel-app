<template>
  <TheNavigation />
  <div class="container">
    <router-view v-slot="{ Component }" class="view left-sidebar" name="LeftSidebar">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </router-view>
    <router-view v-slot="{ Component }" class="view main-view">
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
.container {
  display: flex;
}

.left-sidebar {
  width: 28%;
}

.main-view {
  width: 100%;
}
</style>
