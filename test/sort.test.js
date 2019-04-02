const expect = require('chai').expect;
const sort = require('../sort.js');

describe('Sort Function', ()=>{
    it('should return an array of numbers in ascending order', ()=>{
        expect(sort([6,5,4,3,2,1])).to.deep.equal([1,2,3,4,5,6])
    })
    it('should return an array of letters in ascending order', ()=>{
        expect(sort(['a','c','f','b'])).to.deep.equal(['a','b','c','f'])
    })
    it('should sort negative numbers',()=>{
        expect(sort([-1,-2,-3,-4])).to.deep.equal([-4,-3,-2,-1])
    })
})