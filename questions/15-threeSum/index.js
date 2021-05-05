import { quickSort } from '../../utils/array'
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 export const threeSum = function(nums) {
    // 边界case
    if(nums.length < 3) return []

    var arr = quickSort(nums)
    var res = []
    for(var i=0;i<arr.length - 2;i++){
        if(arr[i]>0)break
        if(i>0 && arr[i] == arr[i-1])continue
        var j=i+1,k=arr.length-1
        while(j<k){
            var s = arr[i]+arr[j]+arr[k]
            if(s<0){
                j++
                while(j<k && arr[j]==arr[j-1])j++
            }else if(s>0){
                k--
                while(j<k && arr[k+1]==arr[k])k--
            }else{
                res.push([arr[i],arr[j],arr[k]])
                j++
                k--
                while(j<k && arr[j]==arr[j-1])j++
                while(j<k && arr[k]==arr[k+1])k--
            }
        }
    }
    return res
}