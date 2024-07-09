import checkOdd from '../homework/conditional/check-odd.js'
import { describe, it } from 'mocha'
import 'chai/register-should.js';

describe('- Homework check-odd', () => {
	it('Should return false when given 2',() => {
		const result = checkOdd(2)
		result.should.equal(false)
	})
	it('Should return true when given 3',() => {
		const result = checkOdd(3)
		result.should.equal(true)
	})
})