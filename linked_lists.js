class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.length === 0) return undefined;
		let temp = this.head;
		let pre = this.head;
		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp.value;
	}
	unshift(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	shift() {
		if (this.length === 0) return undefined;
		const temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}
	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}
		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
	}
	set(index, value) {
		const temp = this.get(index);
		if (temp) {
			temp.value = value;
		}
		return temp;
	}
	insert(index, value) {
		if (index === 0) return this.unshift(value);
		if (index === length) return this.push(value);
		if (index < 0 || index > this.length) return undefined;
		const pre = this.get(index - 1);
		const newNode = new Node(value);
		newNode.next = pre.next;
		pre.next = newNode;
		this.length++;
		return this;
	}
	remove(index) {
		if (index === 0) return this.shift();
		if (index === length - 1) return this.pop();
		if (index < 0 || index >= this.length) return undefined;
		const pre = this.get(index - 1);
		const temp = pre.next;
		pre.next = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}
	reverse() {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
	}
}
