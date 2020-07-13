<template>
  <div class="drop-target">
    Id: {{ dropTarget.id }} Text: {{ targetText }} {{ new Date().getTime() }}
  </div>
</template>

<script>
import appContentStore from './AppContentStore';

export default {
  name: 'DropTarget',
  props: {
    dropTarget: { type: Object },
    option: { type: Object }
  },
  data() {
    return {
      store: appContentStore
    }
  },
  computed: {
    isActive() {
      return this.dropTarget.active
    },
    targetText() {
      console.log("targetText", this.dropTarget.id);
      return this.store.getDropTarget("uuid", this.dropTarget.id).text;
    }
  }
}
</script>
