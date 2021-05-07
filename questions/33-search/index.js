/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 export const search = function(nums, target) {
    if(!nums.length) return -1
    if(nums.length <= 4) return nums.findIndex(i=>i==target)
    var l=0,r=nums.length-1,m=Math.floor(nums.length/2)
    while(l<r){
        if(nums[m]==target) return m
        if(nums[l]==target) return l
        if(nums[r]==target) return r
        if(nums[m]>nums[l]){
            if(target<=nums[m] && target>=nums[l]){
                r=m-1
                m=Math.floor((l+r)/2)
            }else{
                l=m+1
                m=Math.floor((l+r)/2)
            }
        }else{
            if(nums[m]<=target&&target<=nums[r]){
                l=m+1
                m=Math.floor((l+r)/2)
            }else{
                r=m-1
                m=Math.floor((l+r)/2)
            }
        }
    }
    return -1
};