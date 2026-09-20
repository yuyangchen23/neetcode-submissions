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

        while (maxHeap.size() >= 2) {
            let larger = maxHeap.pop();
            let smaller = maxHeap.pop();
            maxHeap.enqueue(larger - smaller);
        }

        if (maxHeap.size() === 0) {
            return 0;
        } else {
            return maxHeap.pop();
        }
    }
}
