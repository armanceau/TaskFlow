<!-- src/components/ProjectItem.vue -->
<template>
  <div>
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['projet']
};
</script>
