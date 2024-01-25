<script>
  import { page } from "$app/stores";
</script>

<header class="sticky">
  <p>Tekatre</p>

  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/art" ? "page" : undefined}>
        <a href="/art">Art</a>
      </li>
      <li aria-current={$page.url.pathname === "/games" ? "page" : undefined}>
        <a href="/games">Games</a>
      </li>
    </ul>
  </nav>
</header>
