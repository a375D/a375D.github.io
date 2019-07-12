const assert = require('assert');
const request = require('supertest');
const expect = require('chai').expect;
const chai = require('chai');

host = '152.136.140.132'
server_url = host + ':8000'
hw_token = '1234567'

describe('Test', function() {
	describe('Part1', function() {
		it('Should get right answer', function(done) {
			request(server_url).post('/api/compute')
				.set('hw-token', hw_token)
				.field('firstParam', '1')
				.field('secondParam', '2')
				.field('type', 'ADD')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function(err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('ans');
					expect(res.body.ans).to.be.equal(3);
					done();
				});
		});
	});
	describe('Part2', function() {
		it('Should correctly store', function(done) {
			request(server_url).post('/api/pair')
			  .set('hw-token', hw_token)
			  .set('Content-Type', 'multipart/form-data')
              .field('name', 'key1')
              .field('key', 'I L0ve Web')
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
                done();
              });
		});
	});
	describe('Part3', function() {
		it('Should get right value', function(done) {
			request(server_url).get('/api/pair')
				.query({
					name: 'key1'
				})
			  	.set('hw-token', hw_token)
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function(err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('key');
					expect(res.body.key).to.be.equal('I L0ve Web');
					done();
				});
		});
	});
	describe('Part4', function() {
		it('Should correctly delete', function(done) {
			request(server_url).del('/api/pair')
			  .set('hw-token', hw_token)
			  .query({
			  	name: 'key1'
			  })
			  .expect(200)
        	  .end(function(err, res) {
          	  	if (err) return done(err);
          		done();
        	  });
		})
	});
	describe('Part5', function() {
		it ('Should return 404', function(done) {
			request(server_url).get('/api/pair')
				.query({
					name: 'Key1'
				})
				.set('hw-token', hw_token)
				.expect(404)
				.end(function(err, res) {
					if (err) return done(err);
					done();
				})
		})
	})
	describe('Part6', function() {
		it('Should get right answer', function(done) {
			request(server_url).post('/api/compute')
				.set('hw-token', hw_token)
				.field('firstParam', '5')
				.field('secondParam', '3')
				.field('type', 'SUB')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function(err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('ans');
					expect(res.body.ans).to.be.equal(2);
					done();
				});
		});
	});
	describe('Part7', function() {
		it('Should get right answer', function(done) {
			request(server_url).post('/api/compute')
				.set('hw-token', hw_token)
				.field('firstParam', '4')
				.field('secondParam', '9')
				.field('type', 'MUL')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function(err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('ans');
					expect(res.body.ans).to.be.equal(36);
					done();
				});
		});
	});
	describe('Part8', function() {
		it('Should get right answer', function(done) {
			request(server_url).post('/api/compute')
				.set('hw-token', hw_token)
				.field('firstParam', '5')
				.field('secondParam', '2')
				.field('type', 'DIV')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function(err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('ans');
					expect(res.body.ans).to.be.equal(2);
					done();
				});
		});
	});
	describe('Part9', function() {
		it('Should correctly delete', function(done) {
			request(server_url).del('/api/pair')
			  .set('hw-token', hw_token)
			  .query({
			  	name: 'key1'
			  })
			  .expect(404)
        	  .end(function(err, res) {
          	  	if (err) return done(err);
          		done();
        	  });
		})
	});
});
