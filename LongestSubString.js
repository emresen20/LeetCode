// Given a string s, find the length of the longest 
// substring
//  without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLenght= 0;
    let start=0;
    let map = new Set();

    for(i= 0; i<s.length; i++){
        let char= s[i];
        while(map.has(char)){
            map.delete(s[start])
            start++
        }
        map.add(char)
        maxLenght= Math.max(maxLenght,i-start +1 );


    }
    return maxLenght;
};