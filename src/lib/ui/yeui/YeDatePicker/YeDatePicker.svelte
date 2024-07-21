<svelte:options customElement={{ tag: "ye-date-picker", shadow: "none" }} />

<script>
  import { createEventDispatcher } from "svelte";
  import { BeDatePicker } from "@/lib/ui/beui/index.js";
  import { defaultSize } from "@/lib/ui/yeui/yeConfig.js";
  import dayjs from "dayjs";

  /**
   * 时间值
   * @type {string}
   */
  export let value = "";

  /**
   * 宽度
   * @type {string}
   */
  export let width = "200px";

  /**
   * 时间值格式
   * 示例：YYYYMMDDHHmmss
   * @type {string}
   */
  export let valueFormat = "";

  /**
   * 选择器模式
   * @type {string}
   */
  export let selectMode = "date";

  /**
   * 清除值
   * @type {boolean}
   */
  export let clearable = false;

  /**
   * 尺寸
   * @type {string}
   */
  export let size = defaultSize;

  if (selectMode.includes("range")) {
    let isValid = value?.beginTime && value?.endTime;
    if (isValid) {
      console.warn("时间范围数据格式错误");
    }
  }

  // 时间
  let innerValue = "";

  $: {
    if (value) {
      if (isRangeMode()) {
        innerValue = valueToDateValueForRange(value);
      } else {
        innerValue = valueToDateValue(value);
      }
    } else {
      innerValue = "";
    }
  }

  const dispatch = createEventDispatcher();

  function isRangeMode() {
    return selectMode.includes("range");
  }

  function onChange(e) {
    innerValue = e.detail;

    if (isRangeMode()) {
      let val = dateValueToValueForRange(e.detail);
      dispatch("change", val);
    } else {
      let val = dateValueToValue(e.detail);
      dispatch("change", val);
    }
  }

  function dateValueToValueForRange(value) {
    let arr = value;
    return {
      beginTime: dateValueToValue(arr[0]),
      endTime: dateValueToValue(arr[1]),
    };
  }

  function valueToDateValueForRange(value) {
    let beginTime = valueToDateValue(value.beginTime);
    let endTime = valueToDateValue(value.endTime);
    return [new Date(beginTime), new Date(endTime)];
  }

  /**
   * Date转成字符串
   * @param value
   */
  function dateValueToValue(value) {
    return dayjs(value).format(valueFormat);
  }

  /**
   * 字符串转成Date
   * @param value
   * @returns {dayjs.Dayjs}
   */
  function valueToDateValue(value) {
    const DEFAULT_FORMATS = {
      date: "YYYY-MM-DD",
      month: "YYYY-MM",
      daterange: "YYYY-MM-DD",
      datetime: "YYYY-MM-DD HH:mm:ss",
      datetimerange: "YYYY-MM-DD HH:mm:ss",
      monthrange: "YYYY-MM",
      year: "YYYY",
      yearrange: "YYYY",
    };
    let dateFormat = DEFAULT_FORMATS[selectMode];
    if (valueFormat) {
      return dayjs(value, valueFormat).format(dateFormat);
    }
    return value;
  }
</script>

<div class="ye-date-picker" style="width: {width}">
  <BeDatePicker
    value={innerValue}
    {size}
    clearable={clearable}
    placeholder="请选择"
    {selectMode}
    on:change={onChange}
  />
</div>

<style lang="scss">
  .ye-date-picker {
    position: relative;
  }
</style>
