
$( document ).ready(function() {
  var thermostat = new Thermostat();

  $( "#increase" ).click(function() {
    thermostat.up();
    updateTemperature();
    });

  $( "#decrease" ).click(function() {
    thermostat.down();
    updateTemperature();
    });

  $( "#reset" ).click(function() {
    thermostat.reset();
    updateTemperature();
    });

  $( "#PSMButton" ).click(function() {
    $(this).toggleClass("btn-primary");
    $(this).toggleClass("btn-outline-primary");
    thermostat.togglePowerSaving();
    if($('#PSMButton').text() == "on"){
      $(this).text('off');
    } else  {
      $(this).text('on');
      if (thermostat.temperature > 25) thermostat.reset(25);
      updateTemperature()
    }
  });

  function updateTemperature(){
    $("#temperature").text(`${thermostat.temperature}°C`)
  };
});
