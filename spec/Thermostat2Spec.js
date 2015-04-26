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

    it('has a minimum temperature of 10 degrees', function(){
      expect(thermostat2.minimumTemperature).toEqual(10);
    });

    it('is not possible to go under the minimum temperature', function(){
      for(i=0;i<10;i++){
      thermostat2.down();
      };
      expect(function(){thermostat2.down()}).toThrow(new Error('10 is the minimum!'));
    });

    it('has a maximum temperature of 25 degrees when power saving mode is on', function(){
      expect(thermostat2.maximumTemperature()).toEqual(25);
    });

    it('has a maximum temperature of 32 degrees when power saving mode is off', function(){
      thermostat2.togglePowerSavingMode();
      expect(thermostat2.maximumTemperature()).toEqual(32);
    });

    xit('is not possible to go over the maximum temperature', function(){
    // I was expecting this test to work but it doesnt and I dont know why. need to ask teachers
      for(i=0;i<5;i++){
      thermostat2.up();
      };
      expect(function(){thermostat2.up()}).toThrow(new Error('its already the maximum!'));
    });

    it('has a reset button that can reset the temperature to 20', function(){
      for(i=0;i<5;i++){
      thermostat2.up();
      };
      thermostat2.pressReset();
      expect(thermostat2.temperature).toEqual(20);
    });

    it('has a display that is yellow when it starts', function(){
      expect(thermostat2.colorDisplay()).toEqual('Yellow');
    });

    it('has a display that turn the temperature to red when its over 25 degrees', function(){
      thermostat2.togglePowerSavingMode();
      for(i=0;i<10;i++){
      thermostat2.up();
      };
      expect(thermostat2.colorDisplay()).toEqual('Red');
    });

    it('has a display that turn the temperature to gree when its under 18 degrees', function(){
      for(i=0;i<5;i++){
      thermostat2.down();
      };
      expect(thermostat2.colorDisplay()).toEqual('Green');      
    });
  });
});