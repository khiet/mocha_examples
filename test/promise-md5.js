var promiseMd5 = require('../promise-md5');
var chai = require('chai');
var expect = require('chai').expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('#promiseMd5()', function () {

  context('with string argument', function () {
    it('should compute MD5 hash', function () {
      expect(
        promiseMd5('Glad Chinda')
      ).to.eventually.be
        .a('string')
        .that.matches(/^[a-f0-9]{32}$/)
        .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
    })
  })

  context('with non-string argument', function () {
    it('should throw an error', function () {

      expect(
        promiseMd5(12345)
      ).to.be.rejectedWith(
        TypeError,
        'The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type number (12345)'
      );

    })
  })

})
