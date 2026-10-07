class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        res = []
        i = 1
        n = len(intervals)

        intervals.sort(key=lambda x: x[0])
        temp = intervals[0]
        
        while (i < n):
            if (intervals[i][0] <= temp[1]):
                temp = [min(temp[0], intervals[i][0]), max(temp[1], intervals[i][1])]
            else:
                res.append(temp)
                temp = intervals[i]
            i += 1

        res.append(temp)
        return res
            
            
            
        