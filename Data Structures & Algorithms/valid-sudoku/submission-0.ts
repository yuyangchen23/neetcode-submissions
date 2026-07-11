class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        const colCheck = Array.from({ length: 9 }, () => new Set<string>());
        const squareCheck = new Map<string, string[]>();

        for (let i = 0; i < board.length; i++) {

            let rowCheck = new Set<string>();

            for (let j = 0; j < board.length; j++) {

                const val = board[i][j];
                if (val === ".") continue;

                // column check
                if (colCheck[j].has(val)) {
                    return false;
                }
                colCheck[j].add(val);

                // row check
                if (rowCheck.has(val)) {
                    return false;
                }
                rowCheck.add(val);

                // square check
                const boxKey = `${Math.floor(i / 3)} - ${Math.floor(j / 3)}`;

                let boxArr = squareCheck.get(boxKey);

                if (!boxArr) {
                    boxArr = [];
                    squareCheck.set(boxKey, boxArr);
                }

                if (boxArr.includes(val)) {
                    return false;
                }

                boxArr.push(val);
            }
        }
        return true;
    }
}
