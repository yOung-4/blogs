<script>

</script>

<template>
  <router-view id="app" />
</template>

<style>
body {
  width: 100vw;
  height: 100vh;
  background-image: url(@/assets/bg.jpg);
  background-color: lightgray;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
#app{
  display: flex;
  padding: 3.4375rem 6.25rem;
  flex-direction: column;
  align-items: center;
  gap: 2.8125rem;
}
</style>
