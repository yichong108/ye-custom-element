<!--
  a playground.
-->
<script>
  import {
    defineCustomElement,
    YeInput,
    YeSelect,
    YeCascader,
    YePickerDay,
    YeButton,
    YePickerDayRange,
    yeLoading,
    YeDatePicker,
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
  for (let i = 0; i < 100; i++) {
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
  let load = false;

  function onItemClick(item) {
    console.log("item", item);
  }

  function onClick() {
    load = true;
  }

  function onChange(e) {
    console.log("app.vue onChange", e.detail);
  }

  let dValue = "2027-01-08";

  function onClick2() {
    dValue = "2027-01-07";
  }

  console.log('hhhhh', customElements.get('yc-select'));
</script>

<div>
  <div style="margin-top: 300px;display: flex; justify-content: flex-start; margin: 500px;">
<!--    <YeDatePicker selectMode="yearrange" on:change={onChange}></YeDatePicker>-->
<!--        <YeCascader value='{cascaderValue}' dicData='{options}'></YeCascader>-->
        <ye-select value={"1"} dicData={selectDicData}></ye-select>

  </div>
  <button on:click={onClick2}>change</button>
  <!--  <div use:yeLoading={load} style="width: 100px; height: 100px; background: red;">aa</div>-->
  <!--  <button on:click={onClick}>dianji</button>-->
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
  <!--  <div style="margin: 20px;">-->
  <!--    -->
  <!--    <YeSelect value={"1"} dicData={selectDicData}></YeSelect>-->

  <!--    <YeCascader value='{cascaderValue}' dicData='{options}'></YeCascader>-->
  <!--  </div>-->

  <!--	<YePickerDay></YePickerDay>-->

  <!--  <div style="height: 50px; background:red; overflow:auto;">-->

  <!--  </div>-->

  <!--  <YeButton size='small' label='dd'></YeButton>-->
  <!--  <YeButton size="medium" label='aa'></YeButton>-->
  <!--  <YeButton label='cc' size='mini'></YeButton>-->

  <!--  <YePickerDayRange width='200px'></YePickerDayRange>-->
</div>
