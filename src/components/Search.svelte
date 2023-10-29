<script lang="ts">
  import type { PostsCollection } from "@types";
  import Fuse from "fuse.js";
  import { slug as slugify } from "github-slugger";
  import { onMount } from "svelte";
  import { LOCALE } from "@config";

  export let searchList: {
    title: string;
    description: string;
    data: PostsCollection["data"];
  }[];

  let inputRef: HTMLInputElement;
  let inputVal = "";
  let searchResults: Fuse.FuseResult<{
    title: string;
    description: string;
    data: PostsCollection["data"];
  }>[] = [];

  $: {
    // Add search result only if
    // input value is more than one character
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    searchResults = inputResult;

    let relativePathQuery = window.location.pathname;
    // Update search string in URL
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      relativePathQuery += `?${searchParams.toString()}`;
    }

    history.replaceState(history.state, "", relativePathQuery);
  }

  onMount(() => {
    // if URL has search query,
    // insert that search query in input field
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) inputVal = searchStr;

    // put focus cursor at the end of the string
    setTimeout(() => {
      inputRef.selectionStart = inputRef.selectionEnd = searchStr?.length || 0;
    }, 50);
  });

  $: fuse = new Fuse(searchList, {
    keys: ["title", "description"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5
  });
</script>

<label class="relative block">
  <span class="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
      />
    </svg>
  </span>
  <input
    class="block w-full rounded border border-fill border-opacity-40 bg-fill py-3 pl-10 pr-3 placeholder:italic placeholder:text-opacity-75 focus:border-accent focus:outline-none"
    placeholder="Search for anything..."
    type="text"
    name="search"
    value={inputVal}
    bind:this={inputRef}
    on:input={(e) => (inputVal = e.currentTarget.value)}
    autoComplete="off"
  />
</label>

{#if inputVal.length > 1}
  <div class="mt-8">
    Found {searchResults?.length}
    {searchResults?.length && searchResults?.length === 1 ? " result" : " results"}{" "}
    for '{inputVal}'
  </div>
{/if}

{#if searchResults}
  <ul>
    {#each searchResults as { item: { data }, refIndex } (refIndex)}
      <li class="list-card">
        <a href={slugify(data.postSlug)}>
          <h2>
            {data.title}
          </h2>
        </a>
        <div class="flex items-center space-x-4 opacity-80">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 scale-100 fill-base" aria-hidden="true">
              <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
              <path
                d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
              />
            </svg>
            <span class="sr-only">Posted on:</span>
            <span class="text-base italic">
              {new Date(data.pubDatetime).toLocaleDateString(LOCALE, {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </span>
          </div>
          <div class={`flex items-center ${data.readingTime ? "space-x-2" : "space-x-1"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 scale-100 fill-base" aria-hidden="true">
              <path
                d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"
              />
              <path d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707-2-2 1.414-1.414 2 2z" />
            </svg>
            <span class="sr-only">Reading time:</span>
            <span class="text-base italic">
              {data.readingTime ?? "< 1 min read"}
            </span>
          </div>
        </div>
        <p>{data.description}</p>
      </li>
    {/each}
  </ul>
{/if}
