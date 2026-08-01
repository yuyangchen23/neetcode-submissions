class MinStack {

    private items: number[] = [];
    private minStack: number[] = [];

    constructor() {
        this.items = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.items.push(val);

        const currentMin = this.minStack.length > 0 
        ? Math.min(val, this.minStack[this.minStack.length - 1])
        : val;

        this.minStack.push(currentMin);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.items.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        if (this.items.length !== 0) {
            return this.items[this.items.length - 1];
        }
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
