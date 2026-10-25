class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    dfs(grid: number[][], r: number, c: number): number {
        const row = grid.length;
        const col = grid[0].length;

        if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === 0)     {
            return 0;
        }

        grid[r][c] = 0;
        let count = 1;
        
        const directions = [[0,1], [1,0], [-1,0], [0,-1]];

        for (const [dr, dc] of directions) {
            count += this.dfs(grid, r + dr, c + dc);
        }
        return count;
    }
    
    maxAreaOfIsland(grid: number[][]): number {
        if (!grid || grid.length === 0) {
            return 0;
        }

        const row = grid.length;
        const col = grid[0].length;
        let max_area: number = 0;

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] === 1) {
                    let currentMax = this.dfs(grid, i, j);
                    if (currentMax > max_area) {
                        max_area = currentMax;
                    }
                }
            }
        }

        return max_area;
    }
}
