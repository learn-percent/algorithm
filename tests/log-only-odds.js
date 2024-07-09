import logOnlyOdds from '../homework/loop/log-only-odds.js'
import { describe, it } from 'mocha'
import sinon from 'sinon'
import 'chai/register-should.js';

describe('- Homework log-only-odds', () => {

	let spy
	beforeEach(() => {
		spy = sinon.spy(console, 'log')
	})
	afterEach(() => {
		spy.restore()
	})
	it('Should log (1), (3), (5), (7), (9) when given 10',() => {
		logOnlyOdds(10)

		spy.callCount.should.equal(5)
		spy.args[0][0].should.equal(1)
		spy.args[1][0].should.equal(3)
		spy.args[2][0].should.equal(5)
		spy.args[3][0].should.equal(7)
		spy.args[4][0].should.equal(9)
	})
})