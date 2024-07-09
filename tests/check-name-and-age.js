import checkNameAndAge from '../homework/conditional/check-name-and-age.js'
import { describe, it } from 'mocha'
import 'chai/register-should.js';

describe('- Homework check-name-and-nage', () => {
	it('Should return true when given Peach and 25',() => {
		const result = checkNameAndAge('Peach', 25)
		result.should.equal(true)
	})
	it('Should return true when given Peach and 26',() => {
		const result = checkNameAndAge('Peach', 26)
		result.should.equal(true)
	})
	it('Should return false when given Peach and 24',() => {
		const result = checkNameAndAge('Peach', 24)
		result.should.equal(false)
	})
	it('Should return true when given Luigi and 25',() => {
		const result = checkNameAndAge('Luigi', 25)
		result.should.equal(true)
	})
	it('Should return true when given Luigi and 21',() => {
		const result = checkNameAndAge('Luigi', 21)
		result.should.equal(true)
	})
	it('Should return false when given Luigi and 20',() => {
		const result = checkNameAndAge('Luigi', 20)
		result.should.equal(false)
	})
	it('Should return true when given Mario and 25',() => {
		const result = checkNameAndAge('Mario', 28)
		result.should.equal(true)
	})
	it('Should return true when given Mario and 21',() => {
		const result = checkNameAndAge('Mario', 29)
		result.should.equal(true)
	})
	it('Should return false when given Mario and 20',() => {
		const result = checkNameAndAge('Mario', 25)
		result.should.equal(false)
	})
})