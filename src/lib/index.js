import './theme/index.scss';
export * from './components/index.js';

export function defineCustomElement(name, svelteComponent) {
  if (customElements.get(name)) {
    console.warn('已经注册自定义元素：'+name);
  } else {
    customElements.define(name, svelteComponent.element);
  }
}
