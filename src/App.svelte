<script>
	import { YeInput, YeButton, YeSelect, defineCustomElement } from './lib/index.js';
  import '@/lib/theme/index.scss';

  defineCustomElement('ye-button', YeButton);
  defineCustomElement('ye-input', YeInput);
  defineCustomElement('ye-select', YeSelect);

  let selectDicData = [
    {
      label: '选项一',
      value: '1'
    }
  ]
</script>

<div style="width: 200px;">
  <ye-button></ye-button>
  <ye-input></ye-input>
<!--  <ye-select>-->
<!--    <ye-option label="选项一" value="1"></ye-option>-->
<!--  </ye-select>-->
  <div style="background:red; height: 50px; overflow: auto;">
    <YeSelect dicData={selectDicData}>
    </YeSelect>
  </div>

<!--  <YeSelect dicData={selectDicData}>-->
<!--  </YeSelect>-->

</div>

