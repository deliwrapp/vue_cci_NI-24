<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'

  export default {
    name: "App",
    components: {
      HelloWorld,
      MyComponent
    }
  }

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Que veux tu savoir jeune humain ?" required />
    </div>
  </header>

  <main>
    <my-component
      :msg="2"
    ></my-component>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
