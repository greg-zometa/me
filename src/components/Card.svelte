<script lang="ts">
  import Datetime from "./Datetime.svelte";
  import type { BlogFrontmatter } from "@content/_schemas";

  export let frontmatter: BlogFrontmatter;
  export let href: string | undefined = undefined;
  export let secHeading: boolean | undefined = undefined;

  const { title, pubDatetime, description } = frontmatter;
</script>

<li class="my-6">
  <a
    href={href}
    class="inline-block text-lg font-medium text-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
  >
  {#if secHeading}
  <h2 class="text-lg font-medium decoration-dashed hover:underline">
    {title}
  </h2>
    {:else}
    <h3 class="text-lg font-medium decoration-dashed hover:underline">
      {title}
    </h3>
  {/if}
  </a>
  <Datetime datetime={pubDatetime} />
  <p>{description}</p>
</li>
