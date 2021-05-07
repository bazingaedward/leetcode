1. 边界case：空数组
2. 小数据优化【可选】
3. 二分变量定义
4. 二分查找：注意判断条件及边界+-1
5. 边界case：未找到

```javascript
var search = function(nums, target) {
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
```