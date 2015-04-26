describe('Thermostat2', function(){
  var thermostat2;
  
  describe('at initial state', function(){
    it('starts at a temperature of 20 degrees', function(){
      thermostat2 = new Thermostat2;
      expect(thermostat2.temperature()).toEqual(20);
    });
  });
});