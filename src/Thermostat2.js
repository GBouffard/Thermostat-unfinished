var Thermostat2 = function(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.psmode = true;
};

Thermostat2.prototype.chosenTemperature = function(){
  return this.temperature;
};

Thermostat2.prototype.maximumTemperature = function(){
  if (this.psmode === true){
    return 25;
  };
  return 32;
};

Thermostat2.prototype.togglePowerSavingMode = function() {
  this.psmode = !this.psmode;
  return this.psmode;
};

Thermostat2.prototype.up = function() {
  if (this.temperature === this.maximumTemperature){
    throw new Error('its already the maximum!');
  };
  this.temperature ++ ;
};

Thermostat2.prototype.down = function() {
  if (this.temperature === this.minimumTemperature){
    throw new Error('10 is the minimum!');
  };
  this.temperature -- ;
};

Thermostat2.prototype.pressReset = function(){
  this.temperature = 20;
};

Thermostat2.prototype.colorDisplay = function (){
  if (this.temperature > 25) return 'Red';
  if (this.temperature < 18) return 'Green';
  return 'Yellow'
};