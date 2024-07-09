import sayHiToPerson from '../homework/variables-n-functions/say-hi-to-person.js'
import { describe, it } from 'mocha'
import sinon from 'sinon'
import 'chai/register-should.js';

describe('- Homework say-hi-to-person', () => {
	let spy
	beforeEach(() => {
		spy = sinon.spy(console, 'log')
	})
	afterEach(() => {
		spy.restore()
	})
	it('Should log "Hi Marcy!"',() => {
		sayHiToPerson('Marcy')

		spy.callCount.should.equal(1)
		spy.firstCall.args[0].should.equal('Hi Marcy!')
	})
	it('Should log "Hi Foo!"',() => {
		sayHiToPerson('Foo')

		spy.callCount.should.equal(1)
		spy.firstCall.args[0].should.equal('Hi Foo!')
	})
})