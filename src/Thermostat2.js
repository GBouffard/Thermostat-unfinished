var Thermostat2 = function(){
  this.temperature = 20;
  this.minimumTemperature = 10;
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
  if (this.temperature === this.minimumTemperature){
    throw new Error('10 is the minimum!');
  };
  this.temperature -- ;
};