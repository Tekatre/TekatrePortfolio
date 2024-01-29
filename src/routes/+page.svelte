<script lang="ts">
  import HBingo from "$lib/images/HBingo.png";
  import HotPot from "$lib/images/Hot-Logo.png";
  import Lightlock from "$lib/images/Lightlock-Logo.png";

  import main_page_text from "$lib/main_page_trans.json";
  import { translate } from "$lib/translator";
  import { getContext } from "svelte";

  let lang: string = getContext("lang");
  console.log("lang", lang);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <div class="page-body">
    <!-- <div class="home-page-banner">
    <p>Tekatre's Portfolio</p>
  </div> -->
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
          <a href="https://www.linkedin.com/in/thomas-petit-677027296/">
            Linkedin</a
          >
          <!-- </button>
      <button class="social-button itchio">
        <a href="https://tekatre.itch.io/"> Itch.io</a>
      </button> -->
        </button>
      </div>
    </section>
    <section>
      <h1>Projects</h1>
      <section class="project-list">
        <div class="project-container">
          <div class="project-card">
            <img class="project-image" src={HBingo} alt="placeholder" />
          </div>
          <div class="project-text">
            <a href="/games/hallownest-bingo"
              ><h2>Hallownest Bingo</h2>
              <svg>
                <polyline
                  points="0 4 10 12 0 20"
                  stroke-width="4"
                  stroke-linecap="butt"
                  fill="none"
                  stroke-linejoin="round">&lt;</polyline
                >
              </svg></a
            >

            <p>
              {translate(lang, main_page_text["hkbingo-desc"])}
            </p>
          </div>
        </div>
        <div class="project-container">
          <div class="project-card">
            <img class="project-image" src={HotPot} alt="placeholder" />
          </div>
          <div class="project-text">
            <a href="/games/hottest-potato"
              ><h2>Hottest Potato</h2>
              <svg>
                <polyline
                  points="0 4 10 12 0 20"
                  stroke-width="4"
                  stroke-linecap="butt"
                  fill="none"
                  stroke-linejoin="round">&lt;</polyline
                >
              </svg></a
            >
            <p>
              Réalisé en 48h pour la WonderJam 2023, Hottest Potato est un jeu
              de Dating Sim parodique dans lequel vous devez démasquer les
              fausses patates. Le jeu a reçu le prix des meilleurs assets faits
              maison.
            </p>
          </div>
        </div>
        <div class="project-container">
          <div class="project-card">
            <img class="project-image" src={Lightlock} alt="placeholder" />
          </div>
          <div class="project-text">
            <a href="/games/lightlock"
              ><h2>Lightlock</h2>
              <svg>
                <polyline
                  points="0 4 10 12 0 20"
                  stroke-width="4"
                  stroke-linecap="butt"
                  fill="none"
                  stroke-linejoin="round">&lt;</polyline
                >
              </svg></a
            >

            <p>
              Un puzzle plateformer 2D basé sur la couleur. Le capitaine
              Lightstealer, bloqué dans son vaisseau par une IA moqueuse, doit
              trouver un moyen de rejoindre son équipage en utilisant les
              mécanismes colorés à son avantage.
            </p>
          </div>
        </div>
      </section>
    </section>
  </div>
</body>
