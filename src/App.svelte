<script>
	import { defineCustomElement, YeInput, YeSelect, YeCascader, YePickerDay } from './lib/index.js';
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
</script>

<div style='width: 200px;'>
	<!--  <YeInput></YeInput>-->
	<!--  <YeSelect value="{'1'}" dicData={selectDicData}>-->
	<!--  </YeSelect>-->
	<ye-select value="{'1'}" dicData={selectDicData}></ye-select>

	<YeCascader value='{cascaderValue}' dicData='{options}'></YeCascader>

	<YePickerDay></YePickerDay>
</div>

