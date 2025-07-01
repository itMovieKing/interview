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
    return major
};

/**
 * *给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 * !分析，最多有两个这样的数
 * 所以这会是三个阵营，a，b和其他
 * 
 * !这里注意，正确的摩尔投票算法需要先判断是否候选人，都没有才给分配
 * ?思路：
 * 1. 先找出投票数最多的候选人
 * 判断num是否为候选人，是的话给对应的候选人计票+1，不是的话就抵消掉
 * 2.遍历出候选人的真正票数，判断是否符合大于n/3
 * */ 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let count1 = 0, major1 = null
  let count2 = 0, major2 = null
 
  for(let num of nums) {
   if(num == major1) {
    count1++
   } else if(num == major2) {
    count2++
   } else if(count1 == 0) {
    major1 = num
    count1 = 1
   } else if(count2 == 0) {
    major2 = num
    count2 = 1
   } else {
    count1--
    count2--
   }
  } 
  
  // !注意这里不能直接用刚刚的数来判断，是因为这里是剩下的票数，不是真正的票数
  count1 = 0
  count2 = 0
  for (let num of nums) {
    if (num === major1) count1++;
    else if (num === major2) count2++;
  }

  const res = [];
  if (count1 > nums.length / 3) res.push(major1);
  if (count2 > nums.length / 3) res.push(major2);
  return res;
};
/**
 * !总结
 * 摩尔投票算法，先假设一定会有赢家
 * 可以理解为打擂台
 * 擂台上一定会有人在
 * 有人支持血条加1，有人反对血条减1，血条清空之后换人
 * !但是需要验证，因为我们假设了有赢家，但可能不存在赢家
 */