/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export const combinationSum = function(candidates, target) {
    var res=[]
    const dfs=(t,comb,idx)=>{
        if(idx >= candidates.length)return
        if(t==0){
            res.push(comb)
            return
        }
        dfs(t,comb, idx+1)
        var t2=t-candidates[idx]
        if(t2 >= 0){
            dfs(t2,[...comb,candidates[idx]], idx)
        }
    }
    dfs(target,[],0)
    return res
};