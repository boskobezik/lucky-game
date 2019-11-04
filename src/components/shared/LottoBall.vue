<template>
  <div class="lb-background">
      <div class="ball ball-faded">
        <span class="ball-text-large">54</span>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ball {
  border-radius: 100%;
  border: 4px solid #2386FA;
  box-shadow: 0 0 0 2px #0d2547;
  background: #0d2547;
  color: white;
  height: 200px;
  width: 200px;
  margin: 2px;
  z-index: 100;
}
.ball-faded{
    border: 0px;
    opacity: 60%;
}
.ball-text-small {
  line-height: 6em;
  text-align: center;
  position: relative;
  font-size: 2em;
  margin: 0 0 0 41%;
}
.ball-text-medium {
  line-height: 3.1em;
  text-align: center;
  position: relative;
  font-size: 4em;
  margin: 0 0 0 33%;
}
.ball-text-large {
  line-height: 2.1em;
  text-align: center;
  position: relative;
  font-size: 6em;
  margin: 0 0 0 25%;
}
</style>
