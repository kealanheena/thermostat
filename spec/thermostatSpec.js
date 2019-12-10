describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a default temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase temperature by 1", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease temperature by 1", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should throw error if you try to drop temperature below zero", function() {
    for(i = 0; i < 10; i++) {
      thermostat.down();
    }
    
    expect(function() {
      thermostat.down();
    }).toThrowError("Temperature too low");
  
  });

});
