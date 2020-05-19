<template>
  <cv-toolbar>
    <cv-icon-button class="bx--close" kind="ghost" :icon="iconClose" @click="handleToggle" />
    <div class="tile-group">
      <cv-tile>
        <cv-overflow-menu class="bx--action" flip-menu>
          <cv-overflow-menu-item primary-focus>Edit</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Delete</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Copy Note</cv-overflow-menu-item>
        </cv-overflow-menu>
        <h6>Calan Gray</h6>
        <p>
          <span style="background-color: yellow">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          Aenean commodo ligula eget dolor. Aenean massa.<br/>
          <a href="#">Read More</a>
        </p>
        <h6>Comments (20)</h6>
      </cv-tile>
      <cv-tile>
        <cv-overflow-menu class="bx--action" flip-menu>
          <cv-overflow-menu-item primary-focus>Edit</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Delete</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Copy Note</cv-overflow-menu-item>
        </cv-overflow-menu>
        <h6>Scarlett Millar</h6>
        <p>
          <span style="background-color: yellow">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          Aenean commodo ligula eget dolor. Aenean massa.<br/>
          <a href="#">Read More</a>
        </p>
        <h6>Comments (20)</h6>
      </cv-tile>
      <cv-tile>
        <cv-overflow-menu class="bx--action" flip-menu>
          <cv-overflow-menu-item primary-focus>Edit</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Delete</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Copy Note</cv-overflow-menu-item>
        </cv-overflow-menu>
        <h6>Bonnie Campbell</h6>
        <p>
          <span style="background-color: yellow">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          Aenean commodo ligula eget dolor. Aenean massa.<br/>
          <a href="#">Read More</a>
        </p>
        <h6>Comments (10)</h6>
      </cv-tile>
      <cv-tile>
        <cv-overflow-menu class="bx--action" flip-menu>
          <cv-overflow-menu-item primary-focus>Edit</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Delete</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Copy Note</cv-overflow-menu-item>
        </cv-overflow-menu>
        <h6>Tiegan McMillan</h6>
        <p>
          <span style="background-color: yellow">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          Aenean commodo ligula eget dolor. Aenean massa.<br/>
          <a href="#">Read More</a>
        </p>
        <h6>Comments (10)</h6>
      </cv-tile>
      <cv-tile>
        <cv-overflow-menu class="bx--action" flip-menu>
          <cv-overflow-menu-item primary-focus>Edit</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Delete</cv-overflow-menu-item>
          <cv-overflow-menu-item primary-focus>Copy Note</cv-overflow-menu-item>
        </cv-overflow-menu>
        <h6>Daniel Jones</h6>
        <p>
          <span style="background-color: yellow">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          Aenean commodo ligula eget dolor. Aenean massa.<br/>
          <a href="#">Read More</a>
        </p>
        <h6>Comments (10)</h6>
      </cv-tile>
    </div>
  </cv-toolbar>
</template>

<script>
import Close20 from '@carbon/icons-vue/es/close/20';

export default {
  name: 'AnnotationList',
  computed: {
    iconClose() {
      return Close20;
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
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.tile-group {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 3rem .5rem 1rem;
}

.cv-tile {
  margin: 0 .5rem;
}

.bx--tile {
  background-color: #fff;
  max-width: 16rem;
  min-width: 16rem;
  position: relative;
}

.bx--action {
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  top: 0;
  right: 0;
}

.bx--close {
  position: absolute;
  top: 0;
  right: 0;
}

p {
  margin: .5rem 0;
}

* {
  text-align: left;
}
</style>
