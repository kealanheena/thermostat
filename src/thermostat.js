const DEFAULT_TEMPERATURE = 20
const MINIMUM_TEMPERATURE = 10

function Thermostat(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature
  this.isPowerSaving = true
};

Thermostat.prototype.up = function() {
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.temperature == 10) throw new Error("Temperature too low");

  this.temperature --;
};

Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving;
};
