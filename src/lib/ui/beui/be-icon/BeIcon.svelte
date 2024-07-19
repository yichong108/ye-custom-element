<script>
  export let name = "";
  export let color = "";
  let _class = "";
  export { _class as class };
</script>

<i
  {...$$restProps}
  class="be-icon be-icon-{name} {_class}"
  style:color
  role="button"
  tabindex="-1"
  on:click
  on:contextmenu
  on:dblclick
  on:focusin
  on:mousedown
  on:mouseup
  on:focusout
  on:keydown
  on:keyup
  on:mouseove
  on:mouseleave
></i>
