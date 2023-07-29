<script lang="ts">
  import { LOCALE } from "@config";

  export let datetime: string | Date;
  export let readingTime: string | undefined = undefined;
  export let size: "sm" | "lg" | undefined = undefined;
  export let className: string | undefined = undefined;

  const postDatetime = new Date(datetime);

  const date = postDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
</script>

<div class={`flex items-center space-x-2 opacity-80 ${className}`}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class={`${size === "sm" ? "scale-90" : "scale-100"} inline-block h-6 w-6 fill-base`}
    aria-hidden="true"
  >
    <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
    <path
      d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
    />
  </svg>
  <span class="sr-only">Posted on:</span>
  <span class={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
    {date}
  </span>
  {#if readingTime}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={`${size === "sm" ? "scale-90" : "scale-100"} inline-block h-6 w-6 fill-base`}
      aria-hidden="true"
    >
      <path
        d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"
      />
      <path d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707-2-2 1.414-1.414 2 2z" />
    </svg>
    <span class="sr-only">Reading time:</span>
    <span class={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
      {readingTime}
    </span>
  {/if}
</div>
