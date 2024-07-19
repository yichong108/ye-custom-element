import { off, on } from "@/lib/ui/beui/utils/beerui.js";

/**
 * 点击外部
 * @param {Element} els
 * @param {Object} options { cb: Function, isInDrag: boolean }
 *     - 默认返回 自定义方法 outside
 */
export default function clickOutside(
  els,
  options = { cb: undefined, isInDrag: false }
) {
  if (options.cb && typeof options.cb !== "function") {
    throw new Error("回调需是一个函数 callback must be Function.");
  }

  function clickHandler(event) {
    if (!els.contains(event.target)) {
      els.dispatchEvent(new CustomEvent("outside"));
      options.cb && options.cb();
    }
  }

  on(document, "mousedown", clickHandler);

  return {
    destroy: function () {
      off(document, "mousedown", clickHandler);
    },
  };
}
