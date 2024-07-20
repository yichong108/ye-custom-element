<script>
  import { yeLoading } from "@/lib/index.js";

  let load = false;

  function onStart() {
    load = true;
  }

  function onOver() {
    load = false;
  }
</script>

<div use:yeLoading={load} style="width: 100px; height: 100px; background: #666;"></div>
<div style="margin-top: 20px;">
  <button on:click={onStart}>start</button>
  <button on:click={onOver}>over</button>
</div>
