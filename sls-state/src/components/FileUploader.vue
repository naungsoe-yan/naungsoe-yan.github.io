<template>
  <div class="sls-inline-attachment">
    <figure>
      <button type="button" class="button">
        Click here!
      </button>
      <vue-plyr>
        <audio controls>
          <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
          Your browser does not support the audio element.
        </audio>
      </vue-plyr>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    fileName: { type: String, default: "" }
  },
  data() {
    return {
      isLoading: false,
      error: false
    };
  },
  mounted() {
    const element = document.querySelector("figure .button");
    element.addEventListener("touchend", function() {
      console.log("button touched");
    }, false);
    element.addEventListener("click", function() {
      console.log("button clicked");
    }, false);
  }
};
</script>
