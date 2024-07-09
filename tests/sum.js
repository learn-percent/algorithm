import sum from '../homework/variables-n-functions/sum.js'
import { describe, it } from 'mocha'
import 'chai/register-should.js';

describe('- Homework sum', () => {
	it('Should return 7 given arguments 5 and 2',() => {
		const result = sum(5, 2)
		result.should.equal(7)
	})
	it('Should return 7 given arguments 2 and 5',() => {
		const result = sum(2, 5)
		result.should.equal(7)
	})
	it('Should return 2 given arguments 1 and 1',() => {
		const result = sum(1, 1)
		result.should.equal(2)
	})
	it('Should return 0 given arguments 1 and -1',() => {
		const result = sum(1, -1)
		result.should.equal(0)
	})
})