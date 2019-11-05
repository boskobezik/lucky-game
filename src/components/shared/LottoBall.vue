<template>
  <div>
    <div class="ball" :class="getClasses">
      <span :class="getTextClass">{{value || '[missing value]'}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    size: {
      type: String,
      required: true,
      validator: value => ['large', 'small'].includes(value),
    },
    faded: {
      type: Boolean,
      required: false,
    },
    selected: {
      type: Boolean,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getClasses() {
      let classes = '';
      classes += this.size === 'large' ? 'ball-large ' : 'ball-small ';
      classes += this.faded ? 'ball-faded ' : '';
      classes += this.selected ? 'ball-selected ' : '';

      return classes;
    },
    getTextClass() {
      let classes = '';
      classes += this.size === 'large' ? 'ball-text-large ' : '';
      classes += this.faded ? 'ball-text-small ' : '';
      classes += classes === '' ? 'ball-text-medium' : '';

      return classes;
    },
  },
};
</script>

<style scoped>
.ball{
  margin: 10px 0px;
  display: inline-block;
}
.ball-large {
  border-radius: 100%;
  border: 2px solid #2386fa;
  box-shadow: 0 0 0 1px #0d2547;
  background: #0d2547;
  color: white;
  height: 125px;
  width: 125px;
  z-index: 100;
}
.ball-small {
  border-radius: 100%;
  border: 2px solid #2386fa;
  box-shadow: 0 0 0 1px #0d2547;
  background: #0d2547;
  color: white;
  height: 40px;
  width: 40px;
  z-index: 100;
}
.ball-faded {
  border: 2px solid transparent;
  opacity: 60%;
}
.ball-selected{
  background: #123565;
}
.ball-text-small {
  line-height: 2.5rem;
  text-align: center;
  font-size: 0.875rem;
  width: 40px;
  display: inline-block;
  margin: 0 auto;
}
.ball-text-medium {
  line-height: 2.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  width: 40px;
  display: inline-block;
  margin: 0 auto;
}
.ball-text-large {
  line-height: 7.85rem;
  text-align: center;
  font-size: 3.75rem;
  width: 125px;
  display: inline-block;
  margin: 0 auto;
}
</style>
