<template>
  <div>
    <div class="grid">
      <!-- COLUMN 1 -->
      <div>
        <LottoBall :value="50" size="small" />
        <LottoBall :value="50" size="small" />
        <LottoBall :value="50" size="small" />
        <LottoBall :value="50" size="small" />
        <LottoBall :value="50" size="small" />
      </div>
      <!-- COLUMN 2 -->
      <div>
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
      </div>
      <!-- COLUMN 3 -->
      <div>
        <LottoBall :value="50" size="small" />
        <LottoBall :value="50" size="small" />
        <LottoBall :value="50" size="small" />
        <LottoBall :value="50" size="small" />
        <LottoBall :value="50" size="small" />
      </div>
      <!-- ROW -->
      <div class="nested" style="margin: 0 35px;">
        <LottoBall selected :value="50" size="small" />
        <LottoBall selected :value="50" size="small" />
        <LottoBall selected :value="50" size="small" />
        <LottoBall selected :value="50" size="small" />
        <LottoBall selected :value="50" size="small" />
        <div class="nested-big-ball">
            <LottoBall :value="50" size="large" />
        </div>
      </div>
      <!-- COLUMN 4 -->
      <div>
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
      </div>
      <!-- COLUMN 5 -->
      <div>
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
      </div>
      <!-- COLUMN 6 -->
      <div>
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
        <LottoBall faded :value="50" size="small" />
      </div>
    </div>

  </div>
</template>

<script>
import LottoBall from './LottoBall.vue';

export default {
  components: { LottoBall },
};
</script>

<style scoped>
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
