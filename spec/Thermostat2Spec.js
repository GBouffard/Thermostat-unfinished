describe('Thermostat2', function(){
  var thermostat2;
  
  describe('at initial state', function(){
    it('starts at a temperature of 20 degrees', function(){
      thermostat2 = new Thermostat2;
      expect(thermostat2.temperature()).toEqual(20);
    });

    xit('has a power saving mode that can be turned on and off', function(){

    });

    xit('has a power saving mode turned on by default', function(){

    });
  });

  describe('functionalities', function(){
    xit('increases the temperature of 1 with up button', function(){

    });

    xit('decreases the temperature of 1 with up button', function(){

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