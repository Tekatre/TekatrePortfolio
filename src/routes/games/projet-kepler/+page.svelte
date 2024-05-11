<script>
  import KeplerHome from "$lib/images/KeplerHome.png";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <div class="page-body">
    <h1>Projet Kepler</h1>
    <section class="gamepage">
      <img class="header-img" src={KeplerHome} alt="" />
      <nav>
        <div class="languages">
          <p>Unreal Engine</p>
          <p>C++</p>
          <p>Perforce</p>
        </div>
        <div class="website">
          <a href="https://tekatre.itch.io/projet-kepler">
            <p>Page itch.io</p>
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
          Projet Kepler est un jeu sérieux de gestion sur la biodiversité
          réalisé en cours. Le joueur incarne un scientifique envoyé sur une
          petite exoplanète et devra reconstruire espèce par espèce la
          biodiversité terrestre. Il a pour but de sensibiliser le joueur à
          l'équilibre fragile entre les espèces qui habitent un écosystème
          donné. En faisant progresser les populations des deux biomes
          disponnibles dans ce protoype, le joueur va compléter des quêtes pour
          récolter des points Kepler qui servent à interagir avec le système.
          Les quêtes permettent aussi de dévérouiller de nouvelles espèces et de
          nouvelles zones.
        </p>
        <p>
          Lors de ce projet réalisé avec 4 camarades, j'ai été responsable
          d'organiser les éléments de gameplay pour agir sur le système sans
          déséquilibrer la simulation de manière trop violente mais en gardant
          le jeu interessant.
        </p>
      </article>
    </section>
  </div>
</body>
