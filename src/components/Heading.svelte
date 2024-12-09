<script lang="ts">
  export let level = 1; // 默认是 h1
  export let className = "";
  export let style = "";
</script>

{#if level === 1}
  <h1 class="text-3xl color {className}" {style}><slot></slot></h1>
{:else if level === 2}
  <h2 class="text-2xl color {className}" {style}><slot></slot></h2>
{:else if level === 3}
  <h3 class="text-xl color {className}" {style}><slot></slot></h3>
{:else if level === 4}
  <h4 class="text-lg color {className}" {style}><slot></slot></h4>
{:else if level === 5}
  <h5 class="text-sm color {className}" {style}><slot></slot></h5>
{:else if level === 6}
  <h5 class="text-xs color {className}" {style}><slot></slot></h5>
{:else}
  <h1 class="text-3xl color {className}" {style}><slot></slot></h1>
{/if}

<style>
  .color {
    color: var(--main-font-color);
  }
</style>
