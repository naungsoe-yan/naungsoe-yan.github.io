<template>
  <cv-toolbar>
    <cv-icon-button :icon="iconTextScale" @click="handleToggle" />
    <cv-icon-button :icon="iconTextKerning" @click="handleToggle" />
    <cv-icon-button :icon="iconTextHighlight" @click="handleToggle" />
  </cv-toolbar>
</template>

<script>
import TextScale20 from '@carbon/icons-vue/es/text--scale/20';
import TextKerning20 from '@carbon/icons-vue/es/text--kerning/20';
import TextHighlight20 from '@carbon/icons-vue/es/text--highlight/20';

export default {
  name: 'AnnotationToolbar',
  computed: {
    iconTextScale() {
      return TextScale20;
    },
    iconTextKerning() {
      return TextKerning20;
    },
    iconTextHighlight() {
      return TextHighlight20;
    }
  },
  methods: {
    handleToggle() {
      this.$emit("toggle");
    }
  }
}
</script>

<style scoped>
.bx--toolbar {
  background-color: #eee;
  z-index: 1000;
}
</style>
