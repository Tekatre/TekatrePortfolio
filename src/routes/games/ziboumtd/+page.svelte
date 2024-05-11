<script>
  import BingoHeader from "$lib/images/HbingoScreen.png";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <div class="page-body">
    <h1>Ziboum TD</h1>
    <section class="gamepage">
      <img class="header-img" src={BingoHeader} alt="" />
      <nav>
        <div class="languages">
          <p>Unreal Engine</p>
          <p>C++</p>
          <p>Perforce</p>
        </div>
        <div class="website">
          <a href="https://hallownest-bingo.vercel.app/">
            <p>Website</p>
            <svg>
              <polyline
                points="0 6 10 14 0 22"
                stroke-width="4"
                stroke-linecap="butt"
                fill="none"
                stroke-linejoin="round">&lt;</polyline
              >
            </svg></a
          >
        </div>
      </nav>
      <article>
        <h2>Description du projet</h2>
        <p>
          Ziboum TD Kitchen Nightmare Abrégé en Ziboum TD est un Tower Defense
          3D réalisé en cours.
        </p>
        <p>
          C'est un projet personnel qui est une refonte d'une application
          JavaScript. J'en ai profité pour apprendre les bases de Svelte et
          l'heberger grâce à Vercel.
        </p>
      </article>
    </section>
  </div>
</body>
