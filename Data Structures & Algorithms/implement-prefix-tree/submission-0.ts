class PrefixTree {
    children: (PrefixTree | null)[];
    isEndOfWord: boolean;

    constructor() {
        this.children = Array(26).fill(null);
        this.isEndOfWord = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let curr: PrefixTree = this;

        for (const w of word) {
            let index = w.charCodeAt(0) - 'a'.charCodeAt(0);

            if (curr.children[index] === null) {
                curr.children[index] = new PrefixTree();
            }

            curr = curr.children[index];
        }
        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let curr: PrefixTree = this;

        for (const w of word) {
            const index = w.charCodeAt(0) - 'a'.charCodeAt(0);

            if (curr.children[index] === null) {
                return false;
            }

            curr = curr.children[index];
        }
        return curr.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let curr: PrefixTree = this;

        for (const p of prefix) {
            let index = p.charCodeAt(0) - 'a'.charCodeAt(0);

            if (curr.children[index] === null) {
                return false;
            }

            curr = curr.children[index];
        }
        return true;
    }
}
