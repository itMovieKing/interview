/**
 * 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/**
 * 仅遍历num2就行，只需要在num1中找到对应位置插入num2的元素就行
 */
var merge = function(nums1, m, nums2, n) {
  let i = m + n - 1 // 总下标
  let j = m - 1 // nums1下标
  let k = n - 1 // nums2下标
  while(k >= 0) {
    
      if(j >= 0 && nums1[j] > nums2[k]) {
          nums1[i] = nums1[j]
          j--;
          i--;
      } else {
          nums1[i] = nums2[k];
          k--;
          i--;
      }
  }
  return nums1
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))