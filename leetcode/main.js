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
      if(nums[left] === nums[right]) {
          right++
      } else{
        // left应该是指向不重复的最后一项，所以被覆盖的应该是left的下一个位置
          nums[left] = nums[right]
          left++
          right++
      }
  }
  return left
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4])