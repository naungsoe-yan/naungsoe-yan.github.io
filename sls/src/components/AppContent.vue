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
    <annotation-toolbar ref="toolbar" @toggle="handleToolbarToggle" />
    <annotation-text-area ref="textarea" @toggle="handleTextAreaToggle" />
    <annotation-list ref="list" />
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import PageToolbar from './PageToolbar.vue';
import AnnotationToolbar from './AnnotationToolbar.vue';
import AnnotationTextArea from './AnnotationTextArea.vue';
import AnnotationList from './AnnotationList.vue';

export default {
  name: 'AppContent',
  components: {
    PageToolbar,
    AnnotationToolbar,
    AnnotationTextArea,
    AnnotationList
  },
  data() {
    return {
      toolbarPopper: null,
      textareaPopper: null,
      listPopper: null
    }
  },
  methods: {
    handleToolbarToggle() {
      const toolbar = this.$refs.toolbar.$el;
      const textarea = this.$refs.textarea.$el;
      const list = this.$refs.list.$el;
      toolbar.style.display = 'none';
      list.style.display = 'none';
      textarea.style.display = '';

      const selection = document.getSelection();
      const reference = selection.anchorNode.parentElement;
      this.textareaPopper = createPopper(reference, textarea);

      const range = selection.getRangeAt(0);
      const newNode = document.createElement('span');
      newNode.setAttribute('style', 'background-color: yellow');
      range.surroundContents(newNode);
      selection.removeAllRanges();
    },
    handleTextAreaToggle() {
      const toolbar = this.$refs.toolbar.$el;
      const textarea = this.$refs.textarea.$el;
      const list = this.$refs.list.$el;
      toolbar.style.display = 'none';
      textarea.style.display = 'none';
      list.style.display = '';
    }
  },
  mounted() {
    const toolbar = this.$refs.toolbar.$el;
    const textarea = this.$refs.textarea.$el;
    const list = this.$refs.list.$el;
    toolbar.style.display = 'none';
    textarea.style.display = 'none';
    list.style.display = 'none';

    document.addEventListener('selectionchange', () => {
      if (this.toolbarPopper && this.toolbarPopper.destroy) {
        this.toolbarPopper.destroy();
        this.toolbarPopper = null;
      }

      if (this.listPopper && this.listPopper.destroy) {
        this.listPopper.destroy();
        this.listPopper = null;
      }
      
      const selection = document.getSelection();
      if (selection.isCollapsed) {
        const anchorNode = selection.anchorNode;
        if (anchorNode && anchorNode.parentElement
          && anchorNode.parentElement.hasAttribute('style')) {
          list.style.display = '';
        } else {
          list.style.display = 'none';
        }
        toolbar.style.display = 'none';
        return;
      }

      textarea.style.display = 'none';
      list.style.display = 'none';
      toolbar.style.display = '';

      if (this.textareaPopper && this.textareaPopper.destroy) {
        this.textareaPopper.destroy();
        this.textareaPopper = null;
      }

      const reference = selection.anchorNode.parentElement;
      this.toolbarPopper = createPopper(reference, toolbar);
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
