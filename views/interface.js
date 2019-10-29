$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  // $('#psm-on').click(function() {
  //   thermostat.powerSavingModeOn();
  //   $('#power-saving').text('on')
  //   updateTemperature();
  // })
  //
  // $('#psm-off').click(function() {
  //   thermostat.powerSavingModeOff();
  //   $('#power-saving').text('off')
  //   updateTemperature();
  // })
  $('#powersaving').click(function() {
    thermostat.power_saving_button();
    $('#power-saving').text(`power saving mode: ${thermostat._power_saving_mode}`)
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temp);
    $('#temperature').attr('class', thermostat.energy_usage());
  }
});
