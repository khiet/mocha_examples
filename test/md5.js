var md5 = require('../md5');
var expect = require('/usr/local/lib/node_modules/chai').expect;

describe('#md5()', function () {

  context('with string argument', function () {
    it('should compute MD5 hash', function (done) {

      md5('Glad Chinda', function (err, hash) {
        if (err) {
          return done(err);
        }

        expect(hash)
          .to.be.a('string')
          .that.matches(/^[a-f0-9]{32}$/)
          .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');

        done();
      });
    })
  })

  context('with non-string argument', function () {
    it('should throw an error', function (done) {

      md5(12345, function (err, hash) {
        expect(function () {throw err})
          .to.throw(TypeError, 'The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type number (12345)');

        done();
      })
    })
  })

})
