import { isObject } from "lodash-es";

/**
 * 输入202401
 * 输出2024-01
 * @param val
 * @returns {Date}
 */
export function encodeDatePropValue(val) {
  let dataStr = val.substring(0, 4) + "-" + val.substring(4, 6);
  return new Date(dataStr);
}

/**
 * 输入2024-01
 * 输出202401
 * @param val
 * @returns {*}
 */
export function decodeDatePropValue(val) {
  return val.replaceAll("-", "");
}

export function styleObjectToString(style) {
  let str = "";
  if (isObject(style)) {
    str = Object.entries(style)
      .map(
        ([key, value]) =>
          `${key.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase())}: ${value}`
      )
      .join("; ");
  }
  return str;
}
