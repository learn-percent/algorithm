import subtraction from '../homework/variables-n-functions/subtraction.js'
import { describe, it } from 'mocha'
import 'chai/register-should.js';

describe('- Homework subtraction', () => {
	it('Should return 3 given arguments 5 and 2',() => {
		const result = subtraction(5, 2)
		result.should.equal(3)
	})
	it('Should return -3 given arguments 2 and 5',() => {
		const result = subtraction(2, 5)
		result.should.equal(-3)
	})
	it('Should return 0 given arguments 1 and 1',() => {
		const result = subtraction(1, 1)
		result.should.equal(0)
	})
	it('Should return 2 given arguments 1 and -1',() => {
		const result = subtraction(1, -1)
		result.should.equal(2)
	})
})