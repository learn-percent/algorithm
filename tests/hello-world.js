import helloWorld from '../homework/variables-n-functions/hello-world.js'
import { describe, it } from 'mocha'
import sinon from 'sinon'
import 'chai/register-should.js';

describe('- Homework hello-world', () => {
	it('Should log "Hello World!"',() => {
		const spy = sinon.spy(console, 'log')
		helloWorld()

		spy.callCount.should.equal(1)
		spy.firstCall.args[0].should.equal('Hello World!')
		spy.restore()
	})
})