<script lang="ts">
  import { LOCALE } from "@config";

  export let datetime: string | Date;
  export let size: "sm" | "lg" | undefined = undefined;
  export let className: string | undefined = undefined;

  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString(LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
  });
</script>

<div class={`flex items-center space-x-2 opacity-80 ${className}`}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class={`${
      size === "sm" ? "scale-90" : "scale-100"
    } inline-block h-6 w-6 fill-skin-base`}
    aria-hidden="true"
  >
    <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
    <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"/>
  </svg>
  <span class="sr-only">Posted on:</span>
  <span class={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
    {date}
    <span aria-hidden="true"> | </span>
    <span class="sr-only">&nbsp;at&nbsp;</span>
    {time}
  </span>
</div>