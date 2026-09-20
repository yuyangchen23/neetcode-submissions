class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
        const res = [];

        for (const [x, y] of points) {
            let d = (x ** 2) + (y ** 2);
            maxHeap.enqueue([d, [x, y]]);
        }

        while (maxHeap.size() > k) {
            maxHeap.pop();
        }

        while (maxHeap.size() > 0) {
            let temp = maxHeap.pop();
            res.push(temp[1]);
        }

        return res;
    }
}
