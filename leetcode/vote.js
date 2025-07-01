/**
 * *摩尔投票算法
 * !分析：假设一定会出现一个大于n/2的数，
 * 如果要找出这个数m，其实就是只有两个阵营，一个这个数m，另外全是其他
 * 
 * !思路：
 * 给定一个计数器，和一个指向m的指针
 * 计数器为m的票数
 * 当计数器为0 的时候，指针指向当前元素，
 * 当前元素为等于m的时候，计数器加一
 * 当前元素不为m的时候，计数器减一
 */

/**
 * *给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, major = nums[0]
    for(let i = 0; i < nums.length; i++) {
      if(count === 0) {
        major = nums[i]
        count++
        continue
      }
      if(nums[i] === major) {
        count++
      } else {
        count--
      }
    } 
    if(count > nums.length / 2) {
      return major
    } else {
      return null
    }
    
};

