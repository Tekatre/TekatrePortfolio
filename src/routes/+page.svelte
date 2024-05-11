<script lang="ts">
  import HBingo from "$lib/images/HBingo.png";
  import HotPot from "$lib/images/Hot-Logo.png";
  import Lightlock from "$lib/images/LightLock/Lightlock-Logo.png";
  import Kepler from "$lib/images/KeplerHome.png";
  import icon from "$lib/images/favicon.png";
  import cv from "$lib/CV-V0.pdf";

  import main_page_text from "$lib/main_page_trans.json";
  import { translate } from "$lib/translator";
  import { getContext } from "svelte";

  let lang: string = getContext("lang");
  // console.log("lang", lang);
</script>

<svelte:head>
  <title>Tekatre</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <div class="page-body">
    <!-- <div class="home-page-banner">
    <p>Tekatre's Portfolio</p>
  </div> -->
    <section>
      <h1>À PROPOS DE MOI</h1>
      <div class="about-me">
        <article>
          <h3>Thomas "Tekatre" Petit</h3>
          <p>
            Je suis étudiant en double diplome ingénieur informatique/jeux
            vidéo. Pendant mes deux années à Telecom Nancy, j'ai pu développer
            des applications très différentes dans des langages variés. C'est
            par envie de créativité que j'ai décidé de d'orienter ma formation
            vers le game design.
          </p>
          <p>
            Je fais du pixel art et du world building sur mon temps libre. J'ai
            toujours en tête d'allier les deux pour constuire un jeu complet
            mais pour le moment, c'est surtout du materiel pour mes campagnes de
            jeu de role.
          </p>
          <p>
            Mes jeux préférés sont Hollow Knight, Dead Cells, Momodrora 4 et 5
            et Outer Wilds mais je pourrais ajouter à cette liste des jeux qui
            m'ont marqué de beaucoup de façons.
          </p>
          <br />
          <a class="pagelink" href={cv}
            >Télécharger mon CV <i class="fa-solid fa-download"></i></a
          >
        </article>
        <img src={icon} alt="" />
      </div>
    </section>

    <section>
      <h1>PROJETS ÉTUDIANTS</h1>
      <section class="project-list">
        <div class="project-container">
          <a href="/games/lightlock">
            <div class="project-card">
              <img class="project-image" src={Lightlock} alt="placeholder" />
            </div>
            <div class="project-text">
              <div Class="project-title">
                <h2>Lightlock</h2>
                <svg>
                  <polyline
                    points="0 4 10 12 0 20"
                    stroke-width="4"
                    stroke-linecap="butt"
                    fill="none"
                    stroke-linejoin="round">&lt;</polyline
                  >
                </svg>
              </div>
              <p>
                Un puzzle plateformer 2D basé sur la couleur. Le capitaine
                Lightstealer, bloqué dans son vaisseau par une IA moqueuse, doit
                trouver un moyen de rejoindre son équipage en utilisant les
                mécanismes colorés à son avantage.
              </p>
            </div></a
          >
        </div>
        <div class="project-container">
          <a href="/games/projet-kepler">
            <div class="project-card">
              <img class="project-image" src={Kepler} alt="placeholder" />
            </div>
            <div class="project-text">
              <div Class="project-title">
                <h2>Projet Kepler</h2>
                <svg>
                  <polyline
                    points="0 4 10 12 0 20"
                    stroke-width="4"
                    stroke-linecap="butt"
                    fill="none"
                    stroke-linejoin="round">&lt;</polyline
                  >
                </svg>
              </div>
              <p>
                Un jeu sérieux de gestion sur la biodiversité réalisé pour un
                cour de jeu sérieux. Le joueur incarne un scientifique envoyé
                sur une planète pour re créer la biodiversité terrestre petit à
                petit en apprenant les règles qui régissent les écosystèmes.
              </p>
            </div></a
          >
        </div>
      </section>
      <h1>GAME JAMS</h1>
      <section class="project-list">
        <div class="project-container">
          <a href="/games/hottest-potato">
            <div class="project-card">
              <img class="project-image" src={HotPot} alt="placeholder" />
            </div>
            <div class="project-text">
              <div class="project-title">
                <h2>Hottest Potato</h2>
                <svg>
                  <polyline
                    points="0 4 10 12 0 20"
                    stroke-width="4"
                    stroke-linecap="butt"
                    fill="none"
                    stroke-linejoin="round">&lt;</polyline
                  >
                </svg>
              </div>
              <p>
                Réalisé en 48h pour la WonderJam 2023, Hottest Potato est un jeu
                de Dating Sim parodique dans lequel vous devez démasquer les
                fausses patates. Le jeu a reçu le prix des meilleurs assets
                faits maison.
              </p>
            </div></a
          >
        </div>
      </section>
      <h1>PROJETS PERSONNELS</h1>
      <section class="project-list">
        <div class="project-container">
          <a href="/games/hallownest-bingo">
            <div class="project-card">
              <img class="project-image" src={HBingo} alt="placeholder" />
            </div>
            <div class="project-text">
              <div class="project-title">
                <h2>Hallownest Bingo</h2>
                <svg>
                  <polyline
                    points="0 4 10 12 0 20"
                    stroke-width="4"
                    stroke-linecap="butt"
                    fill="none"
                    stroke-linejoin="round">&lt;</polyline
                  >
                </svg>
              </div>
              <p>
                {translate(lang, main_page_text["hkbingo-desc"])}
              </p>
            </div></a
          >
        </div>
      </section>
    </section>

    <section>
      <h1>MES RÉSEAUX</h1>
      <div class="button-list">
        <a class="social-button mastodon" href="https://mastodon.art/@Tekatre">
          <p>Mastodon</p></a
        >
        <!-- <button class="social-button discord">
        <a href="https://mastodon.art/@Tekatre"> Discord</a>
      </button>
      <button class="social-button youtube">
        <a href="https://mastodon.art/@Tekatre"> Youtube</a>
      </button> -->
        <a class="social-button github" href="https://github.com/Tekatre"
          ><p>GitHub</p>
        </a>
        <a
          class="social-button linkedin"
          href="https://www.linkedin.com/in/thomas-petit-677027296/"
        >
          <p>Linkedin</p></a
        >
        <a class="social-button itchio" href="https://tekatre.itch.io/">
          <p>Itch.io</p></a
        >
      </div>
    </section>
  </div>
</body>
