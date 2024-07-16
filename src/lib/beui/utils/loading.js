import { addClass, removeClass, setStyle, isString } from './beerui';
const browser = typeof window !== 'undefined';
let loadingNode;
if (browser) {
  loadingNode = document.createElement('div');
  addClass(loadingNode, 'be-loading-mask')
  loadingNode.innerHTML = `<div class="be-loading-spinner">
    <svg class="circular" viewBox="25 25 50 50">
      <circle class="path" cx="50" cy="50" r="20" fill="none"/>
    </svg>
    <p class="loading-text"></p>
  </div>
  `
}

export class LoadingService {
  constructor(option) {
    this.background = option?.background || '';
    this.text = option?.text || '拼命加载中';
    this.customClass = option?.customClass || '';
    if (isString(option?.target)) {
      this.target = document.querySelector(String(option?.target));
    } else {
      this.target = option?.target || document.body;
    }
    this.node = loadingNode.cloneNode(true);
  }

  show() {
    addClass(this.target, 'be-loading-position');
    this.target.appendChild(this.node);
    const mask = this.target.querySelector('.be-loading-mask');
    if (this.customClass) addClass(mask, this.customClass);
    setStyle(mask, 'background', this.background);
    const textNode = this.target.lastChild.querySelector('.loading-text');
    textNode.innerText = this.text;
  }

  close() {
    removeClass(this.target, 'be-loading-position');
    this.target.removeChild(this.node);
  }
}

export function loading(node, loading) {
  const nodeDom = loadingNode.cloneNode(true);
  const loadingText = node.getAttribute('loading-text');
  const backgroundColor = node.getAttribute('loading-background');
  const customClass = node.getAttribute('loading-class');

  function setNode() {
    addClass(node, 'be-loading-position');
    node.appendChild(nodeDom);
    const mask = node.querySelector('.be-loading-mask');
    if (customClass) addClass(mask, customClass);
    setStyle(mask, 'background', backgroundColor);
    const textNode = node.querySelector('.loading-text');
    textNode.innerText = loadingText;
  }

  if (loading) {
    setNode();
  }

  return {
    update(loading) {
      if (loading) {
        setNode();
      }
      if (!loading) node.removeChild(nodeDom);
    },
    destroy(loading) {
      // node removed from DOM
    }
  };
}
