/**
 * 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m + n - 1 // 总下标
  let j = m - 1 // nums1下标
  let k = n - 1 // nums2下标
  while(i >= 0) {
      if(nums1[j] > nums2[k]) {
          nums1[i] = nums1[j]
          console.log('1 > 2',nums1)
          j--;
          i--;
      } else {
          nums1[i] = nums2[k];
          console.log(nums1)
          k--;
          i--;
      }
  }
  return nums1
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))