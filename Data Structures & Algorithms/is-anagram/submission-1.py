class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)): 
            return False

        countAna = {}

        for i in range(len(s)):
            countAna[s[i]] = countAna.get(s[i], 0) + 1

            countAna[t[i]] = countAna.get(t[i], 0) - 1

        for key in countAna:
            if countAna[key] != 0: 
                return False

        return True