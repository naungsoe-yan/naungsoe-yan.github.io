<template>
  <div class="content">
    <drag-drop-question />
  </div>
</template>

<script>
import DragDropQuestion from './DragDropQuestion.vue';

export default {
  name: 'AppContent',
  components: {
    DragDropQuestion
  }
}
</script>

<style>
.content {
  padding: 1.5rem;
}
</style>
