<script lang="ts">
  import Datetime from "./Datetime.svelte";
  import type { BlogFrontmatter } from "@content/_schemas";

  export let frontmatter: BlogFrontmatter;
  export let href: string | undefined = undefined;
  export let secHeading: boolean | undefined = undefined;

  const { title, pubDatetime, description, readingTime } = frontmatter;
</script>

<li class="list-card">
  <a {href}>
    {#if secHeading}
      <h2>
        {title}
      </h2>
    {:else}
      <h3>
        {title}
      </h3>
    {/if}
  </a>
  <Datetime datetime={pubDatetime} {readingTime} />
  <p>{description}</p>
</li>
