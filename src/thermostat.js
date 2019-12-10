const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;

function Thermostat(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature;
  this.isPowerSaving = true;
};

Thermostat.prototype.up = function() {
  if(this.temperature >= this.maximumTemperature()) {
    throw new Error("Temperature already at maximum");
  }

  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if(this.temperature <= 10) throw new Error("Temperature already at minimum");

  this.temperature --;
};

Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving;
};

Thermostat.prototype.maximumTemperature = function() {
  if(this.isPowerSaving) return 25;
  return 32;
};

Thermostat.prototype.reset = function() {
  this.temperature = DEFAULT_TEMPERATURE;
};
