<script>
	import { YeInput, YeButton, defineCustomElement } from './lib/index.js';
  import '@/lib/theme/index.scss';

  defineCustomElement('ye-button', YeButton);
  defineCustomElement('ye-input', YeInput);
</script>

<ye-button></ye-button>
<ye-input></ye-input>
