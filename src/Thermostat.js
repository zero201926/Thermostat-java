'use strict';
function Thermostat() {

  this.MINIMUM_TEMPERATURE = 10;
  this._temp = 20;
  this._power_saving_mode = true;
}

Thermostat.prototype.energy_usage = function() {
  if(this._temp < 18) {
    return 'low-usage';
  } else if(this._temp >= 18 && this._temp < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  };
};

Thermostat.prototype.power_saving_button = function() {
  if(this._power_saving_mode == true) {
    this._power_saving_mode = false;
  } else {
    this._power_saving_mode = true;
  };
};

Thermostat.prototype.max_temp = function() {
  if(this._power_saving_mode == true){
    return 25;
  } else {
    return 32;
  };
};

Thermostat.prototype.current_temp = function() {
  return this._temp;
};

Thermostat.prototype.up = function() {
  if(this.isMaximumTemperature()) {
    return;
  };
  ++this._temp;
  //return this.temp;
};

Thermostat.prototype.down = function() {
  if(this.isMinimumTemperature()) {
    return;
  };
  --this._temp;
  //return this.temp;
};

Thermostat.prototype.reset = function() {
  this._temp = 20;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temp === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
    return this._temp === this.max_temp()
};
