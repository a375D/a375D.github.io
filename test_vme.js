const assert = require('assert');
const request = require('supertest');
const expect = require('chai').expect;
const chai = require('chai');

host = '152.136.140.132'
server_url = host + ':8000'
hw_token = 'KYPLZPAFKPRDKCNHTBLGTRSBVI'

describe('Test', function () {
	describe('Part1_1', function () {
		it('Should get right answer', function (done) {
			request(server_url).post('/api/compute')
				.set('hw-token', hw_token)
				.field('firstParam', '591')
				.field('secondParam', '-91')
				.field('type', 'ADD')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('ans');
					expect(res.body.ans).to.be.equal(500);
					done();
				});
		});
	});
	describe('Part1_2', function () {
		it('Should get right answer', function (done) {
			request(server_url).post('/api/compute')
				.set('hw-token', hw_token)
				.field('firstParam', '500')
				.field('secondParam', '-91')
				.field('type', 'SUB')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('ans');
					expect(res.body.ans).to.be.equal(591);
					done();
				});
		});
	});
	describe('Part1_3', function () {
		it('Should get right answer', function (done) {
			request(server_url).post('/api/compute')
				.set('hw-token', hw_token)
				.field('firstParam', '500')
				.field('secondParam', '-91')
				.field('type', 'MUL')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('ans');
					expect(res.body.ans).to.be.equal(-45500);
					done();
				});
		});
	});
	describe('Part1_4', function () {
		it('Should get right answer', function (done) {
			request(server_url).post('/api/compute')
				.set('hw-token', hw_token)
				.field('firstParam', '50000')
				.field('secondParam', '-3')
				.field('type', 'DIV')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('ans');
					expect(res.body.ans).to.be.equal(-16667);
					done();
				});
		});
	});
	describe('Part1_5', function () {
		it('403', function (done) {
			request(server_url).post('/api/compute')
				.field('firstParam', '50000')
				.field('secondParam', '-3')
				.field('type', 'MUL')
				.expect(403)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					done();
				});
		});
	});
	describe('Part2_1', function () {
		it('404', function (done) {
			request(server_url).get('/api/pair')
				.query({
					name: 'name1'
				})
				.set('hw-token', hw_token)
				.expect(404)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					done();
				});
		});
	});
	describe('Part2_2', function () {
		it('403', function (done) {
			request(server_url).get('/api/pair')
				.query({
					name: 'name1'
				})
				.set('hw-token', 'sdasd')
				.expect(403)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					done();
				});
		});
	});
	describe('Part3_1', function () {
		it('403', function (done) {
			request(server_url).del('/api/pair')
				.set('hw-token', 2313)
				.query({
					name: 'name3'
				})
				.expect(403)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part3_2', function () {
		it('404', function (done) {
			request(server_url).del('/api/pair')
				.set('hw-token', hw_token)
				.query({
					name: 'name3'
				})
				.expect(404)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part4_1', function () {
		it('Should correctly store', function (done) {
			request(server_url).post('/api/pair')
				.set('hw-token', hw_token)
				.set('Content-Type', 'multipart/form-data')
				.field('name', 'name2')
				.field('key', 'key2')
				.expect(200)
				.end(function (err, res) {
					if (err) throw err;
					done();
				});
		});
	});
	describe('Part4_2', function () {
		it('Should correctly store', function (done) {
			request(server_url).post('/api/pair')
				.set('hw-token', hw_token)
				.set('Content-Type', 'multipart/form-data')
				.field('name', 'name3')
				.field('key', 'key4')
				.expect(200)
				.end(function (err, res) {
					if (err) throw err;
					done();
				});
		});
	});
	describe('Part4_3', function () {
		it('Should correctly store', function (done) {
			request(server_url).post('/api/pair')
				.set('hw-token', hw_token)
				.set('Content-Type', 'multipart/form-data')
				.field('name', 'name1')
				.field('key', 'key1')
				.expect(200)
				.end(function (err, res) {
					if (err) throw err;
					done();
				});
		});
	});
	describe('Part4_4', function () {
		it('Should correctly store', function (done) {
			request(server_url).post('/api/pair')
				.set('hw-token', hw_token)
				.set('Content-Type', 'multipart/form-data')
				.field('name', 'name3')
				.field('key', 'key3')
				.expect(200)
				.end(function (err, res) {
					if (err) throw err;
					done();
				});
		});
	});
	describe('Part4_5', function () {
		it('403', function (done) {
			request(server_url).post('/api/pair')
				.set('Content-Type', 'multipart/form-data')
				.field('name', 'name4')
				.field('key', 'key4')
				.expect(403)
				.end(function (err, res) {
					if (err) throw err;
					done();
				});
		});
	});
	describe('Part5_1', function () {
		it('should delete', function (done) {
			request(server_url).del('/api/pair')
				.set('hw-token', hw_token)
				.query({
					name: 'name3'
				})
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part5_2', function () {
		it('404', function (done) {
			request(server_url).get('/api/pair')
				.set('hw-token', hw_token)
				.query({
					name: 'name3'
				})
				.expect(404)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part5_3', function () {
		it('Should correctly store', function (done) {
			request(server_url).post('/api/pair')
				.set('hw-token', hw_token)
				.set('Content-Type', 'multipart/form-data')
				.field('name', 'name3')
				.field('key', 'key3')
				.expect(200)
				.end(function (err, res) {
					if (err) throw err;
					done();
				});
		});
	});
	describe('Part5_4', function () {
		it('should get', function (done) {
			request(server_url).get('/api/pair')
				.query({
					name: 'name3'
				})
				.set('hw-token', hw_token)
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('key');
					expect(res.body.key).to.be.equal('key3');
					done();
				});
		});
	});
	describe('Part5_5', function () {
		it('should delete', function (done) {
			request(server_url).del('/api/pair')
				.set('hw-token', hw_token)
				.query({
					name: 'name3'
				})
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part5_6', function () {
		it('404', function (done) {
			request(server_url).del('/api/pair')
				.set('hw-token', hw_token)
				.query({
					name: 'name3'
				})
				.expect(404)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part5_7', function () {
		it('403', function (done) {
			request(server_url).post('/api/pair')
				.set('Content-Type', 'multipart/form-data')
				.field('name', 'name3')
				.field('key', 'key3')
				.expect(403)
				.end(function (err, res) {
					if (err) throw err;
					done();
				});
		});
	});
	describe('Part5_8', function () {
		it('403', function (done) {
			request(server_url).del('/api/pair')
				.query({
					name: 'name3'
				})
				.expect(403)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part5_9', function () {
		it('should del', function (done) {
			request(server_url).del('/api/pair')
				.set('hw-token', hw_token)
				.query({
					name: 'name2'
				})
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part5_10', function () {
		it('403', function (done) {
			request(server_url).del('/api/pair')
				.query({
					name: 'name1'
				})
				.expect(403)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
	describe('Part5_11', function () {
		it('should get', function (done) {
			request(server_url).get('/api/pair')
				.query({
					name: 'name1'
				})
				.set('hw-token', hw_token)
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200)
				.end(function (err, res) {
					if (err) {
						console.log(err)
						throw err;
					}
					expect(res.body).to.include.keys('key');
					expect(res.body.key).to.be.equal('key1');
					done();
				});
		});
	});
	describe('Part5_12', function () {
		it('should del', function (done) {
			request(server_url).del('/api/pair')
				.query({
					name: 'name1'
				})
				.set('hw-token', hw_token)
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});
		})
	});
});
