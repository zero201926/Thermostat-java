'use strict';
describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("temperature options", function() {
    it("Thermostat starts at 20 degrees", function() {
      expect(thermostat.current_temp()).toEqual(20);
    });
    it("You can increase the temperature", function() {
      thermostat.up();
      expect(thermostat.current_temp()).toEqual(21);
    });
    it("You can decrease the temperature", function() {
      thermostat.down();
      expect(thermostat.current_temp()).toEqual(19);
    });
    it("The minimum temperature is 10 degrees", function() {
      expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
    });
  });

  describe("power saving mode on", function() {
    it("Power saving mode is on by default", function() {
      expect(thermostat._power_saving_mode).toEqual(true);
    });
    it("the maximum temperature is 25 degrees", function() {

      expect(thermostat.max_temp()).toEqual(25);
    });
  });

  describe("power saving mode off", function() {
    // thermostat = jasmine.createSpyObj('_power_saving_mode', [false])
    // thermostat._power_saving_mode = false
    it("the maximum temperature is 32 degrees", function() {
      console.log(thermostat._power_saving_mode)
      thermostat.power_saving_button();
      console.log(thermostat._power_saving_mode)
      expect(thermostat.max_temp()).toEqual(32);
    });
  });

  describe("#reset", function() {
    it("You can reset the temperature to 20", function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat._temp).toEqual(20);
    });
  });

  describe('#energy_usage', function() {
    it("it returns low-usage when temp <18", function() {
      for(var i = 0; i < 4; i++) {
        thermostat.down();
      };
      expect(thermostat.energy_usage()).toEqual('low-usage')
    });
    it("it returns medium-usage when temp >=18 and <25", function() {
      thermostat.down();
      thermostat.down();
      expect(thermostat.energy_usage()).toEqual('medium-usage')
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.energy_usage()).toEqual('medium-usage')
    });
    it("it returns high-usage when temp >=25", function() {
      for(var i = 0; i < 5; i++) {
        thermostat.up();
      };
      expect(thermostat.energy_usage()).toEqual('high-usage')
    });
  });

  describe('#isMinimumTemperature', function() {
    it("will only go as low as 10", function() {
      for(var i = 0; i < 11; i++) {
        thermostat.down();
      };
      expect(thermostat.current_temp()).toEqual(10)
    });
  });

  describe('#isMaximumTemperature', function() {
    it("will only go as high as 25 in power saving mode", function() {
      for(var i = 0; i < 10; i++) {
        thermostat.up();
      };
      expect(thermostat.current_temp()).toEqual(25)
    });
    it("will only go as high as 32 in non power saving mode", function() {
      thermostat.power_saving_button()
      for(var i = 0; i < 15; i++) {
        thermostat.up();
      };
      expect(thermostat.current_temp()).toEqual(32)
    });
  });
});
