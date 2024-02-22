<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/favicon.png";
</script>

<header class="sticky">
  <a href="/" class="header-name">
    <img class="tiny-img" src={logo} alt="" />
    <p>Tekatre</p>
  </a>

  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/art" ? "page" : undefined}>
        <a href="/art">Art</a>
      </li>
      <!-- <li aria-current={$page.url.pathname === "/games" ? "page" : undefined}>
        <a href="/games">Games</a>
      </li> -->
    </ul>
  </nav>
</header>
