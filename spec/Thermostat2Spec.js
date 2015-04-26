describe('Thermostat2', function(){
  var thermostat2;
  beforeEach(function(){
    thermostat2 = new Thermostat2();
  });
  describe('at initial state', function(){
    it('starts at a temperature of 20 degrees', function(){
      expect(thermostat2.temperature).toEqual(20);
    });

    it('has a power saving mode turned on by default', function(){
      expect(thermostat2.psmode).toBe(true);
    });
  });

  describe('functionalities', function(){
    it('increases the temperature of 1 with up button', function(){
      thermostat2.up();
      expect(thermostat2.temperature).toEqual(21);
    });

    it('decreases the temperature of 1 with down button', function(){
      thermostat2.down();
      expect(thermostat2.temperature).toEqual(19);
    });

    xit('has a minimum temperature of 10 degrees', function(){

    });

    xit('has a maximum temperature of 25 degrees when power saving mode is on', function(){

    });

    xit('has a maximum temperature of 32 degrees when power saving mode is off', function(){

    });

    xit('has a reset button that can reset the temperature to 20', function(){
      
    });

    xit('has a display that is yellow when it starts', function(){

    });

    xit('has a display that turn the temperature to red when its over 25 degrees', function(){

    });

    xit('has a display that turn the temperature to gree when its under 18 degrees', function(){
      
    });
  });
});