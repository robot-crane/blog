<script lang="ts">
  import clsx from "clsx";

  type Align = "center" | "start" | "end";
  export let align: Align = "center";

  export let gap: number | string = 1;

  const rowClassMap = {
    center: "justify-center",
    start: "justify-start",
    end: "justify-end",
  };

  let rowClass = rowClassMap[align];
  let gapClass =
    typeof gap === "string" && gap.indexOf("px") > 0
      ? `gap-x-[${gap}]`
      : `gap-x-${gap}`;
</script>

<div class={clsx("flex items-center", rowClass, gapClass)}>
  <slot />
</div>

<style></style>
