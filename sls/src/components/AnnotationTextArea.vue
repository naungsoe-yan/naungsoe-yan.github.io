<template>
  <cv-toolbar>
    <cv-text-area ref="text" class="textarea" placeholder="click to see browser behaviour on mobile device" />
    <div class="action">
      <cv-icon-button kind="ghost" :icon="iconClose" />
      <cv-icon-button :icon="iconSave" />
    </div>
  </cv-toolbar>
</template>

<script>
import Close20 from '@carbon/icons-vue/es/close/20';
import Save20 from '@carbon/icons-vue/es/save/20';

export default {
  name: 'AnnotationTextArea',
  computed: {
    iconClose() {
      return Close20;
    },
    iconSave() {
      return Save20;
    }
  }
}
</script>

<style scoped>
.bx--toolbar {
  flex-direction: column;
  background-color: #eee;
  z-index: 1000;
}
.textarea {
  width: 16rem;
}
</style>
