function Thermostat() {

  this._min_temp = 10;
  this._temp = 20;
  this._power_saving_mode = true;

  Thermostat.max_temp = function() {
    if(Thermostat._power_saving_mode = true){
      return 25;
    }
    return 32;
  };
}
Thermostat .prototype.up = function(song) {
  ++Thermostat._temp
};

Thermostat .prototype.down = function() {
  --Thermostat._temp
};

Thermostat .prototype.reset= function() {
  Thermostat._temp = 20;
};
