import sumAllValuesBefore from '../homework/loop/sum-all-values-before.js'
import { describe, it } from 'mocha'
import 'chai/register-should.js';

describe('- Homework sum-all-values-before', () => {
	it('Should return 6 given 3',() => {
		const result = sumAllValuesBefore(3)
		result.should.equal(6)
	})
	it('Should return 55 given 10',() => {
		const result = sumAllValuesBefore(10)
		result.should.equal(55)
	})

})