<script>
  import {defineCustomElement, YeInput, YeSelect, YeCascader, YePickerDay, YeButton, YePickerDayRange} from './lib/index.js';
  import '@/lib/theme/index.scss';
  import {SuiPopover} from '@/lib/svelteui/index.js';

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
  ];

  let options = [
    {
      value: '1-1',
      label: '1-1',
      children: [
        {
          value: '1-1-1',
          label: '1-1-1',
          children: [
            {
              value: '1-1-1-1',
              label: '1-1-1-1',
              children: [
                {
                  value: '1-1-1-1-1',
                  label: '1-1-1-1-1'
                }
              ]
            },
            {
              value: '1-1-1-2',
              label: '1-1-1-2'
            }
          ]
        }]
    },
    {
      value: '1-2',
      label: '1-2',
      children: []
    }
  ];
  let cascaderValue = ['1-1'];

  function onItemClick(item) {
    console.log('item', item);
  }
</script>

<div style='width: 200px;'>
<!--  <YeButton width="300px">aa</YeButton>-->
  <!--  <YeInput></YeInput>-->
  <!--  <YeSelect value="{'1'}" dicData={selectDicData}>-->
  <!--  </YeSelect>-->
  <!--	<ye-select value="{'1'}" dicData={selectDicData}></ye-select>-->

<!--  <div style="transform: translate3d(513px, 210px, 0px); width: 242px; height: 190px; position: absolute;">-->
<!--    <SuiPopover >-->
<!--      <div class="list">-->
<!--        {#each selectDicData as item}-->
<!--          <div class="item" on:click={()=>onItemClick(item)}>{item.label}</div>-->
<!--        {/each}-->
<!--      </div>-->

<!--      <YeButton style="margin-top: 300px;" slot="reference" label="打开"></YeButton>-->
<!--    </SuiPopover>-->
<!--  </div>-->

      <YeCascader value='{cascaderValue}' dicData='{options}'></YeCascader>


  <!--	<YePickerDay></YePickerDay>-->

  <SuiPopover >
    <div class="list">
      {#each selectDicData as item}
        <div class="item" on:click={()=>onItemClick(item)}>{item.label}</div>
      {/each}
    </div>

    <YeButton style="margin-top: 300px;" slot="reference" label="打开"></YeButton>
  </SuiPopover>

  <YeButton size='small' label='dd'></YeButton>
  <YeButton label='aa'></YeButton>
  <YeButton label='cc' size='mini'></YeButton>

  <YePickerDayRange width='200px'></YePickerDayRange>
</div>

