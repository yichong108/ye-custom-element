import { MayBeChartView } from "@/library/ui/mayBeChartView/index.js";
import { MayBeUiRadioButton, MayBeUiFormItem } from "@/library/ui/mayBeUi/index.js";

function defineCustomElement(name, svelteComponent) {
  if (customElements.get(name)) {
    console.warn("已经注册自定义元素：" + name);
  } else {
    customElements.define(name, svelteComponent.element);
  }
}

export * from "@/library/ui/yeui/index.js";

export {
  defineCustomElement,
  MayBeChartView,
  MayBeUiRadioButton,
  MayBeUiFormItem,
};