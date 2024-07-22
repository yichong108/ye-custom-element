<!-- Parent.svelte -->
<script>
      import Child from './Child.svelte';

      let obj = {};

      function updateObj() {
            obj.b = 3;
            // obj = { ...obj }; // 手动触发更新
      }
</script>

<Child obj="{obj}" />

<button on:click={updateObj}>Update Object</button>