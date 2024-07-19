export default class Store {
	subscribe = []; // 订阅方法
	options = [];
	level = 0;
	config = {
		value: 'value',
		label: 'label',
		children: 'children'
	};
	// hasChildren: boolean = true
	defaultValue = [];
	value = [];
	label = [];
	menus = [];
	checkStrictly = false;
	showAllLevels = true;
	lazy = false;

	constructor(data, props) {
		this.config = { ...this.config, ...props.config };
		this.options = data;
		this.defaultValue = props.value;
		this.lazy = props.lazy;
		this.checkStrictly = props.checkStrictly;
		this.init();
	}

	init() {
		if (this.defaultValue) {
			if (Array.isArray(this.defaultValue) && this.defaultValue.length !== 0) {
				this.initMenuByPath(this.options, this.defaultValue[this.defaultValue.length - 1]);
			} else {
				this.initMenuByPath(this.options, this.defaultValue);
			}
			// 如果有初始值，但是初始值与实际值不符，不展示所有级联，只展示一级。
			if (this.menus.length == 0) {
				this.level = 0;
				this.setMenu(this.options);
			}
		} else {
			this.setMenu(this.options);
		}
	}

	// 根据初始值找当前选中的label和需要展示的级联
	initMenuByPath(list, val, level = 0) {
		if (!list || list.length === 0) return false;
		level++;
		for (let i = 0; i < list.length; i++) {
			const item = list[i];
			if (item[this.config.value] === val) {
				this.label.push(item[this.config.label]);
				this.value.push(item[this.config.value]);
				this.menus.push(this.flatten(list, level));

				return true;
			}
			if (this.initMenuByPath(item[this.config.children], val, level)) {
				this.label.unshift(item[this.config.label]);
				this.value.unshift(item[this.config.value]);
				this.menus.unshift(this.flatten(list, level));
				return true;
			}
		}
		return false;
	}

	// 设置每层列表的level
	flatten(arr, level) {
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			const item = arr[i];
			item.level = level;
			result.push(item);
		}
		return result;
	}

	// 设置当前点击状态
	setCurrent(items) {
		const step = items.level !== this.level ? 2 : 1;
		this.value = this.value.slice(0, this.level - step);
		this.label = this.label.slice(0, this.level - step);
		this.value.push(items[this.config.value]);
		this.label.push(items[this.config.label]);
		// console.log(this.level - step, this.value, items.value);
		// this.value.splice(this.level - step, this.value.length - 1, items.value)
		// this.label.splice(this.level - step, this.label.length - 1, items.label)
		// console.log(this.label, this.value);
	}

	clear() {
		this.value = [];
		this.label = [];
		this.level = 0;
		this.defaultValue = [];
		this.setMenu(this.options);
	}

	// 设置当前级联面板
	setMenu(data, key) {
		this.menus = this.menus.slice(0, this.level);
		if (this.lazy) {
			const _menu = this.menus[this.menus.length - 1] || [];
			_menu.forEach(item => {
				if (item[this.config.value] == key) {
					item[this.config.children] = data;
				}
				// item.loading = false
			});
		}
		data = this.flatten(data, ++this.level);
		this.menus.push(data);
	}

	getMenus() {
		return this.menus;
	}

	// 通知集合改变
	publishHandle(item) {
		this.subscribe.forEach(cb => cb(item));
	}
}
