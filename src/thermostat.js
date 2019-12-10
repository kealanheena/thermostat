const DEFAULT_TEMPERATURE = 20

function Thermostat(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature
};

Thermostat.prototype.up = function() {
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  this.temperature --;
};
