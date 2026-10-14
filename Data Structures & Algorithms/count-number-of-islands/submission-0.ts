class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    private dfs(grid: string[][], r: number, c: number): void {
        let rows = grid.length;
        let cols = grid[0].length;

        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
            return;
        }

        grid[r][c] = "0";

        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (const [dr, dc] of directions) {
            this.dfs(grid, r + dr, c + dc)
        }

    }
    numIslands(grid: string[][]): number {
        if (!grid || grid.length === 0) {
            return 0;
        }

        let rows = grid.length;
        let cols = grid[0].length;
        let islands = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === "1") {
                    islands++;
                    this.dfs(grid, i, j);
                }
            }
        }

        return islands;
    }
}
