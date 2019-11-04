$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  });
  updateCity()
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
  $('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
  })
  $('#powersaving').click(function() {
    thermostat.power_saving_button();
    $('#power-saving-status').text(`${thermostat._power_saving_mode}`)
    updateTemperature();
  })
///////////////////////////////////////////////
  function updateTemperature() {
    $('#temperature').text(thermostat._temp);
    $('#temperature').attr('class', thermostat.energy_usage());
    $.get('http://localhost:4567/thermostat-database'), function(data) {
      $('#temperature').text(data);
    }
  }
///////////////////////////////////////////////
  function updateCity(city='London') {
      $('#city').text(city)
  }
  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
  updateCity(city)
  })
  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
   var units = '&units=metric';

   $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   })
 }
  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })
});
