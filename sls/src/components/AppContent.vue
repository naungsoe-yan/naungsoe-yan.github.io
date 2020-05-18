<template>
  <div ref="content" class="content">
    <page-toolbar />
    <section>
      <h2>Text Input</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
      <cv-text-input placeholder="click to see browser behaviour on mobile device" />
    </section>
    <section>
      <h2>Text Area</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
      <cv-text-area placeholder="click to see browser behaviour on mobile device" />
    </section>
    <section>
      <h2>Typography</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
    </section>
    <annotation-toolbar ref="toolbar" />
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import PageToolbar from './PageToolbar.vue';
import AnnotationToolbar from './AnnotationToolbar.vue';

export default {
  name: 'AppContent',
  components: {
    PageToolbar,
    AnnotationToolbar
  },
  data() {
    return {
      popper: null
    }
  },
  mounted() {
    const toolbar = this.$refs.toolbar.$el;
    toolbar.style.display = 'none';
    document.addEventListener('selectionchange', () => {
      if (this.popper && this.popper.destroy) {
        this.popper.destroy();
        this.popper = null;
      }
      
      const selection = document.getSelection();
      if (selection.isCollapsed) {
        toolbar.style.display = 'none';
        return;
      } else {
        toolbar.style.display = '';
      }

      const reference = selection.anchorNode.parentElement;
      this.popper = createPopper(reference, toolbar);
    });
  }
}
</script>

<style>
.content {
  padding: 1.5rem;
}

.content section ~ section {
  margin: 2rem 0;
}
</style>
