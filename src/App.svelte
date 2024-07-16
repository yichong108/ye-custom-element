<script>
  import {defineCustomElement, YeInput, YeSelect} from './lib/index.js';
  import '@/lib/theme/index.scss';

  // defineCustomElement('ye-button', YeButton);
  // defineCustomElement('ye-input', YeInput);
  defineCustomElement('ye-select', YeSelect);

  let selectDicData = [
    {
      label: '选项一',
      value: '1'
    },
    {
      label: '选项二',
      value: '2'
    }
  ]
</script>

<div style="width: 200px;">
<!--  <YeInput></YeInput>-->
<!--  <YeSelect value="{'1'}" dicData={selectDicData}>-->
<!--  </YeSelect>-->
  <ye-select value="{'1'}" dicData={selectDicData}></ye-select>
</div>

