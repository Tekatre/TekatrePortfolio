<script lang="ts">
  import cvpdf from "$lib/CV-V0.pdf";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <div class="page-body">
    <h1>ART</h1>
    <p></p>
    <section>
      <embed src={cvpdf} />
    </section>
  </div>
</body>
