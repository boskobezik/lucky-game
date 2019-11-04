<template>
<div>
  <h1>AM I WORKING?</h1>
<button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <h1>
          <router-link to="/test">TEST</router-link>
          </h1>
</div>
</template>

<script>
export default {
  name: 'HomePage',
  component: {
  },
};
</script>
