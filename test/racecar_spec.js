var expect = require('chai').expect,

  Racecar = require('../lib/racecar').Racecar;

describe ('Racecar object Testing', function() {
  var racecar;

  beforeEach(function() {
    racecar = new Racecar(200, "Buzz Lightyear");
  });

  describe('racecar object should be truthy(exist)', function(){
    it('racecar should be truthy(exist)', function() {
      expect(racecar).to.be.ok;
    });

    it('racecar should have driver', function(){
      expect(racecar.getDriver()).to.equal('Buzz Lightyear');
    });

    it('racecar should have max speed', function(){
      expect(racecar.getMaxSpeed()).to.equal(200);
    });

    it('should be able to change maxspeed through setter method', function(){
      racecar.setMaxSpeed(500);
      expect(racecar.getMaxSpeed(500)).to.equal(500);
    });

    it('should be able to change Driver through getter method', function(){
      racecar.setDriver("Margaret Jammer");
      expect(racecar.getDriver()).to.equal('Margaret Jammer');
    });
  });
});
