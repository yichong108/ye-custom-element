export default class RadioStore {
	constructor(options) {
		this.subscribe = []; // 订阅方法
		this.current = undefined;
		this.size = undefined;
		this.disabled = false;
		this.textColor = undefined;
		this.fill = undefined;

		for (let option in options) {
			if (options.hasOwnProperty(option)) {
				this[option] = options[option];
			}
		}

		this.subscribe = options.subscribe || [];
	}

	// 设置选中
	setChecked(item) {
		this.current = item;
		this.publishHandle();
	}

	// 是否选中
	isChecked(label) {
		return this.current === label;
	}

	// 通知集合改变
	publishHandle() {
		this.subscribe.forEach(cb => cb(this.current));
	}

	// 清空
	clear() {
		this.current = '';
		this.publishHandle();
	}
}
