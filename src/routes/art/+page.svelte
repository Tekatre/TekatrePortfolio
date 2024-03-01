<script lang="ts">
  // const imageModules = import.meta.glob("$lib/images/artDisplay/*.(png|gif)");
  // console.log("imageModules", imageModules);

  export const get = async () => {
    const allimgsf = import.meta.glob("$lib/images/artDisplay/*.(png|gif)");
    const iterableImages = Object.entries(allimgsf);

    const allimgs = await Promise.all(
      iterableImages.map(async ([path, resolver]) => {
        // gets the resolved asset path
        const imgPath = await (
          resolver as () => Promise<{ default: string }>
        )();

        return {
          path: imgPath,
          name: imgPath.default.slice(0, -4).split("/").at(-1),
        };
      })
    );

    return allimgs;
  };
</script>

<svelte:head>
  <title>Art</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <h1>MES DESSINS</h1>
  <section class="images-mosaic">
    <!-- {#each Object.keys(imageModules) as image}
      <div class="image-container">
        {@debug image}
        <img class="mosaic-piece" src={image} alt="IMG1" />
      </div>
    {/each} -->

    {#await get() then get}
      {#each get as image}
        <!-- {@debug image} -->
        <div class="image-container">
          <img class="mosaic-piece" src={image.path.default} alt={image.name} />
        </div>
      {/each}
    {/await}
  </section>
</body>
