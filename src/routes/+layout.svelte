<script>
  import Header from "./Header.svelte";
  import "$lib/style/styles.css";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer></footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    align-items: center;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    align-items: center;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
</style>
