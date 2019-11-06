/**
 * @fileoverview Game footer component. Gets rendered only on the GameScreen component.
 * Displays 'over under' which represents the sum of first five drawn balls and
 * in the bottom right it tracks the number of even/odd drawn ball numbers.
 * @author buddhacatmonk@gmail.com (Boško Bezik)
 */
<template>
  <div>
    <div class="grid">
      <div class=nested-1>
        <span>
          OVER
          <br />
        </span>
        <span>UNDER</span>
      </div>
      <div class="nested-2">
        {{getOverUnder}}
        </div>
      <div class="nested-3">
          <div class="nested-3-child">
              <span style="width: 25px;">Even</span>
              <progress :value="getEvenNumbersCount" max="35"></progress>
              <span>{{getEvenNumbersCount}}</span>
          </div>
          <div class="nested-3-child">
              <span style="width: 25px;">Odd</span>
              <progress :value="getOddNumbersCount" max="35"></progress>
              <span>{{getOddNumbersCount}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getOverUnder() {
      return this.$store.state.overUnder;
    },
    getEvenNumbersCount() {
      return this.$store.state.evenNumbersCount;
    },
    getOddNumbersCount() {
      return this.$store.state.oddNumbersCount;
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: .075fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 5px 10px 5px 10px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  max-width: 720px;
  margin: 0 auto;
}
.nested-1 {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.nested-2 {
  display: grid;
  grid-row-start: 0;
  grid-row-end: 0;
  margin: 0 0 0 13px;
  font-size: 18px;
  font-weight: 500;
  line-height: 31px;
}
.nested-3 {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-column-start: 4;
}
.nested-3-child{
    display:grid;
    grid-template-columns: .1fr .2fr .2fr;
    grid-column-gap: 15px;
}
progress{
appearance: none;
    border: none;
    height: 4px;
    margin: 4.2px 0 4.2px 0;
}
progress[value]::-webkit-progress-bar {
    background-color: #344458;
}
progress[value]::-moz-progress-bar {
    background-color: #344458;
}
progress[value]::-webkit-progress-value {
    background-color: white;
}
</style>
