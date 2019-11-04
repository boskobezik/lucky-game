<template>
  <div class="lb-background" style="margin: 4px 0 0 0;
                                    padding: 20px 0 40px 0;">
    <div class="circle-wrap">
      <div class="circle">
        <div class="mask full">
          <div class="fill"></div>
        </div>

        <div class="mask half">
          <div class="fill"></div>
        </div>

        <div class="inside-circle">0:20</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownPage',
};
</script>

<style scoped>
.background{
  background: #286ED0;
}
.circle-wrap {
  margin: 0px auto;
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 50%;
}
.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}
.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}
.circle-wrap .circle .mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #6899DE;
}
.circle-wrap .circle .mask.full,
.circle-wrap .circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(0deg);
}

@keyframes fill {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.circle-wrap .inside-circle {
  width: 142px;
  height: 142px;
  border-radius: 50%;
  background: #286ED0;
  line-height: 136px;
  text-align: center;
  margin-top: 4px;
  margin-left: 4px;
  position: absolute;
  z-index: 100;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 2.7em;
  color: white;
}
</style>
