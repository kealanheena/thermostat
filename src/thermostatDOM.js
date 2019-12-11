
$( document ).ready(function() {
  var thermostat = new Thermostat();

  $( "#increase" ).click(function() {
    let current_temp = $("#thermostatWhite").height() / $(".row").height()
    thermostat.up();
    updateTemperature();
    $("#thermostatWhite").height( `${Math.round((current_temp) * 100) - 3}%`);
    });

  $( "#decrease" ).click(function() {
    let current_temp = $("#thermostatWhite").height() / $(".row").height()
    thermostat.down();
    updateTemperature();
    $("#thermostatWhite").height( `${Math.round((current_temp) * 100) + 3}%`);
    });

  $( "#reset" ).click(function() {
    thermostat.reset();
    updateTemperature();
    $("#thermostatWhite").height("60%")
    });

  $( "#PSMButton" ).click(function() {
    $(this).toggleClass("btn-dark");
    $(this).toggleClass("btn-outline-dark");
    thermostat.togglePowerSaving();
    if($('#PSMButton').text() == "on"){
      $(this).text('off');
    } else  {
      $(this).text('on');
      if (thermostat.temperature > 25){
        thermostat.reset(25);
        $("#thermostatWhite").height("42%")
      }
      updateTemperature()
    }
  });

  function updateTemperature(){
    $("#temperature").text(`${thermostat.temperature}°C`)
  };
});
