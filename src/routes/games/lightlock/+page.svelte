<script>
  import LightlockHeader from "$lib/images/LightLock/LightlockHome.png";
  import lightlock1 from "$lib/images/LightLock/LightLockScreen1.png";
  import lightlock2 from "$lib/images/LightLock/LightLockScreen2.png";
  import lightlock3 from "$lib/images/LightLock/Boxi.gif";
  import lightlock4 from "$lib/images/LightLock/intro.gif";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <div class="page-body">
    <h1>Hottest Potato</h1>
    <section class="gamepage">
      <img class="header-img" src={LightlockHeader} alt="" />
      <nav>
        <div class="languages">
          <p>UE5</p>
          <p>Blueprints</p>
          <p>Aseprite</p>
        </div>
        <div class="website">
          <a href="https://tekatre.itch.io/lightlock">
            <p>Itch.io page</p>
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
          Lightlock est un jeu de plateforme dans lequel vous incarnez le
          capitaine Lightstealer, bloqué dans son vaisseau par une IA
          sarcastique. Il va devoir progresser à travers les salles du vaisseau
          en utilisant à son avantage les propriétés du chromatium, une matière
          colorée qui devient solide uniquement lorsquélle est noire.
        </p>
        <p>
          Ce jeu est un prototype et sert de démo pour l'idée que nous avions
          eu. Au fur et à mesure des salles, le joueur est ammené à comprendre
          et utiliser différents mécanismes et à voir le chromatium à la fois
          comme un obstacle et comme une plateforme. Le jeu complet devais
          s'orienter sur une histoire riche au cours de laquelle le capitaine
          apprenais que sa valeur en tant que capitaine était déjà prouvée et
          qu'il pouvais prendre une retraite bien méritée en passant le flambeau
          à sa fille.
        </p>
        <br />
        <div class="art-galery">
          <h2>Art Galery</h2>
          <div class="images-mosaic">
            <div class="image-container">
              <img class="mosaic-piece" src={lightlock4} alt="placeholder" />
            </div>
            <div class="image-container">
              <img class="mosaic-piece" src={lightlock1} alt="placeholder" />
            </div>
            <div class="image-container">
              <img class="mosaic-piece" src={lightlock2} alt="placeholder" />
            </div>
            <div class="image-container">
              <img class="mosaic-piece" src={lightlock3} alt="placeholder" />
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</body>
