var findBestValue = function(arr, target) {
    var n=arr.length
    var sort = quickSort(arr)
    var pre=0
    for(var i=0;i<n;i++){
        var s=pre+(n-i)*sort[i]
        if(s>=target){
            var val = Math.floor((target-pre)/(n-i))
            var sum_low = pre+val*(n-1)
            var sum_high=sum_low+n-i
            if(Math.abs(target-sum_low) <=Math.abs(sum_high-target)){
                return val
            }else{
                return val+1
            }
        }
        pre+=sort[i]
    }
    return sort[n-1]
};

var quickSort = function(arr) {
    　　if (arr.length <= 1) { return arr; }
    　　var pivotIndex = Math.floor(arr.length / 2);
    　　var pivot = arr.splice(pivotIndex, 1)[0];
    　　var left = [];
    　　var right = [];
    　　for (var i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return quickSort(left).concat([pivot], quickSort(right));
    }

console.log(findBestValue(
    [4,9,3],
    10
))