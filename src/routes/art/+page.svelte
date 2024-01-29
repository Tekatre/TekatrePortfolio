<script lang="ts">
  const imageModules = import.meta.glob("$lib/images/artDisplay/*.(png|gif)");
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body>
  <h1>ART</h1>
  <section class="images-mosaic">
    {#each Object.keys(imageModules) as image}
      <div class="image-container">
        <img class="mosaic-piece" src={image} alt="IMG1" />
      </div>
    {/each}
  </section>
</body>
