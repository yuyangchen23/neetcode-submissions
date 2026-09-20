class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let maxHeap: any = new MaxPriorityQueue();

        for (const s of stones) {
            maxHeap.enqueue(s);
        }

        while (maxHeap.size() > 1) {
            maxHeap.enqueue(maxHeap.pop() - maxHeap.pop());
        }

        return maxHeap.pop();
    }
}
