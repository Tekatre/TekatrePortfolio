<script lang="ts">
  import type { formatPostcssSourceMap } from "vite";

  // const imageModules = import.meta.glob("$lib/images/artDisplay/*.(png|gif)");
  // console.log("imageModules", imageModules);

  import Anxiety from "$lib/images/artDisplay/Anxietybonuslight.png";
  import Araignee from "$lib/images/artDisplay/araignées.png";
  import LanceBicol from "$lib/images/artDisplay/lancebicol.png";
  import Boxi from "$lib/images/artDisplay/Boxi.gif";
  import Buildings from "$lib/images/artDisplay/buildings.png";
  import Charadesign from "$lib/images/artDisplay/charadesign.gif";
  import Fleur from "$lib/images/artDisplay/fleurV3.png";
  import Floatingisles from "$lib/images/artDisplay/floatingisles.png";
  import Frame1 from "$lib/images/artDisplay/frame1.png";
  import Goutte from "$lib/images/artDisplay/goutte.png";
  import Intro from "$lib/images/artDisplay/intro.gif";
  import Iso1 from "$lib/images/artDisplay/iso1.png";
  import LaMontagne from "$lib/images/artDisplay/lamontagneilparé.gif";
  import Leopp from "$lib/images/artDisplay/Leopp.png";
  import lesnuages from "$lib/images/artDisplay/lesnuages.gif";
  import LogoCDP from "$lib/images/artDisplay/Logo-CDP.gif";
  import lowpoly from "$lib/images/artDisplay/lowpoly.png";
  import Nuag1PP from "$lib/images/artDisplay/nuag1PP.gif";
  import Reve from "$lib/images/artDisplay/rêve.png";
  import Stars from "$lib/images/artDisplay/stars.gif";
  import StoneGiant from "$lib/images/artDisplay/StoneGiant.gif";
  import theastrerework from "$lib/images/artDisplay/theastrerework.png";
  import TNEVENT2024sketch from "$lib/images/artDisplay/TNEVENT2024-sketch.png";
  import Transperce from "$lib/images/artDisplay/transperce.gif";
  import VikieHotel from "$lib/images/artDisplay/vikie-hotel.png";
  import Desert from "$lib/images/artDisplay/zidesert.png";

  export const get = async () => {
    const allimgsf = import.meta.glob("$lib/images/artDisplay/*.(png|gif)");
    const iterableImages = Object.entries(allimgsf);

    const allimgs = await Promise.all(
      iterableImages.map(async ([path, resolver]) => {
        // gets the resolved asset path
        const imgPath = await (
          resolver as () => Promise<{ default: string }>
        )();

        return {
          path: imgPath,
          name: imgPath.default.slice(0, -4).split("/").at(-1),
        };
      })
    );

    return allimgs;
  };
</script>

<svelte:head>
  <title>Art</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="surround-div">
  <!-- <h1>MES DESSINS</h1> -->
  <section class="images-mosaic">
    <!-- {#each Object.keys(imageModules) as image}
      <div class="image-container">
        {@debug image}
        <img class="mosaic-piece" src={image} alt="IMG1" />
      </div>
    {/each} -->

    <!-- {#await get() then get}
      {#each get as image}
        <div class="image-container">
          <img class="mosaic-piece" src={image.path.default} alt={image.name} />
        </div>
      {/each}
    {/await} -->
    <img class="solo-image" src={Floatingisles} alt="Floatingisles" />
    <div class="mosaic-line">
      <img class="solo-image" src={Araignee} alt="Araignee" />
      <img class="solo-image" src={Reve} alt="Reve" />
      <img class="solo-image" src={Goutte} alt="Goutte" />
    </div>
    <img class="solo-image" src={VikieHotel} alt="VikieHotel" />
    <img class="solo-image" src={Intro} alt="Intro" />
    <div class="mosaic-line">
      <img class="solo-image" src={LanceBicol} alt="LanceBicol" />
      <img class="solo-image" src={Buildings} alt="Buildings" />
      <img class="solo-image" src={Frame1} alt="Frame1" />
    </div>
    <img class="solo-image" src={lesnuages} alt="lesnuages" />
    <img class="solo-image" src={LaMontagne} alt="LaMontagne" />
    <div class="mosaic-line">
      <img class="solo-image" src={Anxiety} alt="Anxiety" />
      <img class="solo-image" src={Fleur} alt="Fleur" />
      <img class="solo-image" src={lowpoly} alt="lowpoly" />
    </div>
    <img class="solo-image" src={TNEVENT2024sketch} alt="TNEVENT2024sketch" />
    <div class="mosaic-line">
      <img class="solo-image" src={Boxi} alt="Boxi" />
      <img class="solo-image" src={Charadesign} alt="Charadesign" />
      <img class="solo-image" src={Leopp} alt="Leopp" />
    </div>
    <img class="solo-image" src={theastrerework} alt="theastrerework" />
    <div class="mosaic-line">
      <img class="solo-image" src={StoneGiant} alt="StoneGiant" />
      <img class="solo-image" src={LogoCDP} alt="LogoCDP" />
      <img class="solo-image" src={Transperce} alt="Transperce" />
    </div>
    <img class="solo-image" src={Stars} alt="Stars" />
    <img class="solo-image" src={Desert} alt="Desert" />
  </section>
</body>
