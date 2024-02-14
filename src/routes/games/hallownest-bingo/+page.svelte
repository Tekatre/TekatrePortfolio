<script>
  import BingoHeader from "$lib/images/HbingoScreen.png";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <div class="page-body">
    <h1>Hallownest bingo</h1>
    <section class="gamepage">
      <img class="header-img" src={BingoHeader} alt="" />
      <nav>
        <div class="languages">
          <p>Svelte</p>
          <p>TypeScript</p>
          <p>CSS</p>
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
          Hallownest Bingo est un site qui permet de générer des grilles de
          bingo pour Hollow Knight. Le but de ce site était de pouvoir jouer sur
          une grille en même temps que des amis. Il est possible de générer des
          défis de plus ou moins grande difficulté et de partager la grille avec
          d'autres personnes grâce à la seed. La liste de tous les défis est
          disponnibles dans l'onglet "Challenges". Le site est traduis en
          anglais et en français.
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
