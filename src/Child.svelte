<!-- Child.svelte -->
<script>
  export let obj;

  $: {
    console.log('obj has changed', obj);
  }

</script>

<p>{obj.b}</p>
