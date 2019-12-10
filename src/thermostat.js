const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;
var maximumTemperature    = 25;

function Thermostat(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature;
  this.isPowerSaving = true;
};

Thermostat.prototype.up = function() {
  // if(this.isPowerSaving) {
    if(this.temperature >= maximumTemperature) {
      throw new Error("Temperature already at maximum");
    }
  // }

  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) throw new Error("Temperature already at minimum");

  this.temperature --;
};

Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving;
};
