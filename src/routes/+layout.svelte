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
