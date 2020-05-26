<template>
  <div class="question">
    <h3 class="output-text" v-html="question.questionBody" />
    <cv-toolbar class="toolbar">
      <cv-icon-button :icon="iconZoonIn" @click="handleZoomIn" />
      <cv-icon-button :icon="iconZoonOut" @click="handleZoomOut" />
      <cv-icon-button :icon="iconZoonReset" @click="handleZoomReset" />
    </cv-toolbar>
    <div ref="plot" class="plot" />
    <div ref="options" class="options" />
  </div>
</template>

<script>
import * as d3 from 'd3';
import question from './question.json';
import ZoomIn20 from '@carbon/icons-vue/es/zoom--in/20';
import ZoomOut20 from '@carbon/icons-vue/es/zoom--out/20';
import ZoomReset20 from '@carbon/icons-vue/es/zoom--reset/20';

export default {
  name: 'DragDropQuestion',
  data() {
    return {
      svg: null
    }
  },
  computed: {
    iconZoonIn() {
      return ZoomIn20;
    },
    iconZoonOut() {
      return ZoomOut20;
    },
    iconZoonReset() {
      return ZoomReset20;
    },
    question() {
      return question;
    }
  },
  methods: {
    initPlot(width, height) {
      const plot = this.$refs.plot;
      const ratio = 320 / width; 
      const svg = d3.select(plot)
          .append('svg')
          .attr('width', width * ratio)
          .attr('height', height * ratio);

      const group = svg.append('g');
      const zoom = d3.zoom()
        .translateExtent([[0, 0], [width * ratio, height * ratio]])
        .scaleExtent([1, 2]);
      zoom.on('zoom', function () {
        group.attr('transform', d3.event.transform)
      });
      svg.call(zoom);

      group.append('svg:image')
        .attr('xlink:href', this.question.fileName)
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width * ratio)
        .attr('height', height * ratio);

      const optionModels = this.question.questionOptionModels;
      optionModels.forEach(optionModel => {
        const answer = JSON.parse(optionModel.answer);
        group.append('rect')
          .attr('x', answer.xCoordinate * ratio)
          .attr('y', answer.yCoordinate * ratio)
          .attr('width', answer.width * ratio)
          .attr('height', answer.height * ratio)
          .style("stroke", 'black')
          .style('fill', 'white')
          .on('click', () => {
            const selectedOption = options.querySelector('.selected');
            if (!selectedOption || !selectedOption.getAttribute) return;
            selectedOption.classList.remove('selected');

            const image = selectedOption.querySelector('img');
            const text = selectedOption.querySelector('div');
            if (image && image.getAttribute) {
              group.append('svg:image')
                .attr('xlink:href', image.getAttribute('src'))
                .attr('x', answer.xCoordinate * ratio)
                .attr('y', answer.yCoordinate * ratio)
                .attr('width', answer.width * ratio)
                .attr('height', answer.height * ratio);
            } else {
              group.append('text')
                .text(text.textContent)
                .attr('x', (answer.xCoordinate * ratio) + 10)
                .attr('y', (answer.yCoordinate * ratio) + ((answer.height * ratio) / 2))
                .style('fill', 'black');
            }
          });
      });

      this.svg = Object.assign(svg.node(), {
        zoomIn: () => svg.transition().call(zoom.scaleBy, 2),
        zoomOut: () => svg.transition().call(zoom.scaleBy, 0.5),
        zoomReset: () => svg.transition().duration(750)
          .call(zoom.transform, d3.zoomIdentity,d3.zoomTransform(svg.node())
          .invert([width / 2, height / 2])
        )
      });

      const options = this.$refs.options;
      optionModels.forEach(optionModel => {
        const answer = JSON.parse(optionModel.answer);
        const option = document.createElement('div');
        const answerWidth = answer.width * ratio;
        const answerHeight = answer.height * ratio;

        if (optionModel.fileName) {
          const image = document.createElement('img');
          image.setAttribute('src', optionModel.fileName);
          option.append(image);
        } else {
          const text = document.createElement('div');
          text.textContent = answer.textValue;
          option.append(text);
        }
        const width = `width: ${answerWidth}px;`;
        const height = `height: ${answerHeight}px;`;
        option.setAttribute('style', width + height);
        option.classList.add('option');
        options.appendChild(option);

        option.addEventListener('click', () => {
          const selectedOptions = options.querySelectorAll('.selected');
          selectedOptions.forEach(selectedOption => {
            selectedOption.classList.remove("selected");
          });
          option.classList.toggle("selected");
        });
      });
    },
    handleZoomIn() {
      this.svg.zoomIn();
    },
    handleZoomOut() {
      this.svg.zoomOut();
    },
    handleZoomReset() {
      this.svg.zoomReset();
    }
  },
  mounted() {
    const img = new Image();
    img.addEventListener('load', () => { 
      this.initPlot(img.width, img.height);
    }, false);
    img.src = this.question.fileName;
  }
}
</script>

<style>
.question {
  max-width: 360px;
  margin: 1rem auto;
}

.plot {
  background-color: #eee;
  overflow: hidden;
  max-width: 360px;
  margin: 0 auto;
}

.options {
  display: flex;
  flex-direction:row;
  margin: 1rem auto;
}

.options .option {
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
}

.options .option.selected {
  border: 1px solid blue;
}

.options .option ~ .option {
  margin-left: .5rem;
}

.options .option img {
  max-width: 100%;
}

.options .option div {
  text-align: center;
}
</style>
