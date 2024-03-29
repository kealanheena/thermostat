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

  it("should throw error if you try to drop temperature below ten", function() {
    let thermostat = new Thermostat(10);

    expect(function() {
      thermostat.down();
    }).toThrowError("Temperature already at minimum");
  });

  describe("In 'Power Saving Mode'", function() {

    it("should have power saving on by default", function() {
      expect(thermostat.isPowerSaving).toEqual(true);
    });

    it("should turn power saving off", function() {
      thermostat.togglePowerSaving();
      expect(thermostat.isPowerSaving).toEqual(false);
    });

    it("should have a max temperature", function() {
      let thermostat = new Thermostat(25);

      expect(function() {
        thermostat.up();
      }).toThrowError("Temperature already at maximum");
    });

  });

  it("should not have a max temperature of 25 when power saving mode is off", function() {
    let thermostat = new Thermostat(25);
    thermostat.togglePowerSaving();

    expect(function() {
      thermostat.up();
    }).not.toThrow();
  });

  it("should have a max temperature", function() {
    let thermostat = new Thermostat(32);

    expect(function() {
      thermostat.up();
    }).toThrowError("Temperature already at maximum");
  });

  it("should be able to reset the temperature", function() {
    let thermostat = new Thermostat(10);

    expect(thermostat.temperature).not.toEqual(20);

    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  describe("#usage", function() {

    it("should return low-usage when temperature is below 18", function() {
      let thermostat = new Thermostat(17);

      expect(thermostat.usage()).toEqual("low-usage");
    });

    it("should return medium-usage when temperature is above 17 and below 25", function() {
      let thermostat = new Thermostat(18);

      expect(thermostat.usage()).toEqual("medium-usage");
    });

    it("should return high-usage when temperature is 25 or above", function() {
      let thermostat = new Thermostat(25);

      expect(thermostat.usage()).toEqual("high-usage");
    });

  });

});
