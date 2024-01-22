<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
</script>

<header class="sticky">
  <p>Tekatre</p>

  <nav class="nav-header">
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
