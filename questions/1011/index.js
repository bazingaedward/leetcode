/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
//  var shipWithinDays = function(weights, D) {
    var weights = [1,2,3,1,1]
    var D = 4
    if(!weights.length || D<1)return 0
    var max = Math.max(...weights)
    var sum = weights.reduce((s,i)=>s+i, 0)
    if(sum <=0)return 0
    var ceil = Math.ceil(sum/D)
    if(ceil<=max)ceil=max
    // 加顺序限制
    while(true){
        var l=[0]
        for(var i=0;i<weights.length;i++){
            if(l[l.length-1]+weights[i] <= ceil){
             l[l.length-1] = l[l.length-1]+weights[i]   
            }else{
                l.push(weights[i])
            }
        }
        console.log(l)
        if(l.length > D){
            ceil++
        }

        if(l.length===D){
            break
        }
    }
// };

// shipWithinDays([361,321,186,186,67,283,36,471,304,218,60,78,149,166,282,384,61,242,426,275,236,221,27,261,487,90,468,19,453,241],15)