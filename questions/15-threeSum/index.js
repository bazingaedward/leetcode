import { quickSort } from '../../utils/array'
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 export const threeSum = function(nums) {
    var arr = quickSort(nums)
    var res = []
    for(var i=0;i<arr.length - 2;i++){
        var j=i+1,k=arr.length-1
        while(j<k){
            var s = arr[i]+arr[j]+arr[k]
            if(s<0){
                while(j<k && arr[j]==arr[j+1])j++
            }else if(s>0){
                while(j<k && arr[k-1]==arr[k])k--
            }else{
                res.push([
                    arr[i],
                    arr[j],
                    arr[k]
                ])
            }
        }
    }
    return res
}