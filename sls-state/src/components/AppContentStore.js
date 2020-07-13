import Vue from 'vue';

export default {
  debug: true,
  state: {
    dropTargetsByQuestionUuid: {}
  },
  addDropTargets(questionUuid, dropTargets) {
    Vue.set(this.state.dropTargetsByQuestionUuid, questionUuid, dropTargets);
  },
  getDropTargets(questionUuid) {
    const dropTargets = this.state.dropTargetsByQuestionUuid[questionUuid];
    return (dropTargets === undefined) ? [] : dropTargets;
  },
  getDropTarget(questionUuid, dropTargetId) {
    const dropTargets = this.state.dropTargetsByQuestionUuid[questionUuid];
    return dropTargets.find(dropTarget => dropTarget.id === dropTargetId);
  },
  updateDropTarget(questionUuid, dropTargetId) {
    const dropTargets = this.state.dropTargetsByQuestionUuid[questionUuid];
    const dropTarget = dropTargets.find(dropTarget => dropTarget.id === dropTargetId);
    //const dropTargetIndex = dropTargets.findIndex(dropTarget => dropTarget.id === dropTargetId);
    dropTarget.text = "ACTIVE";
    //Vue.set(dropTargets, dropTargetIndex, dropTarget);
  }
};