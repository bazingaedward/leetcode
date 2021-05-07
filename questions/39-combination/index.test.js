/**
 * 15
 */
import { expect } from '@jest/globals'
import {combinationSum} from './index'

describe('search', ()=>{
    it("1", ()=>{
        const res = combinationSum([2,3,6,7],7)
        expect(res).toEqual([
            [7],
            [2,2,3],
        ])
    })
})