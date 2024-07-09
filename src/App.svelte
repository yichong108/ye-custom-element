<script>
	import { ElsButton, ElsInput, defineCustomElement } from './lib/index.js';
  import '@/lib/theme/index.scss';

  defineCustomElement('yc-els-button', ElsButton);
  defineCustomElement('yc-els-input', ElsInput);
</script>

<yc-els-button test-kebab-case="ddaaa"></yc-els-button>
<yc-els-input></yc-els-input>
