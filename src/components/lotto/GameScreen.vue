/**
 * @fileoverview Game screen component. Most of the 'action' gets displayed here,
 * @author buddhacatmonk@gmail.com (Boško Bezik)
 */
<template>
  <div>
    <div class="grid">
      <!-- COLUMN 1 -->
      <div>
        <LottoBall v-for="(odds) in column1" :faded="odds.odds === odds.id"
                   :value="odds.odds" size="small" :key="odds.id"/>
      </div>
      <!-- COLUMN 2 -->
      <div>
        <LottoBall v-for="(odds) in column2" :faded="odds.odds === odds.id"
                   :value="odds.odds" size="small" :key="odds.id"/>
      </div>
      <!-- COLUMN 3 -->
      <div>
        <LottoBall v-for="(odds) in column3" :faded="odds.odds === odds.id"
                   :value="odds.odds" size="small" :key="odds.id"/>
      </div>
      <!-- ROW -->
      <div class="nested" style="margin: 0 35px;">
        <LottoBall v-for="(odds) in row" :faded="odds.odds === odds.id"
                   :value="odds.odds" size="small" :key="odds.id"/>
        <div class="nested-big-ball">
            <LottoBall :value="getBigBall" size="large" />
        </div>
      </div>
      <!-- COLUMN 4 -->
      <div>
        <LottoBall v-for="(odds) in column4" :faded="odds.odds === odds.id"
                   :value="odds.odds" size="small" :key="odds.id"/>
      </div>
      <!-- COLUMN 5 -->
      <div>
        <LottoBall v-for="(odds) in column5" :faded="odds.odds === odds.id"
                   :value="odds.odds" size="small" :key="odds.id"/>
      </div>
      <!-- COLUMN 6 -->
      <div>
        <LottoBall v-for="(odds) in column6" :faded="odds.odds === odds.id"
                   :value="odds.odds" size="small" :key="odds.id"/>
      </div>
    </div>

  </div>
</template>

<script>
import LottoBall from '../shared/LottoBall.vue';

export default {
  created() {
    // We first fill in the placeholder/odds values.
    // They will be replaced with new ball values
    // we receive from the socket connection
    const placeholders = this.$store.state.odds;
    this.column1 = placeholders.slice(0, 5);
    this.column2 = placeholders.slice(5, 10);
    this.column3 = placeholders.slice(10, 15);
    this.row = placeholders.slice(15, 20);
    this.column4 = placeholders.slice(20, 25);
    this.column5 = placeholders.slice(25, 30);
    this.column6 = placeholders.slice(30, 35);
    this.bigBall = placeholders[34].odds;
  },
  components: { LottoBall },
  data() {
    return {
      column1: [],
      column2: [],
      column3: [],
      row: [],
      column4: [],
      column5: [],
      column6: [],
      bigBall: 0,
    };
  },
  computed: {
    getBigBall() {
      const bigBall = this.$store.state.balls[this.$store.state.balls.length - 1]
        ? this.$store.state.balls[this.$store.state.balls.length - 1].ball
        : 0;

      return bigBall;
    },
  },
};
</script>

<style scoped>
/*
* I thought about doing this using Bootstrap grids (because compatibility),
* but decided it way overkill for this. So I went with CSS grids.
*/
.grid {
  display: grid;
  grid-template-columns: .5fr .5fr .5fr 1fr .5fr .5fr .5fr;
  max-width: 720px;
  margin: 4px auto 0 auto;
  padding: 10px 0 10px 0;
}
.nested{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    height: 25px;
}
.nested-big-ball{
    display: grid;
    grid-column-start: 2;
    grid-column-end: 5;
    margin: 0 auto;
    margin-top: -20px;
}
</style>
