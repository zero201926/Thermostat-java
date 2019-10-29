describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat= new Thermostat();
  });
  
  describe("temperature options", function() {
    it("Thermostat starts at 20 degrees", function() {
      expect(thermostat._temp).toEqual(20);
    });
    it("You can increase the temperature", function() {
      expect(thermostat._temp).toEqual(20);
    });
    it("You can decrease the temperature", function() {
      expect(thermostat._temp).toEqual(20);
    });
    it("The minimum temperature is 10 degrees", function() {
      expect(thermostat._temp).toEqual(20);
    });
  });

  describe("power saving mode on", function() {
    it("Power saving mode is on by default", function() {
      expect(thermostat._temp).toEqual(20);
    });
    it("the maximum temperature is 25 degrees", function() {
      expect(thermostat._temp).toEqual(20);
    });
  });

  describe("power saving mode off", function() {
    it("the maximum temperature is 32 degrees", function() {
      expect(thermostat._temp).toEqual(20);
    });
  });

  describe("#reset", function() {
    it("You can reset the temperature to 20", function() {
      expect(thermostat._temp).toEqual(20);
    });
  });
});
