<script>
  import IMG1 from "$lib/images/buildings.png";
  import IMG2 from "$lib/images/goutte.png";
  import IMG3 from "$lib/images/iso1.png";
  import IMG4 from "$lib/images/Lamontagneilparé.png";
  import IMG5 from "$lib/images/logo-CDP.gif";
  import IMG6 from "$lib/images/pear36-8x.png";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body>
  <h1>ART</h1>
  <section class="images-mosaic">
    <div class="image-container">
      <img class="mosaic-piece" src={IMG1} alt="IMG1" />
    </div>
    <div class="image-container">
      <img class="mosaic-piece" src={IMG2} alt="IMG2" />
    </div>
    <div class="image-container">
      <img class="mosaic-piece" src={IMG3} alt="IMG3" />
    </div>
    <div class="image-container">
      <img class="mosaic-piece" src={IMG6} alt="IMG6" />
    </div>
    <div class="image-container">
      <img class="mosaic-piece" src={IMG4} alt="IMG4" />
    </div>
    <div class="image-container">
      <img class="mosaic-piece" src={IMG5} alt="IMG5" />
    </div>
  </section>
</body>
