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
      <button class="social-button mastodon">
        <a href="https://mastodon.art/@Tekatre"> Mastodon</a>
      </button>
      <!-- <button class="social-button discord">
        <a href="https://mastodon.art/@Tekatre"> Discord</a>
      </button>
      <button class="social-button youtube">
        <a href="https://mastodon.art/@Tekatre"> Youtube</a>
      </button> -->
      <button class="social-button github">
        <a href="https://github.com/Tekatre"> GitHub</a>
      </button>
      <button class="social-button linkedin">
        <a href="https://github.com/Tekatre"> Linkedin</a>
      </button>
      <button class="social-button itchio">
        <a href="https://github.com/Tekatre"> Itch.io</a>
      </button>
    </div>
  </section>
  <section>
    <h1>BIO</h1>
  </section>
</body>
