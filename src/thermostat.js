

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

Thermostat.prototype.togglePowerSaving = function(height, text) {
  if( this.isPowerSaving == false && this.temperature > 25 ){
    text = $('#PSMButton').text("on");
    this.reset(this.maximumTemperature());
    this.temperature == this.maximumTemperature();
    height = $("#thermostatWhite").height("42%")
  } else if ( this.isPowerSaving == false ) {
    text = $('#PSMButton').text("on");
  } else {
    text = $('#PSMButton').text("off");
  };
  this.isPowerSaving = !this.isPowerSaving;
};

Thermostat.prototype.maximumTemperature = function() {
  if(this.isPowerSaving) return 25;
  return 32;
};

Thermostat.prototype.reset = function(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature;
};

Thermostat.prototype.usage = function() {
  if(this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  };

};
