<template>
  <div class="content">
    <drop-target 
      v-for="dropTarget in dropTargets" 
      :key="dropTarget.id"
      :dropTarget="dropTarget"
    />
    <cv-button @click="handleUpdate">
      Update Store
    </cv-button>
    <br/><br/><br/><br/><br/>
    <editor
      :inline=true
      :init="editorConfig"
      initial-value="This is editor"
      :tinymce-script-src="editorScriptSrc"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import Editor from '@tinymce/tinymce-vue';
import appContentStore from './AppContentStore';
import DropTarget from './DropTarget';
import FileUploader from './FileUploader';

export default {
  name: 'AppContent',
  components: { DropTarget, Editor },
  data() {
    return {
      store: appContentStore
    }
  },
  computed: {
    dropTargets() {
      return this.store.getDropTargets("uuid");
    },
    editorScriptSrc() {
      return "/tinymce/tinymce.js";
    },
    editorConfig() {
      const parent = this;
      return {
        apiKey: "no-api-key",
        plugins: ["autolink noneditable paste textcolor advlist lists table link"],
        toolbar: "undo redo | bold italic underline strikethrough | forecolor backcolor | fontselect formatselect | numlist bullist | table link drawing | pastetext",
        toolbar_mode: "wrap",
        menubar: false,
        init_instance_callback: (editor) => {
          editor.off("tap");
        },
        setup: (editor) => {
          const openDialog = function() {
            return editor.windowManager.open({
              title: "Drawing",
              body: {
                type: "panel",
                items: []
              },
              buttons: [
                {
                  type: "cancel",
                  text: "Cancel"
                },
                {
                  type: "submit",
                  text: "Save",
                  primary: true
                }
              ],
              onSubmit: function(dialogApi) {
                const imgSrc = "/favicon.ico";
                const content = `<div class="mceNonEditable"><img src="${imgSrc}"/></div>`;
                editor.insertContent(content);

                const element = document.querySelector(".mceNonEditable img");
                const Uploader = Vue.extend(FileUploader);
                const uploader = new Uploader({
                  parent: parent,
                  propsData: {
                    fileName: imgSrc
                  }
                });
                uploader.$mount(element);
                dialogApi.close();
              }
            });
          };

          editor.ui.registry.addButton('drawing', {
            tooltip: 'Drawing',
            icon: 'color-picker',
            extended_valid_elements: 'input[type|class]',
            onAction: function() {
              openDialog();
            }
          });
        }
      }
    }
  },
  methods: {
    handleUpdate() {
      this.store.updateDropTarget("uuid", 1);
    }
  },
  mounted() {
    const dropTargets = [{ id: 1, text: "STARTED" }, { id: 2, text: "STARTED" }];
    this.store.addDropTargets("uuid", dropTargets);

    document.addEventListener("touchend", function() {
      //e.preventDefault();
      console.log("document touchend");
    }, true);

    document.addEventListener("click", function() {
      console.log("document clicked");
    }, true);
  }
}
</script>

<style>
.content {
  padding: 1.5rem;
}

.mce-content-body {
  border: 1px solid #ddd;
  min-height: 4rem;
  max-height: 16rem;
  outline: none;
}
</style>
