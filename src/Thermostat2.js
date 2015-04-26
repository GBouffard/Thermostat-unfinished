var Thermostat2 = function(){
  this.temperature = 20;
  this.psmode = true;
};

Thermostat2.prototype.chosenTemperature = function(){
  return this.temperature;
};

Thermostat2.prototype.togglePowerSavingMode = function() {
  return this.psmode;
};

Thermostat2.prototype.up = function() {
  this.temperature ++ ;
};

Thermostat2.prototype.down = function() {
  this.temperature -- ;
};