import { off, on } from "@/lib/ui/beui/utils/beerui.js";

/**
 * 边界判定
 * @param {number} w
 * @param {number} h
 * @param {number} l
 * @param {number} t
 * @returns {Object} DragLimit
 */
const isInWindow = (w, h, l, t) => {
  const halfWidth = w / 2;
  const halfHeight = h / 2;
  const clientWidth = document.body.clientWidth;
  const clientHeight = document.body.clientHeight;
  let left = l;
  let top = t;
  if (halfHeight >= top) top = halfHeight; // 上
  if (halfHeight + top >= clientHeight) top = clientHeight - halfHeight; // 下
  if (halfWidth >= left) left = halfWidth; // 左
  if (halfWidth + left >= clientWidth) left = clientWidth - halfWidth; // 右
  return { left, top };
};

/**
 * 注册元素的拖拽事件
 * @param {HTMLElement} dragBox
 * @param {Object} options { isLimit: boolean, isDrag: boolean, isFree: boolean, els: string }
 * @constructor
 */
export default function DragEvent(
  dragBox,
  options = { isDrag: false, isLimit: false, isFree: false, els: ".drag" }
) {
  if (!options.isDrag) return;
  if (!options.els) throw new Error("需要被拖拽的元素！");

  const target = dragBox;
  const dragArea = dragBox.querySelector(options.els);

  const dragHandler = (targetEvent) => {
    const disX = targetEvent.clientX - target.offsetLeft;
    const disY = targetEvent.clientY - target.offsetTop;

    function mouseMoverHandler(documentEvent) {
      let left = documentEvent.clientX - disX;
      let top = documentEvent.clientY - disY;
      const { width, height } = target.getBoundingClientRect();

      if (options.isLimit) {
        const result = isInWindow(width, height, left, top);
        left = result.left;
        top = result.top;
      } else if (!options.isFree) {
        const clientHeight = document.body.clientHeight;
        const limitBottom = clientHeight + height / 2 - 50;
        if (top >= clientHeight + height / 2 - 50) top = limitBottom; // 下
        if (height / 2 >= top) top = height / 2; // 上
      }

      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }

    function mouseUpHandler() {
      off(document, "mousemove", mouseMoverHandler);
      off(document, "mouseup", mouseUpHandler);
      off(document, "dragend", mouseUpHandler);
    }

    on(document, "mousemove", mouseMoverHandler);
    on(document, "mouseup", mouseUpHandler);
    on(document, "dragend", mouseUpHandler);
  };

  on(dragArea, "mousedown", dragHandler, { capture: true, passive: true });

  return {
    destroy: () => {
      off(document, "mousedown", dragHandler);
    },
  };
}
