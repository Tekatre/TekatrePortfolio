<script>
  import placeholder from "$lib/images/placeholder.png";
  import placeholder1 from "$lib/images/placeholder1.png";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body>
  <h1>GAMES</h1>
  <section class="item-list">
    <div class="thumbnail-display">
      <div class="thumbnail-frame">
        <img class="thumbnail" src={placeholder} alt="placeholder" />
      </div>
      <div class="display-text">
        <h2>Game Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="thumbnail-display">
      <div class="thumbnail-frame">
        <img class="thumbnail" src={placeholder1} alt="placeholder" />
      </div>
      <div class="display-text">
        <h2>Game Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </section>
</body>
