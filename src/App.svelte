<script>
  import {
    defineCustomElement,
    YeInput,
    YeSelect,
    YeCascader,
    YePickerDay,
    YeButton,
    YePickerDayRange,
  } from "./lib/index.js";

  let selectDicData = [
    {
      label: "选项一",
      value: "1",
    },
    {
      label: "选项二",
      value: "2",
    },
  ];
  for (let i = 0; i < 1; i++) {
    selectDicData.push({
      label: "选项" + i,
      value: i + "d",
    });
  }

  let options = [
    {
      value: "1-1",
      label: "1-1",
      children: [
        {
          value: "1-1-1",
          label: "1-1-1",
          children: [
            {
              value: "1-1-1-1",
              label: "1-1-1-1",
              children: [
                {
                  value: "1-1-1-1-1",
                  label: "1-1-1-1-1",
                },
              ],
            },
            {
              value: "1-1-1-2",
              label: "1-1-1-2",
            },
          ],
        },
      ],
    },
    {
      value: "1-2",
      label: "1-2",
      children: [],
    },
  ];
  let cascaderValue = ["1-1"];

  function onItemClick(item) {
    console.log("item", item);
  }

  function onChange(e) {
    // console.log('dd', e);
  }
</script>

<div>
  <!--  <YeButton width="300px">aa</YeButton>-->
  <!--  <YeInput></YeInput>-->

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
  <div style="margin: 20px;">
    <YeSelect value={"1"} dicData={selectDicData}></YeSelect>

    <!--    <YeCascader value='{cascaderValue}' dicData='{options}'></YeCascader>-->
  </div>

  <!--	<YePickerDay></YePickerDay>-->

  <!--  <SuiPopover >-->
  <!--    <div class="list">-->
  <!--      {#each selectDicData as item}-->
  <!--        <div class="item" on:click={()=>onItemClick(item)}>{item.label}</div>-->
  <!--      {/each}-->
  <!--    </div>-->

  <!--    <YeButton style="margin-top: 300px;" slot="reference" label="打开"></YeButton>-->
  <!--  </SuiPopover>-->

  <!--  <div style="height: 50px; background:red; overflow:auto;">-->

  <!--  </div>-->

  <!--  <YeButton size='small' label='dd'></YeButton>-->
  <!--  <YeButton size="medium" label='aa'></YeButton>-->
  <!--  <YeButton label='cc' size='mini'></YeButton>-->

  <!--  <YePickerDayRange width='200px'></YePickerDayRange>-->
</div>
