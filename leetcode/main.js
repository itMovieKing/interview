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

/**
 * 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 快慢指针解法
// 快指针遍历数组，当快指针指向的元素不等于val时，赋值给慢指针，且快慢指针都加一，
// 当快指针指向元素不等于val时，快指针加一，满指针不动
var removeElement = function(nums, val) {
  let left = 0; 
  let right = 0;
  while(right < nums.length) {
    if(nums[right]  !== val) {
      nums[left] = nums[right]
      left++
      right++
    } else {
      right++
    }
  }
  return left
};


/**
 * 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 * 
 */

// 依旧是快慢指针

var removeDuplicates = function(nums) {
  let left = 0; 
  let right = 0;
  while(right < nums.length) {
    // left指向最后一个不重复元素，所以不重复的时候赋值给他的下一位
      if(nums[left] !== nums[right]) {
        nums[++left] = nums[right]
      }
      right++
  }
  // 最后要返回的是不重复元素的个数，当前left指向是下标
  return left + 1
};
removeDuplicates([1,1,2])