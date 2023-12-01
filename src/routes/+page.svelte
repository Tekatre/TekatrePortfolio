<script>
  import stars_banner from "$lib/images/stars.gif";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body>
  <div class="home-page-banner">
    <p>Tekatre's Portfolio</p>
    <!-- <img src={stars_banner} alt="stars" /> -->
  </div>
  <section>
    <h1>SOCIALS</h1>
    <div class="button-list">
      <button class="social-button mastodon"> Mastodon </button>
      <button class="social-button discord"> Discord </button>
      <button class="social-button youtube"> Youtube </button>
      <button class="social-button github"> GitHub </button>
    </div>
  </section>
  <section>
    <h1>GAMES</h1>
  </section>
</body>
