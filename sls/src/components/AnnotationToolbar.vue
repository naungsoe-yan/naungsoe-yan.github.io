<template>
  <cv-toolbar>
    <cv-icon-button :icon="iconTextScale" />
    <cv-icon-button :icon="iconTextKerning" />
    <cv-icon-button :icon="iconTextHighlight" />
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
  }
}
</script>

<style>
.bx--toolbar {
  background-color: #eee;
  z-index: 6000;
}
</style>
