import checkLeapYear from '../homework/conditional/check-leap-year.js'
import { describe, it } from 'mocha'
import 'chai/register-should.js';

describe('- Homework check-leap-yeal', () => {
	it('Should return true when given 2024',() => {
		const result = checkLeapYear(2024)
		result.should.equal(true)
	})
	it('Should return false when 2025',() => {
		const result = checkLeapYear(2025)
		result.should.equal(false)
	})

})