/**
 * 15
 */
import { expect } from '@jest/globals'
import {search} from './index'

describe('search', ()=>{
    it("[4,5,6,7,0,1,2]", ()=>{
        const res = search([4,5,6,7,0,1,2],0)
        expect(res).toEqual(4)
    })
    it("[4,5,6,7,0,1,2]", ()=>{
        const res = search([4,5,6,7,0,1,2],3)
        expect(res).toEqual(-1)
    })
    it("[4,5,6,7,0,1,2]", ()=>{
        const res = search([4,5,6,7,0,1,2],2)
        expect(res).toEqual(6)
    })
    it("[9,0,2,7,8]", ()=>{
        const res = search([9,0,2,7,8],3)
        expect(res).toEqual(-1)
    })
})