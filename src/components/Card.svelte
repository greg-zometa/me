<script lang="ts">
  import Datetime from "./Datetime.svelte";
  import type { BlogFrontmatter } from "@content/_schemas";

  export let frontmatter: BlogFrontmatter;
  export let href: string | undefined = undefined;
  export let secHeading: boolean | undefined = undefined;

  const { title, pubDatetime, description, readingTime } = frontmatter;
  const headingClass = `
    font-medium relative
    text-lg text-accent xl:text-base
    decoration-dashed active:underline xl:active:no-underline xl:no-underline
    xl:hover:before:bottom-0 xl:hover:before:h-full
    xl:active:before:bottom-0 xl:active:before:h-full
    xl:before:bg-accent xl:before:w-full xl:before:h-1
    xl:before:transition-all xl:before:ease-in-out xl:before:duration-300
    xl:before:absolute xl:before:left-0 xl:before:bottom-px xl:before:-z-10
  `;
</script>

<li class="mt-4 space-y-1">
  <a {href} class="inline-block focus-visible:no-underline focus-visible:underline-offset-0">
    {#if secHeading}
      <h2 class={headingClass}>
        {title}
      </h2>
    {:else}
      <h3 class={headingClass}>
        {title}
      </h3>
    {/if}
  </a>
  <Datetime datetime={pubDatetime} {readingTime} />
  <p>{description}</p>
</li>
