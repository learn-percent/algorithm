import checkEqual from '../homework/conditional/check-equal.js'
import { describe, it } from 'mocha'
import 'chai/register-should.js';

describe('- Homework check-equal', () => {
	it('Should return true when given 2 and 2',() => {
		const result = checkEqual(2, 2)
		result.should.equal(true)
	})
	it('Should return false when given 3 and 2',() => {
		const result = checkEqual(3, 2)
		result.should.equal(false)
	})
	it('Should return false when given "2" and 2',() => {
		const result = checkEqual("2", 2)
		result.should.equal(false)
	})
})